import * as Spec from '@/index';

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

      // sortBy: [string, 'DESC' | 'ASC'][];
      // filter?: Record<string, string | string[]>;
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
  links: Spec.IPaginatedResultDtoLinks;
};

export const PaginatedResultDtoDeclarationFactoryBuilder = (type: Spec.IDeclaredEntity<any>) =>
  Spec.DeclareEntity(() => {
    return {
      name: 'EstadoFindAllResult',

      properties: {
        meta: {
          nullable: false,
          description: '',
          type: Spec.PaginatedResultDtoMetaDeclaration,
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
          type: Spec.PaginatedResultDtoLinksDeclaration,
        },
      },
    };
  });
