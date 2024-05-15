import { UniTypeEntity, UniTypeReference, UniTypeString } from '../../../common/unispec/types';
import { createDeclarator } from '../../../types';
import { Estado } from '../estado';

export const Cidade = createDeclarator(() => ({
  name: 'Cidade',

  shape: UniTypeEntity({
    id: 'numeric',
    dated: false,

    properties: {
      nome: UniTypeString({ description: 'Nome oficial da Cidade.' }),

      estado: UniTypeReference({
        targetsTo: Estado.name,
        description: 'Estado da Cidade.',
      }),
    },
  }),

  views: {
    default: ['nome', 'estado@default'],
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
