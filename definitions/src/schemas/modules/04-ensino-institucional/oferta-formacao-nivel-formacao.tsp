using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** OfertaFormacaoNivelFormacao. */
@entity(Tokens.OfertaFormacaoNivelFormacao)
model OfertaFormacaoNivelFormacao {
  ...ObjectUuid;

  /** Oferta de formação. */
  ofertaFormacao: OfertaFormacao;

  /** Nível de formação. */
  nivelFormacao: NivelDeFormacao;

  ...DatedObject;
}

/** Visão completa de uma oferta de formação. */
@entity(Tokens.OfertaFormacaoNivelFormacao_View)
model OfertaFormacaoNivelFormacaoView {
  ...OmitProperties<OfertaFormacaoNivelFormacao, "ofertaFormacao" | "nivelFormacao">;
  ofertaFormacao: OfertaFormacaoFindOneResultView;
  nivelFormcao: NivelDeFormacaoFindOneResultView;
}

/** Dados de entrada para encontrar uma oferta de formação por ID. */
@entity(Tokens.OfertaFormacaoNivelFormacao_FindOneInput_View)
model OfertaFormacaoNivelFormacaoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.OfertaFormacaoNivelFormacao>)
  id: OfertaFormacaoNivelFormacao.id;
}

/** Visão FindOne de uma oferta de formação. */
@entity(Tokens.OfertaFormacaoNivelFormacao_FindOneResult_View)
@entityPartialOf(Tokens.OfertaFormacaoNivelFormacao_View)
model OfertaFormacaoNivelFormacaoFindOneResultView {
  ...PickProperties<OfertaFormacaoNivelFormacaoView, "id">;
  ...PickProperties<OfertaFormacaoNivelFormacaoView, "ofertaFormacao" | "nivelFormacao">;
  ...PickProperties<OfertaFormacaoNivelFormacaoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma oferta de formação. */
@entity(Tokens.OfertaFormacaoNivelFormacao_InputCreate_View)
model OfertaFormacaoNivelFormacaoInputCreateView {
  ofertaFormacao: OfertaFormacaoFindOneInputView;
  nivelFormcao: NivelDeFormacaoFindOneInputView;
}

/** Dados de entrada para a atualização de uma oferta de formação. */
@entity(Tokens.OfertaFormacaoNivelFormacao_InputUpdate_View)
model OfertaFormacaoNivelFormacaoInputUpdateView is OptionalProperties<OfertaFormacaoNivelFormacaoInputCreateView>;

/** Resultados da busca a OfertaFormacaoNivelFormacaos. */
@entity(Tokens.OfertaFormacaoNivelFormacao_ListResult_View)
model OfertaFormacaoNivelFormacaoListResultView is PaginationResultView<OfertaFormacaoNivelFormacaoFindOneResultView>;

// =====================================
// Operações
// =====================================

model OfertaFormacaoNivelFormacaoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.OfertaFormacaoNivelFormacao_Operations_FindOneById,
    OfertaFormacaoNivelFormacaoFindOneInputView.id,
    OfertaFormacaoNivelFormacaoFindOneResultView
  >;

model OfertaFormacaoNivelFormacaoDeleteByIdOperation
  is GenericOperationDeleteOneById<
    Tokens.OfertaFormacaoNivelFormacao_Operations_DeleteOneById,
    OfertaFormacaoNivelFormacaoFindOneInputView.id
  >;

model OfertaFormacaoNivelFormacaoCreateOperation
  is GenericOperationCreate<
    Tokens.OfertaFormacaoNivelFormacao_Operations_Create,
    OfertaFormacaoNivelFormacaoInputCreateView,
    OfertaFormacaoNivelFormacaoFindOneResultView
  >;

model OfertaFormacaoNivelFormacaoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.OfertaFormacaoNivelFormacao_Operations_UpdateOneById,
    OfertaFormacaoNivelFormacaoFindOneInputView.id,
    OfertaFormacaoNivelFormacaoInputUpdateView,
    OfertaFormacaoNivelFormacaoFindOneResultView
  >;

model OfertaFormacaoNivelFormacaoListOperation
  is GenericOperationList<Tokens.OfertaFormacaoNivelFormacao_Operations_List, OfertaFormacaoNivelFormacaoListResultView, {}>;
