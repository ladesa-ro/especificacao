import { IDeclarator, createDeclarator } from '../../types';

export const PaginatedSortBy = createDeclarator(() => ({
  name: 'PaginatedSortBy',

  properties: {
    property: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Propriedade ordenada.',
      // validator: ({ custom }) =>
      //   custom
      //     .string()
      //     .required()
      //     .nonNullable()
      //     .matches(/^[\D\.]+$/),
    },
    mode: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Modo de ordenação.',
      // validator: ({ custom }) =>
      //   custom
      //     .string()
      //     .matches(/^(ASC|DESC)$/)
      //     .required()
      //     .nonNullable(),
    },
  },

  views: {
    default: ['property', 'mode'],
  },
}));

export const PaginatedResultMetaFilter = createDeclarator(() => ({
  name: 'PaginatedResultMetaFilter',

  properties: {
    property: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Propriedade filtrada.',
    },
    restrictions: {
      type: 'array',
      nullable: false,
      required: true,
      description: 'Restrições de filtragem',
      of: {
        type: 'string',
        nullable: false,
        required: true,
        description: 'Restrição de filtragem',
      },
    },
  },

  views: {
    default: ['property', 'restrictions'],
  },
}));

export const PaginatedResultDtoMeta = createDeclarator(() => ({
  name: 'PaginatedResultDtoMeta',

  properties: {
    itemsPerPage: {
      type: 'integer',
      nullable: false,
      required: true,
      description: 'Quantidade de itens por página.',
    },
    totalItems: {
      type: 'integer',
      nullable: false,
      required: true,
      description: 'Total de itens.',
    },
    currentPage: {
      type: 'integer',
      description: 'Página atual.',
      nullable: false,
      required: true,
    },
    totalPages: {
      type: 'integer',
      description: 'Quantidade total de páginas.',
      nullable: false,
      required: true,
    },
    search: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Termo textual da busca.',
    },
    sortBy: {
      type: 'array',
      nullable: false,
      required: true,
      description: 'Ordenação.',
      of: {
        type: 'reference',
        nullable: false,
        required: true,
        references: 'declarator',
        declarator: () => PaginatedSortBy,
        description: 'Ordenamento de uma propriedade.',
      },
    },
    filter: {
      type: 'array',
      nullable: false,
      required: true,
      description: 'Filtros',
      of: {
        type: 'reference',
        nullable: false,
        required: true,
        references: 'declarator',
        declarator: () => PaginatedResultMetaFilter,
        description: 'Ordenamento de uma propriedade.',
      },
    },
  },

  views: {
    default: ['itemsPerPage', 'totalItems', 'currentPage', 'totalPages', 'search', 'sortBy', 'filter'],
  },
}));

export const PaginatedResultDtoLinks = createDeclarator(() => ({
  name: 'PaginatedResultDtoLinks',

  properties: {
    first: {
      type: 'string',
      description: '',
      nullable: true,
      required: true,
    },
    previous: {
      type: 'string',
      description: '',
      nullable: true,
      required: true,
    },
    current: {
      type: 'string',
      description: '',
      nullable: true,
      required: true,
    },
    next: {
      type: 'string',
      description: '',
      nullable: true,
      required: true,
    },
    last: {
      type: 'string',
      description: '',
      nullable: true,
      required: true,
    },
  },
  views: {
    default: ['first', 'previous', 'current', 'next', 'last'],
  },
}));

export const PaginatedResultDtoDeclarationFactoryBuilder = (declarator: IDeclarator<any>, name: string) =>
  createDeclarator(() => ({
    name: name,

    properties: {
      meta: {
        type: 'reference',
        required: true,
        nullable: false,
        description: 'Metadados da busca.',
        references: 'declarator',
        declarator: () => PaginatedResultDtoMeta,
      },

      data: {
        type: 'array',
        required: true,
        nullable: false,
        description: 'Resultados da busca atual.',
        of: {
          type: 'reference',
          required: true,
          nullable: false,
          references: 'declarator',
          declarator: () => PaginatedResultDtoMeta,
          description: 'Item da busca.',
        },
      },

      links: {
        type: 'reference',
        required: true,
        nullable: false,
        description: 'Links da busca.',
        references: 'declarator',
        declarator: () => PaginatedResultDtoLinks,
      },
    },

    views: {
      default: ['meta', 'data', 'links'],
    },
  }));

//

// .matches(/^[\D]+:(ASC|DESC)$/)

export const PaginatedBaseInput = createDeclarator(() => ({
  name: 'PaginatedBaseInput',
  properties: {
    limit: {
      type: 'integer',
      nullable: true,
      required: false,
      description: 'Limitar a quantidade de resultados por página.',
      // validator: ({ custom }) => custom.number().integer().positive().nullable().optional(),
    },
    page: {
      nullable: true,
      required: false,
      type: 'integer',
      description: 'Definir a página de consulta.',
      // validator: ({ custom }) => custom.number().integer().positive().nullable().optional().default(1),
    },
    search: {
      nullable: true,
      required: false,
      type: 'string',
      description: 'Busca textual.',
      // validator: ({ custom }) => custom.string().nullable().optional(),
    },
  },
  views: {
    default: ['limit', 'page', 'search'],
  },
}));

export const PaginatedInput = createDeclarator(() => ({
  name: 'PaginatedInput',
  properties: {
    ...PaginatedBaseInput().properties,
    sortBy: {
      type: 'array',
      nullable: false,
      required: true,
      description: 'Ordenação.',
      of: {
        type: 'reference',
        nullable: false,
        required: true,
        references: 'declarator',
        declarator: () => PaginatedSortBy,
        description: 'Ordenamento de uma propriedade.',
      },
    },
    filter: {
      type: 'array',
      nullable: false,
      required: true,
      description: 'Filtros',
      of: {
        type: 'reference',
        nullable: false,
        required: true,
        references: 'declarator',
        declarator: () => PaginatedResultMetaFilter,
        description: 'Ordenamento de uma propriedade.',
      },
    },
  },
  views: {
    default: ['limit', 'page', 'search', 'sortBy', 'filter'],
  },
}));
