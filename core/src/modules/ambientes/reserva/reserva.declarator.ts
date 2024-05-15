import { UniTypeEntity, UniTypeReference, UniTypeString } from '../../../common/unispec/types';
import { createDeclarator } from '../../../types';
import { Usuario } from '../../autenticacao';
import { AmbienteDeclarator } from '../ambiente';

export const Reserva = createDeclarator(() => ({
  name: 'Reserva',

  shape: UniTypeEntity({
    id: 'uuid',
    dated: true,

    properties: {
      situacao: UniTypeString({
        constraints: { minLength: 1 },
        description: 'Situação da reserva.',
      }),

      motivo: UniTypeString({
        nullable: true,
        constraints: { minLength: 1 },
        description: 'Motivo da reserva.',
      }),

      tipo: UniTypeString({
        nullable: true,
        constraints: { minLength: 1 },
        description: 'Definir tipo da reserva.',
      }),

      dataInicio: UniTypeString({
        format: 'date-time',
        nullable: false,
        description: 'Data e hora de início da reserva.',
      }),

      dataTermino: UniTypeString({
        format: 'date-time',
        nullable: true,
        description: 'Data e hora de término da reserva.',
      }),

      usuario: UniTypeReference({
        targetsTo: Usuario.name,
        description: 'Usuário que fez a reserva.',
      }),

      ambiente: UniTypeReference({
        targetsTo: AmbienteDeclarator.name,
        description: 'Ambiente que foi reservado.',
      }),
    },
  }),

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
      //
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
