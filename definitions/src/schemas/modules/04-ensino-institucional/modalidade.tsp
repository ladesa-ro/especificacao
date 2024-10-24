using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Modalidade. */
@entity(Tokens.Modalidade)
model Modalidade {
  ...ObjectUuid;

  /** Nome da modalidade. */
  @minLength(1)
  nome: string;

  /** Apelido da modalidade. */
  @minLength(1)
  slug: string;

  ...DatedObject;
}

/** Visão completa de uma modalidade. */
@entity(Tokens.Modalidade_View)
model ModalidadeView {
  ...Modalidade;
}

/** Dados de entrada para encontrar uma modalidade por ID. */
@entity(Tokens.Modalidade_FindOneInput_View)
model ModalidadeFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Modalidade>)
  id: Modalidade.id;
}

/** Visão FindOne de uma modalidade. */
@entity(Tokens.Modalidade_FindOneResult_View)
@entityPartialOf(Tokens.Modalidade_View)
model ModalidadeFindOneResultView {
  ...PickProperties<ModalidadeView, "id">;
  ...PickProperties<ModalidadeView, "slug">;
  ...PickProperties<ModalidadeView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma modalidade. */
@entity(Tokens.Modalidade_InputCreate_View)
model ModalidadeInputCreateView {
  ...PickProperties<ModalidadeView, "slug">;
}

/** Dados de entrada para a atualização de uma modalidade. */
@entity(Tokens.Modalidade_InputUpdate_View)
model ModalidadeInputUpdateView is OptionalProperties<ModalidadeInputCreateView>;

/** Resultados da busca a Modalidades. */
@entity(Tokens.Modalidade_ListResult_View)
model ModalidadeListResultView is PaginationResultView<ModalidadeFindOneResultView>;

// =====================================
// Operações
// =====================================

model ModalidadeFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Modalidade_Operations_FindOneById, ModalidadeFindOneInputView.id, ModalidadeFindOneResultView>;

model ModalidadeDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.Modalidade_Operations_DeleteOneById, ModalidadeFindOneInputView.id>;

model ModalidadeCreateOperation
  is GenericOperationCreate<Tokens.Modalidade_Operations_Create, ModalidadeInputCreateView, ModalidadeFindOneResultView>;

model ModalidadeUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Modalidade_Operations_UpdateOneById,
    ModalidadeFindOneInputView.id,
    ModalidadeInputUpdateView,
    ModalidadeFindOneResultView
  >;

model ModalidadeListOperation is GenericOperationList<Tokens.Modalidade_Operations_List, ModalidadeListResultView, {}>;
