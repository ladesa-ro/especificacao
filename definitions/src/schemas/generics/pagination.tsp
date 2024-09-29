using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

@baseUri("ladesa://schemas/v3/generics/pagination")
namespace Ladesa.Schemas.Pagination;

/**
 * Configuração de ordenação de uma propriedade.
 */
@deprecated("")
@entity(Tokens.Shared_Pagination_SortBy_View)
model PaginationSortByView {
  /**
   * Propriedade ordenada.
   */
  @pattern("^[\\D\\.]+$")
  property: string;

  /**
   * Modo de ordenação.
   */
  @pattern("^(ASC|DESC)$")
  mode: string;
}

/**
 * Configuração de filtro por restrições de uma propriedade.
 */
@deprecated("")
@entity(Tokens.Shared_Pagination_Filter_View)
model PaginationFilterView {
  /**
   * Propriedade filtrada.
   */
  property: string;

  /**
   * Restrições de filtragem.
   */
  restrictions: Array<string>;
}

model GenericFilter<Http = never, Gql = never> {
  @pattern("^$gt:.+$")
  @extension("x-unispec-gql-key", Gql)
  @extension("x-unispec-http-key", Http)
  gt: string;

  @pattern("^$eq:.+$")
  @extension("x-unispec-gql-key", Gql)
  @extension("x-unispec-http-key", Http)
  eq: string;
}

namespace Input {
  @pattern("^[\\D\\.]+:(ASC|DESC)$")
  scalar sort_by_constraint extends string;

  @entity(Tokens.Shared_Pagination_Input_Base_View)
  model PaginationInputBaseView {
    /**
     * Página de consulta.
     */
    @minValue(1)
    page?: integer | null = 1;

    /**
     * Limite da quantidade de resultados por página.
     */
    @minValue(1)
    limit?: integer | null;

    /**
     * Busca textual.
     */
    search?: string | null;
  }

  @deprecated("")
  @entity(Tokens.Shared_Pagination_Input_View)
  model PaginationInputView {
    ...PaginationInputBaseView;

    /**
     * Ordenação.
     */
    sortBy: PaginationSortByView[];

    /**
     * Filtros.
     */
    filter: PaginationFilterView[];
  }

  @entity(Tokens.Shared_SearchInput_View)
  model GenericSearchInputView {
    ...PaginationInputBaseView;

    /**
     * Ordenação.
     */
    sortBy: string[];

    // /**
    //  * Filtros.
    //  */
    // filter: string[][];
  }
}

namespace Result {
  /**
   * Metadados dos resultados de busca.
   */
  @entity(Tokens.Shared_Pagination_Result_Meta_View)
  model PaginationResultMeta {
    @doc("Quantidade de itens por página.")
    itemsPerPage: integer;

    @doc("Total de itens.")
    totalItems: integer;

    @doc("Página atual.")
    currentPage: integer;

    @doc("Quantidade total de páginas.")
    totalPages: integer;

    @doc("Termo textual da busca.")
    search: string;

    @doc("Ordenação.")
    sortBy: PaginationSortByView[];

    @doc("Filtros.")
    filter: PaginationFilterView[];
  }

  @entity(Tokens.Shared_Pagination_Result_Links_View)
  model PaginationResultLinks {
    first: string | null;
    previous: string | null;
    current: string | null;
    next: string | null;
    last: string | null;
  }

  @entity(Tokens.Shared_Pagination_Result_View)
  model PaginationResultView<Target> {
    @doc("Metadados da busca.")
    meta: PaginationResultMeta;

    @doc("Resultados da busca atual.")
    data: Target[];

    @doc("Links da busca.")
    links: PaginationResultLinks;
  }
}
