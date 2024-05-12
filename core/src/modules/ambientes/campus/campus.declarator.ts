import { createDeclarator } from '../../../types';
import { Endereco } from '../endereco';

export const Campus = createDeclarator(() => ({
  name: 'Campus',

  id: 'uuid',
  dated: true,

  properties: {
    nomeFantasia: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Nome fantasia do Campus.',
      constraints: [['string', { minLength: 1 }]],
    },
    //

    razaoSocial: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Razão social do Campus.',
      constraints: [['string', { minLength: 1 }]],
    },

    apelido: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Apelido do Campus.',
      constraints: [['string', { minLength: 1 }]],
    },

    cnpj: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'CNPJ do Campus.',
      constraints: [['string', { minLength: 1 }]],
    },

    endereco: {
      type: 'reference',
      required: true,
      nullable: false,
      references: 'declarator',
      declarator: () => Endereco,
      description: 'Endereço do Campus.',
    },
  },

  views: {
    default: ['nomeFantasia', 'razaoSocial', 'apelido', 'cnpj', 'endereco'],
    input: ['nomeFantasia', 'razaoSocial', 'apelido', 'cnpj', ['endereco', { subView: 'input' }]],
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
