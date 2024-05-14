import { createDeclarator } from '../../../types';
import { Usuario } from '../../autenticacao';
import { Ambiente } from '../ambiente';

export const Reserva = createDeclarator(() => ({
  name: 'Reserva',

  id: 'uuid',
  dated: true,

  properties: {
    situacao: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Situação da reserva.',
      constraints: { minLength: 1 },
    },

    motivo: {
      type: 'string',
      nullable: true,
      required: false,
      description: 'Motivo da reserva.',
      constraints: { minLength: 1 },
    },

    tipo: {
      type: 'string',
      nullable: true,
      required: false,
      description: 'Definir tipo da reserva.',
      constraints: { minLength: 1 },
    },

    dataInicio: {
      type: 'string',
      format: 'date-time',
      nullable: false,
      required: true,
      description: 'Data e hora de início da reserva.',
    },

    dataTermino: {
      type: 'string',
      format: 'date-time',
      nullable: true,
      required: false,
      description: 'Data e hora de término da reserva.',
    },

    usuario: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Usuario,
      description: 'Usuário que fez a reserva.',
    },

    ambiente: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Ambiente,
      description: 'Ambiente que foi reservado.',
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'situacao',
      'motivo',
      'tipo',
      'dataInicio',
      'dataTermino',
      'usuario@default',
      'ambiente@default',
    ],
    input: ['situacao', 'motivo', 'tipo', 'dataInicio', 'dataTermino', 'usuario@findById', 'ambiente@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: true,
    },
  },
}));
