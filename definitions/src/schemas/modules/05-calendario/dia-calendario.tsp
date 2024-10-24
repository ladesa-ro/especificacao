using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** DiaCalendario. */
@entity(Tokens.DiaCalendario)
model DiaCalendario {
  ...ObjectUuid;

  /** Data. */
  data: date;

  /** Define que o dia é letivo. */
  diaLetivo: boolean;

  /** Define que o dia é feriado. */
  feriado: boolean;

  /** Calendario. */
  calendario: CalendarioLetivo;

  ...DatedObject;
}

/** Visão completa de um DiaCalendario. */
@entity(Tokens.DiaCalendario_View)
model DiaCalendarioView {
  ...OmitProperties<DiaCalendario, "calendario">;
  calendario: CalendarioLetivoFindOneResultView;
}

/** Dados de entrada para encontrar um DiaCalendario por ID. */
@entity(Tokens.DiaCalendario_FindOneInput_View)
model DiaCalendarioFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.DiaCalendario>)
  id: DiaCalendario.id;
}

/** Visão FindOne de um DiaCalendario. */
@entity(Tokens.DiaCalendario_FindOneResult_View)
@entityPartialOf(Tokens.DiaCalendario_View)
model DiaCalendarioFindOneResultView {
  ...PickProperties<DiaCalendarioView, "id">;
  ...PickProperties<DiaCalendarioView, "data" | "diaLetivo" | "feriado">;
  ...PickProperties<DiaCalendarioView, "calendario">;
  ...PickProperties<DiaCalendarioView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um DiaCalendario. */
@entity(Tokens.DiaCalendario_InputCreate_View)
model DiaCalendarioInputCreateView {
  data: date;
  feriado: boolean;
  diaLetivo: boolean;
  calendario: CalendarioLetivoFindOneInputView | null;
}

/** Dados de entrada para a atualização de um DiaCalendario. */
@entity(Tokens.DiaCalendario_InputUpdate_View)
model DiaCalendarioInputUpdateView is OptionalProperties<DiaCalendarioInputCreateView>;

/** Resultados da busca a DiaCalendarios. */
@entity(Tokens.DiaCalendario_ListResult_View)
model DiaCalendarioListResultView is PaginationResultView<DiaCalendarioFindOneResultView>;

// =====================================
// Operações
// =====================================

model DiaCalendarioFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.DiaCalendario_Operations_FindOneById,
    DiaCalendarioFindOneInputView.id,
    DiaCalendarioFindOneResultView
  >;

model DiaCalendarioDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.DiaCalendario_Operations_DeleteOneById, DiaCalendarioFindOneInputView.id>;

model DiaCalendarioCreateOperation
  is GenericOperationCreate<Tokens.DiaCalendario_Operations_Create, DiaCalendarioInputCreateView, DiaCalendarioFindOneResultView>;

model DiaCalendarioUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.DiaCalendario_Operations_UpdateOneById,
    DiaCalendarioFindOneInputView.id,
    DiaCalendarioInputUpdateView,
    DiaCalendarioFindOneResultView
  >;

model DiaCalendarioListOperation
  is GenericOperationList<
    Tokens.DiaCalendario_Operations_List,
    DiaCalendarioListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCalendarioId")
      @extension("x-unispec-http-key", "filter.calendario.id")
      `filter.calendario.id`?: Pagination.GenericFilter.eq[];
    }
  >;
