import { createDeclarator } from '../../../types';
import { IntervaloDeTempo } from '../../calendario';
import { TurmaDisponibilidade } from '../turma-disponibilidade';

export const TurmaDisponibilidadeDia = createDeclarator(() => ({
  name: 'TurmaDisponibilidadeDia',

  id: 'uuid',

  properties: {
    diaSemanaIso: {
      type: 'integer',
      required: true,
      nullable: false,
      description: 'Dia da semana.',
    },
    //
    intervaloDeTempo: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => IntervaloDeTempo,
      description: 'Intervalo de tempo.',
    },
    turmaDisponibilidade: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => TurmaDisponibilidade,
      description: 'Disponibilidade da turma.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'diaSemanaIso',
      'intervaloDeTempo@default',
      'turmaDisponibilidade@default',
    ],
    input: ['diaSemanaIso', 'intervaloDeTempo@findById', 'turmaDisponibilidade@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['intervaloDeTempo.id', ['$eq']],
          ['turmaDisponibilidade.id', ['$eq']],
        ],
      },
    },
  },
}));
