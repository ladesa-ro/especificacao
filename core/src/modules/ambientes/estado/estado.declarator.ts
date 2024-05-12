import { createDeclarator } from '../../../types';

export const Estado = createDeclarator(() => ({
  name: 'Estado',

  id: 'numeric',
  dated: false,

  properties: {
    nome: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Nome oficial do Estado.',
    },
    sigla: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Sigla do Estado.',
      constraints: {
        ['x-estado-sigla']: true,
      },
    },
  },

  views: {
    default: ['nome', 'sigla'],
  },

  operations: {
    crud: {
      list: true,
      findById: true,
    },
  },
}));
