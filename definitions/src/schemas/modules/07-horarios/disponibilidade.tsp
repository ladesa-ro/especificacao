using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Disponibilidade. */
@entity(Tokens.Disponibilidade)
model Disponibilidade {
  ...ObjectUuid;

  /** Data de início. */
  dataInicio: date;

  /** Data de término. */
  dataFim: date | null;

  ...DatedObject;
}

/** Visão completa de uma Disponibilidade. */
@entity(Tokens.Disponibilidade_View)
model DisponibilidadeView {
  ...Disponibilidade;
}

/** Dados de entrada para encontrar uma Disponibilidade por ID. */
@entity(Tokens.Disponibilidade_FindOneInput_View)
model DisponibilidadeFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Disponibilidade>)
  id: Disponibilidade.id;
}

/** Visão FindOne de uma Disponibilidade. */
@entity(Tokens.Disponibilidade_FindOneResult_View)
@entityPartialOf(Tokens.Disponibilidade)
model DisponibilidadeFindOneResultView {
  ...PickProperties<DisponibilidadeView, "id">;
  ...PickProperties<DisponibilidadeView, "dataInicio" | "dataFim">;
  ...PickProperties<DisponibilidadeView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Disponibilidade. */
@entity(Tokens.Disponibilidade_InputCreate_View)
model DisponibilidadeInputCreateView {
  dataInicio: date;
  dataFim: date | null;
}

/** Dados de entrada para a atualização de uma Disponibilidade. */
@entity(Tokens.Disponibilidade_InputUpdate_View)
model DisponibilidadeInputUpdateView is OptionalProperties<DisponibilidadeInputCreateView>;

/** Resultados da busca a Disponibilidades. */
@entity(Tokens.Disponibilidade_ListResult_View)
model DisponibilidadeListResultView is PaginationResultView<DisponibilidadeFindOneResultView>;

// =====================================
// Operações
// =====================================

model DisponibilidadeFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.Disponibilidade_Operations_FindOneById,
    DisponibilidadeFindOneInputView.id,
    DisponibilidadeFindOneResultView
  >;

model DisponibilidadeDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.Disponibilidade_Operations_DeleteOneById, DisponibilidadeFindOneInputView.id>;

model DisponibilidadeCreateOperation
  is GenericOperationCreate<Tokens.Disponibilidade_Operations_Create, DisponibilidadeInputCreateView, DisponibilidadeFindOneResultView>;

model DisponibilidadeUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Disponibilidade_Operations_UpdateOneById,
    DisponibilidadeFindOneInputView.id,
    DisponibilidadeInputUpdateView,
    DisponibilidadeFindOneResultView
  >;

model DisponibilidadeListOperation is GenericOperationList<Tokens.Disponibilidade_Operations_List, DisponibilidadeListResultView, {}>;
