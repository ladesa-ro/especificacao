import { createDeclarator } from '../../types';

export const Search = createDeclarator(() => ({
  name: 'Search',
  properties: {
    page: {
      type: 'integer',
      required: false,
      nullable: false,
      description: 'Página.',
    },
    limit: {
      type: 'integer',
      required: false,
      nullable: false,
      description: 'Limite de resultados por página.',
    },
    search: {
      type: 'string',
      required: false,
      nullable: false,
      description: 'Busca textual.',
    },
    sortBy: {
      type: 'array',
      required: false,
      nullable: false,
      of: {
        type: 'string',
        required: true,
        nullable: false,
        description: 'Campo de ordenação.',
      },
      description: 'Ordenação.',
    },
    filters: {
      type: 'array',
      required: false,
      nullable: false,
      of: {
        type: 'array',
        required: true,
        nullable: false,
        of: {
          type: 'string',
          required: true,
          nullable: false,
          description: 'Campo de filtro.',
        },
        description: 'Filtro.',
      },
      description: 'Filtros.',
    },
  },
  views: {
    default: ['page', 'limit', 'search', 'sortBy', 'filters'],
  },
}));
