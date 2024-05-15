import { UniTypeEntity, UniTypeReference, UniTypeString } from '../../../common/unispec/types';
import { createDeclarator } from '../../../types';
import { Endereco } from '../endereco';

export const Campus = createDeclarator(() => ({
  name: 'Campus',

  shape: UniTypeEntity({
    id: 'uuid',
    dated: true,

    properties: {
      nomeFantasia: UniTypeString({
        constraints: { minLength: 1 },
        description: 'Nome fantasia do Campus.',
      }),
      //

      razaoSocial: UniTypeString({
        constraints: { minLength: 1 },
        description: 'Razão social do Campus.',
      }),

      apelido: UniTypeString({
        constraints: { minLength: 1 },
        description: 'Apelido do Campus.',
      }),

      cnpj: UniTypeString({
        constraints: { minLength: 1 },
        description: 'CNPJ do Campus.',
      }),

      endereco: UniTypeReference({
        targetsTo: Endereco.name,
        description: 'Endereço do Campus',
      }),
    },
  }),

  views: {
    default: [
      'id',
      //
      'nomeFantasia',
      'razaoSocial',
      'apelido',
      'cnpj',
      //
      'endereco@default',
      //
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
    ],
    input: ['nomeFantasia', 'razaoSocial', 'apelido', 'cnpj', 'endereco@input'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,

      create: true,
      updateById: true,

      list: {
        filters: [
          ['endereco.cidade.id', ['$eq']],
          ['endereco.cidade.estado.id', ['$eq']],
        ],
      },
    },
  },
}));
