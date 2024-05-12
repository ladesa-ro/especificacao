import { createDeclarator } from '../../../types';
import { Cidade } from '../cidade';

export const Endereco = createDeclarator(() => ({
  name: 'Endereco',

  id: 'uuid',
  dated: true,

  properties: {
    cep: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'CEP',
      constraints: { ['x-cep']: true },
    },
    logradouro: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Logradouro',
    },
    numero: {
      type: 'integer',
      required: true,
      nullable: false,
      description: 'Número',
      constraints: { min: 0, integer: true, positive: true },
    },
    bairro: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Bairro',
    },
    complemento: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Complemento',
      default: null,
    },
    pontoReferencia: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Ponto de referência',
      default: null,
    },
    cidade: {
      type: 'reference',
      references: 'declarator',
      required: true,
      nullable: false,
      description: 'Cidade',
      declarator: () => Cidade,
    },
  },

  views: {
    default: ['cep', 'logradouro', 'numero', 'bairro', 'complemento', 'pontoReferencia', 'cidade@default'],
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
