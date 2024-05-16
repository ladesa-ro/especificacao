import { UniProvider, UniTypeArray, UniTypeInteger, UniTypeReference, UniTypeString, UniView } from '../../common/unispec/types';
import { Tokens } from '../tokens';

export const PaginatedSortBy = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedSortBy,

  description: 'Configuração de ordenamento por uma propriedade.',

  properties: {
    property: UniTypeString({
      description: 'Propriedade ordenada.',
      constraints: {
        pattern: '^[\\D\\.]+$',
      },
    }),
    mode: UniTypeString({
      description: 'Modo de ordenação.',
      constraints: {
        pattern: '^(ASC|DESC)$',
      },
    }),
  },
});

export const PaginatedResultMetaFilter = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,

  description: 'Configuração de filtro por restrições de uma propriedade.',

  properties: {
    property: UniTypeString({
      description: 'Propriedade filtrada.',
    }),
    restrictions: UniTypeArray({
      description: 'Restrições de filtragem',

      of: UniTypeString({
        description: 'Restrição de filtragem',
      }),
    }),
  },
});

export const PaginatedResultMeta = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedResultMeta,

  description: 'Metadados dos resultados de busca.',

  properties: {
    itemsPerPage: UniTypeInteger({
      description: 'Quantidade de itens por página.',
    }),
    totalItems: UniTypeInteger({
      description: 'Total de itens.',
    }),
    currentPage: UniTypeInteger({
      description: 'Página atual.',
    }),
    totalPages: UniTypeInteger({
      description: 'Quantidade total de páginas.',
    }),
    search: UniTypeString({
      description: 'Termo textual da busca.',
    }),
    sortBy: UniTypeArray({
      description: 'Ordenação.',
      of: UniTypeReference({
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedSortBy,
        description: 'Ordenamento de uma propriedade.',
      }),
    }),
    filter: UniTypeArray({
      description: 'Filtros',
      of: UniTypeReference({
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,
        description: 'Ordenamento de uma propriedade.',
      }),
    }),
  },
});

export const PaginatedResultLinks = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedResultLinks,

  properties: {
    first: UniTypeString({}),
    previous: UniTypeString({}),
    current: UniTypeString({}),
    next: UniTypeString({}),
    last: UniTypeString({}),
  },
});

export type IPaginatedResultViewOptions = { targetsTo: string } & Pick<UniView, 'description' | 'name'> & Partial<UniView>;

export const PaginatedResultView = (options: IPaginatedResultViewOptions) => {
  const { targetsTo, ...rest } = options;

  return UniView({
    ...rest,

    properties: {
      meta: UniTypeReference({
        description: 'Metadados da busca.',
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMeta,
      }),

      data: UniTypeArray({
        description: 'Resultados da busca atual.',
        of: UniTypeReference({
          targetsTo,
          description: 'Item da busca.',
        }),
      }),

      links: UniTypeReference({
        description: 'Links da busca.',
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultLinks,
      }),
    },
  });
};

// .matches(/^[\D]+:(ASC|DESC)$/)

export const PaginatedBaseInput = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedBaseInput,
  //
  properties: {
    limit: UniTypeInteger({
      nullable: true,
      required: false,

      description: 'Limitar a quantidade de resultados por página.',

      constraints: {
        min: 1,
        integer: true,
        positive: true,
      },
    }),
    page: UniTypeInteger({
      nullable: true,
      required: false,

      description: 'Definir a página de consulta.',

      constraints: {
        min: 1,
        integer: true,
        positive: true,
      },
      default: 1,
    }),
    search: UniTypeString({
      nullable: true,
      required: false,
      description: 'Busca textual.',
    }),
  },
});

export const PaginatedInput = UniView({
  name: Tokens.Shared.Pagination.Views.PaginatedInput,
  properties: {
    ...PaginatedBaseInput.properties,
    sortBy: UniTypeArray({
      description: 'Ordenação.',
      of: UniTypeReference({
        description: 'Ordenamento de uma propriedade.',
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedSortBy,
      }),
    }),
    filter: UniTypeArray({
      description: 'Filtros',
      of: UniTypeReference({
        description: 'Ordenamento de uma propriedade.',
        targetsTo: Tokens.Shared.Pagination.Views.PaginatedResultMetaFilter,
      }),
    }),
  },
});

//

export const GenericPaginationProvider = UniProvider((ctx) => {
  ctx.Add(PaginatedSortBy);
  ctx.Add(PaginatedResultMetaFilter);
  ctx.Add(PaginatedResultMeta);
  ctx.Add(PaginatedResultLinks);
  ctx.Add(PaginatedBaseInput);
  ctx.Add(PaginatedInput);
});
