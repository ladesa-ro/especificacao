import { createDeclarator } from '../../../types';
import { Turma } from '../../ensino';

export const TurmaDisponibilidade = createDeclarator(() => ({
  name: 'TurmaDisponibilidade',

  id: 'uuid',
  dated: true,

  properties: {
    dataInicio: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: false,
      description: 'Data de início.',
    },
    dataFim: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: true,
      description: 'Data de término.',
    },
    //
    turma: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => Turma,
      description: 'Turma.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'dataInicio',
      'dataFim',
      'turma@default',
    ],
    input: ['dataInicio', 'dataFim', 'turma@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [['turma.id', ['$eq']]],
      },
    },
  },
}));
