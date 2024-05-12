import { createDeclarator } from '../../../types';
import { CalendarioLetivo } from '../calendario-letivo';

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
      declarator: () => CalendarioLetivo,
      description: 'Calendario.',
    },
  },

  views: {
    default: ['data', 'diaLetivo', 'feriado', 'calendario@default'],
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
