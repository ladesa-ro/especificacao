import * as Spec from '@/helpers';

export type IPaginatedResultDtoMetaSortBy = Spec.InferFactoryEntityType<typeof PaginatedResultDtoMetaSortByDeclaration>;

export const PaginatedResultDtoMetaSortByDeclaration = Spec.DeclareEntity(() => {
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
  };
});

export type IPaginatedResultDtoMetaFilter = Spec.InferFactoryEntityType<typeof PaginatedResultDtoMetaFilterDeclaration>;

export const PaginatedResultDtoMetaFilterDeclaration = Spec.DeclareEntity(() => {
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
  };
});

export type IPaginatedResultDtoMeta = Spec.InferFactoryEntityType<typeof PaginatedResultDtoMetaDeclaration>;

export const PaginatedResultDtoMetaDeclaration = Spec.DeclareEntity(() => {
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
  };
});

export type IPaginatedResultDtoLinks = Spec.InferFactoryEntityType<typeof PaginatedResultDtoLinksDeclaration>;

export const PaginatedResultDtoLinksDeclaration = Spec.DeclareEntity(() => {
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
  };
});

export type IPaginatedResultDto<T> = {
  data: T[];
  meta: IPaginatedResultDtoMeta;
  links: IPaginatedResultDtoLinks;
};

export const PaginatedResultDtoDeclarationFactoryBuilder = (type: Spec.IDeclaredEntity<any>, name: string) =>
  Spec.DeclareEntity(() => {
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
    };
  });
