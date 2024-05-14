import { createDeclarator } from '../../../types';
import { Campus } from '../../ambientes';
import { Modalidade } from '../../ensino';

export const CalendarioLetivo = createDeclarator(() => ({
  name: 'CalendarioLetivo',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Nome do calendário letivo.',
    },

    ano: {
      type: 'string',
      required: true,
      nullable: false,
      description: 'Ano do calendário letivo.',
    },

    campus: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Campus,
      description: 'Campus.',
    },

    modalidade: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => Modalidade,
      description: 'Modalidade.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'nome',
      'ano',
      'campus@default',
      'modalidade@default',
    ],
    input: ['nome', 'ano', 'campus@findById', 'modalidade@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['campus.id', ['$eq']],
          ['modalidade.id', ['$eq']],
        ],
      },
    },
  },
}));
