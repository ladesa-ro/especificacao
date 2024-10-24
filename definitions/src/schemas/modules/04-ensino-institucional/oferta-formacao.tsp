using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** OfertaFormacao. */
@entity(Tokens.OfertaFormacao)
model OfertaFormacao {
  ...ObjectUuid;

  /** Nome da oferta de formação. */
  @minLength(1)
  nome: string;

  /** Apelido da oferta de formação. */
  @minLength(1)
  slug: string;

  ...DatedObject;
}

/** Visão completa de uma oferta de formação. */
@entity(Tokens.OfertaFormacao_View)
model OfertaFormacaoView {
  ...OfertaFormacao;
}

/** Dados de entrada para encontrar uma oferta de formação por ID. */
@entity(Tokens.OfertaFormacao_FindOneInput_View)
model OfertaFormacaoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.OfertaFormacao>)
  id: OfertaFormacao.id;
}

/** Visão FindOne de uma oferta de formação. */
@entity(Tokens.OfertaFormacao_FindOneResult_View)
@entityPartialOf(Tokens.OfertaFormacao_View)
model OfertaFormacaoFindOneResultView {
  ...PickProperties<OfertaFormacaoView, "id">;
  ...PickProperties<OfertaFormacaoView, "nome">;
  ...PickProperties<OfertaFormacaoView, "slug">;
  ...PickProperties<OfertaFormacaoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma oferta de formação. */
@entity(Tokens.OfertaFormacao_InputCreate_View)
model OfertaFormacaoInputCreateView {
  ...PickProperties<OfertaFormacaoView, "nome">;
  ...PickProperties<OfertaFormacaoView, "slug">;
}

/** Dados de entrada para a atualização de uma oferta de formação. */
@entity(Tokens.OfertaFormacao_InputUpdate_View)
model OfertaFormacaoInputUpdateView is OptionalProperties<OfertaFormacaoInputCreateView>;

/** Resultados da busca a OfertaFormacaos. */
@entity(Tokens.OfertaFormacao_ListResult_View)
model OfertaFormacaoListResultView is PaginationResultView<OfertaFormacaoFindOneResultView>;

// =====================================
// Operações
// =====================================

model OfertaFormacaoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.OfertaFormacao_Operations_FindOneById,
    OfertaFormacaoFindOneInputView.id,
    OfertaFormacaoFindOneResultView
  >;

model OfertaFormacaoDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.OfertaFormacao_Operations_DeleteOneById, OfertaFormacaoFindOneInputView.id>;

model OfertaFormacaoCreateOperation
  is GenericOperationCreate<Tokens.OfertaFormacao_Operations_Create, OfertaFormacaoInputCreateView, OfertaFormacaoFindOneResultView>;

model OfertaFormacaoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.OfertaFormacao_Operations_UpdateOneById,
    OfertaFormacaoFindOneInputView.id,
    OfertaFormacaoInputUpdateView,
    OfertaFormacaoFindOneResultView
  >;

model OfertaFormacaoListOperation is GenericOperationList<Tokens.OfertaFormacao_Operations_List, OfertaFormacaoListResultView, {}>;
