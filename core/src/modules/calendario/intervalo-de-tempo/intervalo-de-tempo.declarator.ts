import { createDeclarator } from '../../../types';

export const IntervaloDeTempo = createDeclarator(() => ({
  name: 'IntervaloDeTempo',

  id: 'uuid',

  properties: {
    periodoInicio: {
      required: true,
      nullable: false,
      type: 'string',
      format: 'time',
      description: 'Horário que o intervalo de tempo inicia.',
    },
    periodoFim: {
      required: true,
      nullable: false,
      type: 'string',
      format: 'time',
      description: 'Horário que o intervalo de tempo termina.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'periodoInicio',
      'periodoFim',
    ],
    input: ['periodoInicio', 'periodoFim'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: false,
      create: false,
      updateById: false,
      list: false,
    },
  },
}));
