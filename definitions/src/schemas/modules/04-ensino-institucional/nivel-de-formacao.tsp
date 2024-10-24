using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** NivelDeFormacao. */
@entity(Tokens.NivelDeFormacao)
model NivelDeFormacao {
  ...ObjectUuid;

  /** Apelido do nível de formação. */
  @minLength(1)
  slug: string;

  ...DatedObject;
}

/** Visão completa de um nível de formação. */
@entity(Tokens.NivelDeFormacao_View)
model NivelDeFormacaoView {
  ...NivelDeFormacao;
}

/** Dados de entrada para encontrar um nível de formação por ID. */
@entity(Tokens.NivelDeFormacao_FindOneInput_View)
model NivelDeFormacaoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.NivelDeFormacao>)
  id: NivelDeFormacao.id;
}

/** Visão FindOne de um nível de formação. */
@entity(Tokens.NivelDeFormacao_FindOneResult_View)
@entityPartialOf(Tokens.NivelDeFormacao_View)
model NivelDeFormacaoFindOneResultView {
  ...PickProperties<NivelDeFormacaoView, "id">;
  ...PickProperties<NivelDeFormacaoView, "slug">;
  ...PickProperties<NivelDeFormacaoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um nível de formação. */
@entity(Tokens.NivelDeFormacao_InputCreate_View)
model NivelDeFormacaoInputCreateView {
  ...PickProperties<NivelDeFormacaoView, "slug">;
}

/** Dados de entrada para a atualização de um nível de formação. */
@entity(Tokens.NivelDeFormacao_InputUpdate_View)
model NivelDeFormacaoInputUpdateView is OptionalProperties<NivelDeFormacaoInputCreateView>;

/** Resultados da busca aos níveis de formações. */
@entity(Tokens.NivelDeFormacao_ListResult_View)
model NivelDeFormacaoListResultView is PaginationResultView<NivelDeFormacaoFindOneResultView>;

// =====================================
// Operações
// =====================================

model NivelDeFormacaoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.NivelDeFormacao_Operations_FindOneById,
    NivelDeFormacaoFindOneInputView.id,
    NivelDeFormacaoFindOneResultView
  >;

model NivelDeFormacaoDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.NivelDeFormacao_Operations_DeleteOneById, NivelDeFormacaoFindOneInputView.id>;

model NivelDeFormacaoCreateOperation
  is GenericOperationCreate<Tokens.NivelDeFormacao_Operations_Create, NivelDeFormacaoInputCreateView, NivelDeFormacaoFindOneResultView>;

model NivelDeFormacaoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.NivelDeFormacao_Operations_UpdateOneById,
    NivelDeFormacaoFindOneInputView.id,
    NivelDeFormacaoInputUpdateView,
    NivelDeFormacaoFindOneResultView
  >;

model NivelDeFormacaoListOperation is GenericOperationList<Tokens.NivelDeFormacao_Operations_List, NivelDeFormacaoListResultView, {}>;
