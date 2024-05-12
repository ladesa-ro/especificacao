import { createDeclarator } from '../../../types';

export const Modalidade = createDeclarator(() => ({
  name: 'Modalidade',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      description: 'Nome da modalidade.',
      nullable: false,
      required: true,
      constraints: [['string', { minLength: 1 }]],
    },

    slug: {
      type: 'string',
      description: 'Slug da modalidade.',
      nullable: false,
      required: true,
      constraints: [['string', { minLength: 1 }]],
    },
  },

  views: {
    default: ['nome', 'slug'],
    input: ['nome', 'slug'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: true,
    },
  },
}));
