using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Cidade. */
@entity(Tokens.Cidade)
model Cidade {
  ...ObjectIntegerId;

  /** Nome oficial da cidade. */
  nome: string;

  /** Estado da cidade */
  estado: Estado;
}

/** Visão completa de uma cidade. */
@entity(Tokens.Cidade_View)
model CidadeView {
  ...OmitProperties<Cidade, "estado">;
  estado: EstadoFindOneResultView;
}

/**
 * Dados de entrada para encontrar uma cidade por id.
 */
@entity(Tokens.Cidade_FindOneInput_View)
model CidadeFindOneInputView is PickProperties<CidadeView, "id">;

/**
 * Visão FindOne de uma cidade.
 */
@entity(Tokens.Cidade_FindOneResult_View)
@entityPartialOf(Tokens.Cidade_View)
model CidadeFindOneResultView {
  //
  ...PickProperties<CidadeView, "id">;

  ...PickProperties<CidadeView, "nome">;
  ...PickProperties<CidadeView, "estado">;
}

/** Resultados da busca a cidades. */
@entity(Tokens.Cidade_ListResult_View)
model CidadeListResultView is PaginationResultView<CidadeFindOneResultView>;

// =====================================
// operações
// =====================================

model CidadeFindOneByIdOperation is GenericOperationFindOneById<Tokens.Cidade_Operations_FindOneById, Cidade.id, CidadeFindOneResultView>;

model CidadeListOperation
  is GenericOperationList<
    Tokens.Cidade_Operations_List,
    CidadeListResultView,
    {
      // filters
      @extension("x-unispec-gql-key", "filterEstadoId")
      @extension("x-unispec-http-key", "filter.estado.id")
      `filter.estado.id`?: Pagination.GenericFilter.eq[];
    }
  >;
