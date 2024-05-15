import { UniTypeEntity, UniTypeString } from '../../../common/unispec/types';
import { createDeclarator } from '../../../types';

export const Estado = createDeclarator(() => ({
  name: 'Estado',

  shape: UniTypeEntity({
    id: 'numeric',
    dated: false,

    properties: {
      nome: UniTypeString({ description: 'Nome oficial do Estado.' }),

      sigla: UniTypeString({
        description: 'Sigla do Estado.',
        constraints: { ['x-estado-sigla']: true },
      }),
    },
  }),

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
