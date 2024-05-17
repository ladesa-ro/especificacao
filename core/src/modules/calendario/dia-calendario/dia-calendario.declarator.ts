import { createDeclarator } from '../../../types';
import { CalendarioLetivoEntity } from '../calendario-letivo';

export const DiaCalendario = createDeclarator(() => ({
  name: 'DiaCalendario',

  id: 'uuid',
  dated: true,

  properties: {
    data: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: false,
      description: 'Data.',
    },
    diaLetivo: {
      type: 'boolean',
      required: true,
      nullable: false,
      description: 'Define que o dia é letivo.',
    },
    feriado: {
      type: 'boolean',
      required: true,
      nullable: false,
      description: 'Define que o dia é feriado.',
    },
    //
    calendario: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => CalendarioLetivoEntity,
      description: 'Calendario.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'data',
      'diaLetivo',
      'feriado',
      'calendario@default',
    ],
    input: ['data', 'diaLetivo', 'feriado', 'calendario@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [['calendario.id', ['$eq']]],
      },
    },
  },
}));
