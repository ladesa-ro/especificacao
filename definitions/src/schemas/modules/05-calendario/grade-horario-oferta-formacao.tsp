using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** GradeHorarioOfertaFormacao. */
@entity(Tokens.GradeHorarioOfertaFormacao)
model GradeHorarioOfertaFormacao {
  ...ObjectUuid;

  /** Campus. */
  campus: Campus;

  /** Oferta de formação. */
  ofertaFormacao: OfertaFormacao;

  ...DatedObject;
}

/** Visão completa de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacao_View)
model GradeHorarioOfertaFormacaoView {
  ...OmitProperties<GradeHorarioOfertaFormacao, "campus" | "ofertaFormacao">;
  campus: CampusFindOneResultView;
  ofertaFormacao: OfertaFormacaoFindOneResultView;
}

/** Dados de entrada para encontrar uma oferta de formação por ID. */
@entity(Tokens.GradeHorarioOfertaFormacao_FindOneInput_View)
model GradeHorarioOfertaFormacaoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.GradeHorarioOfertaFormacao>)
  id: GradeHorarioOfertaFormacao.id;
}

/** Visão FindOne de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacao_FindOneResult_View)
@entityPartialOf(Tokens.GradeHorarioOfertaFormacao_View)
model GradeHorarioOfertaFormacaoFindOneResultView {
  ...PickProperties<GradeHorarioOfertaFormacaoView, "id">;
  ...PickProperties<GradeHorarioOfertaFormacaoView, "campus" | "ofertaFormacao">;
  ...PickProperties<GradeHorarioOfertaFormacaoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacao_InputCreate_View)
model GradeHorarioOfertaFormacaoInputCreateView {
  campus: CampusFindOneInputView;
  ofertaFormacao: OfertaFormacaoFindOneInputView;
}

/** Dados de entrada para a atualização de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacao_InputUpdate_View)
model GradeHorarioOfertaFormacaoInputUpdateView is OptionalProperties<GradeHorarioOfertaFormacaoInputCreateView>;

/** Resultados da busca a GradeHorarioOfertaFormacaos. */
@entity(Tokens.GradeHorarioOfertaFormacao_ListResult_View)
model GradeHorarioOfertaFormacaoListResultView is PaginationResultView<GradeHorarioOfertaFormacaoFindOneResultView>;

// =====================================
// Operações
// =====================================

model GradeHorarioOfertaFormacaoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.GradeHorarioOfertaFormacao_Operations_FindOneById,
    GradeHorarioOfertaFormacaoFindOneInputView.id,
    GradeHorarioOfertaFormacaoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoDeleteByIdOperation
  is GenericOperationDeleteOneById<
    Tokens.GradeHorarioOfertaFormacao_Operations_DeleteOneById,
    GradeHorarioOfertaFormacaoFindOneInputView.id
  >;

model GradeHorarioOfertaFormacaoCreateOperation
  is GenericOperationCreate<
    Tokens.GradeHorarioOfertaFormacao_Operations_Create,
    GradeHorarioOfertaFormacaoInputCreateView,
    GradeHorarioOfertaFormacaoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.GradeHorarioOfertaFormacao_Operations_UpdateOneById,
    GradeHorarioOfertaFormacaoFindOneInputView.id,
    GradeHorarioOfertaFormacaoInputUpdateView,
    GradeHorarioOfertaFormacaoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoListOperation
  is GenericOperationList<Tokens.GradeHorarioOfertaFormacao_Operations_List, GradeHorarioOfertaFormacaoListResultView, {}>;
