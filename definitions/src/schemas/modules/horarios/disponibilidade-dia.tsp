using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia)
model DisponibilidadeDia {
  ...ObjectUuid;

  /** Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar. */
  rrule: string;

  /** Intervalo de tempo. */
  intervaloDeTempo: IntervaloDeTempo;

  /** Disponibilidade. */
  disponibilidade: Disponibilidade;

  ...DatedObject;
}

/** Visão completa de um DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia_View)
model DisponibilidadeDiaView {
  ...OmitProperties<DisponibilidadeDia, "intervaloDeTempo" | "disponibilidade">;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
  disponibilidade: DisponibilidadeFindOneResultView;
}

/** Dados de entrada para encontrar um DisponibilidadeDia por ID. */
@entity(Tokens.DisponibilidadeDia_FindOneInput_View)
model DisponibilidadeDiaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.DisponibilidadeDia>)
  id: DisponibilidadeDia.id;
}

/** Visão FindOne de um DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia_FindOneResult_View)
@entityPartialOf(Tokens.DisponibilidadeDia_View)
model DisponibilidadeDiaFindOneResultView {
  ...PickProperties<DisponibilidadeDiaView, "id">;
  ...PickProperties<DisponibilidadeDiaView, "rrule">;
  ...PickProperties<DisponibilidadeDiaView, "intervaloDeTempo" | "disponibilidade">;
  ...PickProperties<DisponibilidadeDiaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia_InputCreate_View)
model DisponibilidadeDiaInputCreateView {
  rrule: DisponibilidadeDia.rrule;
  intervaloDeTempo: IntervaloDeTempoInputView;
  disponibilidade: DisponibilidadeFindOneInputView;
}

/** Dados de entrada para a atualização de um DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia_InputUpdate_View)
model DisponibilidadeDiaInputUpdateView is OptionalProperties<DisponibilidadeDiaInputCreateView>;

/** Resultados da busca a DisponibilidadeDia. */
@entity(Tokens.DisponibilidadeDia_ListResult_View)
model DisponibilidadeDiaListResultView is PaginationResultView<DisponibilidadeDiaFindOneResultView>;

// =====================================
// Operações
// =====================================

model DisponibilidadeDiaFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.DisponibilidadeDia_Operations_FindOneById,
    DisponibilidadeDiaFindOneInputView.id,
    DisponibilidadeDiaFindOneResultView
  >;

model DisponibilidadeDiaDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.DisponibilidadeDia_Operations_DeleteOneById, DisponibilidadeDiaFindOneInputView.id>;

model DisponibilidadeDiaCreateOperation
  is GenericOperationCreate<
    Tokens.DisponibilidadeDia_Operations_Create,
    DisponibilidadeDiaInputCreateView,
    DisponibilidadeDiaFindOneResultView
  >;

model DisponibilidadeDiaUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.DisponibilidadeDia_Operations_UpdateOneById,
    DisponibilidadeDiaFindOneInputView.id,
    DisponibilidadeDiaInputUpdateView,
    DisponibilidadeDiaFindOneResultView
  >;

model DisponibilidadeDiaListOperation
  is GenericOperationList<
    Tokens.DisponibilidadeDia_Operations_List,
    DisponibilidadeDiaListResultView,
    {
      @extension("x-unispec-gql-key", "filterDisponibilidadeId")
      @extension("x-unispec-http-key", "filter.disponibilidade.id")
      `filter.disponibilidade.id`?: Pagination.GenericFilter.eq[];
    }
  >;
