import { U } from "@unispec/core";
import { Tokens } from "../tokens";

export const PaginatedSortBy = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedSortBy,

  description: "Configuração de ordenamento por uma propriedade.",

  type: U.Object({
    properties: {
      property: U.String({
        description: "Propriedade ordenada.",
        constraints: {
          pattern: "^[\\D\\.]+$",
        },
      }),
      mode: U.String({
        description: "Modo de ordenação.",
        constraints: {
          pattern: "^(ASC|DESC)$",
        },
      }),
    },
  }),
});

export const PaginatedResultMetaFilter = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,

  description: "Configuração de filtro por restrições de uma propriedade.",

  type: U.Object({
    properties: {
      property: U.String({ description: "Propriedade filtrada." }),

      restrictions: U.Array({
        description: "Restrições de filtragem",
        items: U.String({ description: "Restrição de filtragem" }),
      }),
    },
  }),
});

export const PaginatedResultMeta = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedResultMeta,

  description: "Metadados dos resultados de busca.",

  type: U.Object({
    properties: {
      itemsPerPage: U.Integer({ description: "Quantidade de itens por página." }),
      totalItems: U.Integer({ description: "Total de itens." }),
      currentPage: U.Integer({ description: "Página atual." }),
      totalPages: U.Integer({ description: "Quantidade total de páginas." }),

      search: U.String({ description: "Termo textual da busca." }),

      sortBy: U.Array({
        description: "Ordenação.",
        items: U.Reference({
          targetsTo: Tokens.Shared.Pagination.Views.PaginatedSortBy,
          description: "Ordenamento de uma propriedade.",
        }),
      }),

      filter: U.Array({
        description: "Filtros",
        items: U.Reference({
          targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,
          description: "Ordenamento de uma propriedade.",
        }),
      }),
    },
  }),
});

export const PaginatedResultLinks = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedResultLinks,

  type: U.Object({
    properties: {
      first: U.String({ nullable: true }),
      previous: U.String({ nullable: true }),
      current: U.String({ nullable: false }),
      next: U.String({ nullable: true }),
      last: U.String({ nullable: true }),
    },
  }),
});

export type IPaginatedResultViewOptions = { targetsTo: string } & Pick<U.IView, "description" | "name"> & Partial<U.IView>;

export const PaginatedResultView = (options: IPaginatedResultViewOptions) => {
  const { targetsTo, ...rest } = options;

  return U.View({
    ...rest,

    type: U.Object({
      properties: {
        meta: U.Reference({
          description: "Metadados da busca.",
          targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMeta,
        }),

        data: U.Array({
          description: "Resultados da busca atual.",

          items: U.Reference({ targetsTo, description: "Item da busca." }),
        }),

        links: U.Reference({
          description: "Links da busca.",
          targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultLinks,
        }),
      },
    }),
  });
};

// .matches(/^[\D]+:(ASC|DESC)$/)

export const PaginatedBaseInput = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedBaseInput,
  //
  type: U.Object({
    properties: {
      limit: U.Integer({
        nullable: true,
        required: false,

        description: "Limitar a quantidade de resultados por página.",

        constraints: {
          min: 1,
          integer: true,
          positive: true,
        },
      }),
      page: U.Integer({
        nullable: true,
        required: false,

        description: "Definir a página de consulta.",

        constraints: {
          min: 1,
          integer: true,
          positive: true,
        },
        default: 1,
      }),
      search: U.String({
        nullable: true,
        required: false,
        description: "Busca textual.",
      }),
    },
  }),
});

export const PaginatedInput = U.View({
  name: Tokens.Shared.Pagination.Views.PaginatedInput,

  type: U.ObjectTransformer.From(PaginatedBaseInput.type)
    .Extends({
      properties: {
        sortBy: U.Array({
          description: "Ordenação.",
          items: U.Reference({
            description: "Ordenamento de uma propriedade.",
            targetsTo: Tokens.Shared.Pagination.Views.PaginatedSortBy,
          }),
        }),
        filter: U.Array({
          description: "Filtros",
          items: U.Reference({
            description: "Ordenamento de uma propriedade.",
            targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,
          }),
        }),
      },
    })
    .Node(),
});

//

export const GenericPaginationProvider = U.Provider((ctx) => {
  ctx.Add(PaginatedSortBy);
  ctx.Add(PaginatedResultMetaFilter);
  ctx.Add(PaginatedResultMeta);
  ctx.Add(PaginatedResultLinks);
  ctx.Add(PaginatedBaseInput);
  ctx.Add(PaginatedInput);
});
