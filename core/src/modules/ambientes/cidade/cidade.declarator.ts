import { createDeclarator } from '../../../types';
import { Estado } from '../estado';

export const Cidade = createDeclarator(() => ({
  name: 'Cidade',

  id: 'numeric',
  dated: false,

  properties: {
    nome: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Nome oficial da Cidade.',
    },
    estado: {
      type: 'reference',
      references: 'declarator',
      nullable: false,
      required: true,
      description: 'Estado da Cidade.',
      declarator: () => Estado,
    },
  },

  views: {
    default: ['nome', 'estado'],
  },

  operations: {
    crud: {
      list: {
        filters: [
          //
          ['estado.id', ['$eq']],
        ],
      },
      findById: true,
    },
  },
}));
