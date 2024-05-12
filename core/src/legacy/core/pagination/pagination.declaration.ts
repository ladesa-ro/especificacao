import * as Spec from '@/helpers';

export type IPaginatedSortBy = {
  mode: string;
  property: string;
};

export type IPaginatedFilter = {
  property: string;
  restrictions: string[];
};

export type IPaginatedResultDtoMeta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  search: string;
  //
  sortBy: IPaginatedSortBy[];
  filter: IPaginatedFilter[];
};

export type IPaginatedResultDtoLinks = {
  first: string | null;
  previous: string | null;
  current: string | null;
  next: string | null;
  last: string | null;
};

export type IPaginatedResultDto<T> = {
  data: T[];
  meta: IPaginatedResultDtoMeta;
  links: IPaginatedResultDtoLinks;
};

export type IPaginatedInputDtoBase = {
  page?: number;
  limit?: number;
  search?: string;
};

export type IPaginatedInputDto = IPaginatedInputDtoBase & {
  sortBy?: IPaginatedSortBy[];
  filter?: IPaginatedFilter[];
};

// .matches(/^[\D]+:(ASC|DESC)$/)

export const PaginatedResultDtoMetaSortBy = () => {
  return {
    name: 'PaginatedResultDtoMetaSortBy',

    properties: {
      property: {
        nullable: false,
        description: '',
        type: 'string',
        validator: ({ custom }) =>
          custom
            .string()
            .required()
            .nonNullable()
            .matches(/^[\D\.]+$/),
      },
      mode: {
        type: 'string',
        description: '',
        nullable: false,
        validator: ({ custom }) =>
          custom
            .string()
            .matches(/^(ASC|DESC)$/)
            .required()
            .nonNullable(),
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedResultDtoMetaFilter = () => {
  return {
    name: 'PaginatedResultDtoMetaFilter',

    properties: {
      property: {
        nullable: false,
        description: '',
        type: 'string',
      },
      restrictions: {
        arrayOf: true,
        nullable: false,
        description: '',
        type: 'string',
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedResultDtoMeta = () => {
  return {
    name: 'PaginatedResultDtoMeta',

    properties: {
      itemsPerPage: {
        type: 'integer',
        description: '',
        nullable: false,
      },
      totalItems: {
        type: 'integer',
        description: '',
        nullable: false,
      },
      currentPage: {
        type: 'integer',
        description: '',
        nullable: false,
      },
      totalPages: {
        type: 'integer',
        description: '',
        nullable: false,
      },

      search: {
        type: 'string',
        description: '',
        nullable: false,
      },

      sortBy: {
        arrayOf: true,
        description: '',
        type: PaginatedResultDtoMetaSortBy,
        nullable: false,
      },

      filter: {
        arrayOf: true,
        description: '',
        type: PaginatedResultDtoMetaFilter,
        nullable: false,
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedResultDtoLinks = () => {
  return {
    name: 'PaginatedResultDtoLinks',

    properties: {
      first: {
        type: 'string',
        description: '',
        nullable: true,
      },
      previous: {
        type: 'string',
        description: '',
        nullable: true,
      },
      current: {
        type: 'string',
        description: '',
        nullable: true,
      },
      next: {
        type: 'string',
        description: '',
        nullable: true,
      },
      last: {
        type: 'string',
        description: '',
        nullable: true,
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedResultDtoDeclarationFactoryBuilder = (type: Spec.IDeclarator<any>, name: string) => () => {
  return {
    name: name,

    properties: {
      meta: {
        nullable: false,
        description: '',
        type: PaginatedResultDtoMeta,
      },

      data: {
        type: type,
        arrayOf: true,
        nullable: false,
        description: 'Resultados da busca atual.',
      },

      links: {
        description: '',
        nullable: false,
        type: PaginatedResultDtoLinks,
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedBaseInput = () => {
  return {
    name: 'PaginatedBaseInput',
    properties: {
      limit: {
        nullable: true,
        required: false,
        type: 'integer',
        description: 'Limitar a quantidade de resultados por página.',
        validator: ({ custom }) => custom.number().integer().positive().nullable().optional(),
      },
      page: {
        nullable: true,
        required: false,
        type: 'integer',
        description: 'Definir a página de consulta.',
        validator: ({ custom }) => custom.number().integer().positive().nullable().optional().default(1),
      },
      search: {
        nullable: true,
        required: false,
        type: 'string',
        description: 'Busca textual.',
        validator: ({ custom }) => custom.string().nullable().optional(),
      },
    },
  } satisfies Spec.IDeclaration;
};

export const PaginatedInput = () => {
  return {
    name: 'PaginatedInput',
    properties: {
      ...PaginatedBaseInput().properties,
      sortBy: {
        arrayOf: true,
        nullable: true,
        required: false,
        description: 'Ordenação.',
        type: PaginatedResultDtoMetaSortBy,
      },
      filter: {
        arrayOf: true,
        nullable: true,
        required: false,
        description: 'Filtros',
        type: PaginatedResultDtoMetaFilter,
      },
    },
  } satisfies Spec.IDeclaration;
};
