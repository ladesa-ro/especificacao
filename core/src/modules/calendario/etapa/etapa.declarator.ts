import { createDeclarator } from '../../../types';
import { CalendarioLetivo } from '../calendario-letivo';

export const Etapa = createDeclarator(() => ({
  name: 'Etapa',

  id: 'uuid',
  dated: true,

  properties: {
    numero: {
      type: 'integer',
      required: true,
      nullable: true,
      description: 'Número da etapa.',
    },
    dataInicio: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: false,
      description: 'Data de início.',
    },
    dataTermino: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: false,
      description: 'Data de término.',
    },
    cor: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Cor da etapa.',
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
    default: ['numero', 'dataInicio', 'dataTermino', 'cor', 'calendario@default'],
    input: ['numero', 'dataInicio', 'dataTermino', 'cor', 'calendario@findById'],
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
