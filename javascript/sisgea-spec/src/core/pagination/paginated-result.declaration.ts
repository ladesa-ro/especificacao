import * as Spec from '@/helpers';

export type IPaginatedResultDtoMetaSortBy = {
  property: string;
  mode: string;
};

export const PaginatedResultDtoMetaSortByDeclaration = () => {
  return {
    name: 'PaginatedResultDtoMetaSortBy',

    properties: {
      property: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: false,
      },
      mode: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: false,
      },
    },
  } satisfies Spec.IDeclaration;
};

export type IPaginatedResultDtoMetaFilter = {
  property: string;
  restrictions: string[];
};

export const PaginatedResultDtoMetaFilterDeclaration = () => {
  return {
    name: 'PaginatedResultDtoMetaFilter',

    properties: {
      property: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: false,
      },
      restrictions: {
        arrayOf: true,
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: false,
      },
    },
  } satisfies Spec.IDeclaration;
};

export type IPaginatedResultDtoMeta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  search: string;
  sortBy: IPaginatedResultDtoMetaSortBy[];
  filter: IPaginatedResultDtoMetaFilter[];
};

export const PaginatedResultDtoMetaDeclaration = () => {
  return {
    name: 'PaginatedResultDtoMeta',

    properties: {
      itemsPerPage: {
        type: Spec.PropertyTypes.INTEGER,
        description: '',
        nullable: false,
      },
      totalItems: {
        type: Spec.PropertyTypes.INTEGER,
        description: '',
        nullable: false,
      },
      currentPage: {
        type: Spec.PropertyTypes.INTEGER,
        description: '',
        nullable: false,
      },
      totalPages: {
        type: Spec.PropertyTypes.INTEGER,
        description: '',
        nullable: false,
      },

      search: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: false,
      },

      sortBy: {
        arrayOf: true,
        description: '',
        type: PaginatedResultDtoMetaSortByDeclaration,
        nullable: false,
      },

      filter: {
        arrayOf: true,
        description: '',
        type: PaginatedResultDtoMetaFilterDeclaration,
        nullable: false,
      },
    },
  } satisfies Spec.IDeclaration;
};

export type IPaginatedResultDtoLinks = {
  first: string | null;
  previous: string | null;
  current: string | null;
  next: string | null;
  last: string | null;
};

export const PaginatedResultDtoLinksDeclaration = () => {
  return {
    name: 'PaginatedResultDtoLinks',

    properties: {
      first: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: true,
      },
      previous: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: true,
      },
      current: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: true,
      },
      next: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: true,
      },
      last: {
        type: Spec.PropertyTypes.STRING,
        description: '',
        nullable: true,
      },
    },
  } satisfies Spec.IDeclaration;
};

export type IPaginatedResultDto<T> = {
  data: T[];
  meta: IPaginatedResultDtoMeta;
  links: IPaginatedResultDtoLinks;
};

export const PaginatedResultDtoDeclarationFactoryBuilder = (type: Spec.IDeclarator<any>, name: string) => () => {
  return {
    name: name,

    properties: {
      meta: {
        nullable: false,
        description: '',
        type: PaginatedResultDtoMetaDeclaration,
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
        type: PaginatedResultDtoLinksDeclaration,
      },
    },
  } satisfies Spec.IDeclaration;
};
