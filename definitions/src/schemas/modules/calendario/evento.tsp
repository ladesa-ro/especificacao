using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Evento. */
@entity(Tokens.Evento)
model Evento {
  ...ObjectUuid;

  /** Nome do evento. */
  nome: string | null;

  /** Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar. */
  rrule: string;

  /** Cor da Evento. */
  cor: string | null;

  /** Calendario. */
  calendario: CalendarioLetivo;

  ...DatedObject;
}

/** Visão completa de um Evento. */
@entity(Tokens.Evento_View)
model EventoView {
  ...OmitProperties<Evento, "calendario">;
  calendario: CalendarioLetivoFindOneResultView;
}

/** Dados de entrada para encontrar um Evento por ID. */
@entity(Tokens.Evento_FindOneInput_View)
model EventoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Evento>)
  id: Evento.id;
}

/** Visão FindOne de um Evento. */
@entity(Tokens.Evento_FindOneResult_View)
@entityPartialOf(Tokens.Evento_View)
model EventoFindOneResultView {
  ...PickProperties<EventoView, "id">;
  ...PickProperties<EventoView, "nome" | "rrule" | "cor">;
  ...PickProperties<EventoView, "calendario">;
  ...PickProperties<EventoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um Evento. */
@entity(Tokens.Evento_InputCreate_View)
model EventoInputCreateView {
  nome: string | null;
  rrule: string;
  cor: string | null;
  calendario: CalendarioLetivoFindOneInputView;
}

/** Dados de entrada para a atualização de um Evento. */
@entity(Tokens.Evento_InputUpdate_View)
model EventoInputUpdateView is OptionalProperties<EventoInputCreateView>;

/** Resultados da busca a Eventos. */
@entity(Tokens.Evento_ListResult_View)
model EventoListResultView is PaginationResultView<EventoFindOneResultView>;

// =====================================
// Operações
// =====================================

model EventoFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Evento_Operations_FindOneById, EventoFindOneInputView.id, EventoFindOneResultView>;

model EventoDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Evento_Operations_DeleteOneById, EventoFindOneInputView.id>;

model EventoCreateOperation is GenericOperationCreate<Tokens.Evento_Operations_Create, EventoInputCreateView, EventoFindOneResultView>;

model EventoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Evento_Operations_UpdateOneById,
    EventoFindOneInputView.id,
    EventoInputUpdateView,
    EventoFindOneResultView
  >;

model EventoListOperation
  is GenericOperationList<
    Tokens.Evento_Operations_List,
    EventoListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCalendarioId")
      @extension("x-unispec-http-key", "filter.calendario.id")
      `filter.calendario.id`?: Pagination.GenericFilter.eq[];
    }
  >;
