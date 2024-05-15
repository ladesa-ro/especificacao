import { UniTypeEntity, UniTypeInteger, UniTypeReference, UniTypeString } from '../../../common/unispec/types';
import { createDeclarator } from '../../../types';
import { Cidade } from '../cidade';

export const Endereco = createDeclarator(() => ({
  name: 'Endereco',

  shape: UniTypeEntity({
    id: 'uuid',
    dated: true,

    properties: {
      cep: UniTypeString({ description: 'CEP', constraints: { ['x-cep']: true } }),

      logradouro: UniTypeString({ description: 'Logradouro' }),

      numero: UniTypeInteger({
        description: 'Número',
        constraints: { min: 0, integer: true, positive: true },
      }),

      bairro: UniTypeString({ description: 'Bairro' }),

      complemento: UniTypeString({
        default: null,
        required: true,
        nullable: true,
        description: 'Complemento',
      }),

      pontoReferencia: UniTypeString({
        default: null,
        required: true,
        nullable: true,
        description: 'Ponto de referência',
      }),

      cidade: UniTypeReference({ targetsTo: Cidade.name, description: 'Cidade' }),
    },
  }),

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'cep',
      'logradouro',
      'numero',
      'bairro',
      'complemento',
      'pontoReferencia',
      'cidade@default',
    ],
    input: ['cep', 'logradouro', 'numero', 'bairro', 'complemento', 'pontoReferencia', 'cidade@findById'],
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
