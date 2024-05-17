import { createDeclarator } from '../../../types';
import { Vinculo } from '../../autenticacao';
import { DiarioEntity } from '../diario/diario.unispec';

export const DiarioProfessor = createDeclarator(() => ({
  name: 'DiarioProfessor',

  properties: {
    situacao: {
      type: 'boolean',
      nullable: false,
      required: true,
      description: 'Situação do vínculo.',
    },

    vinculo: {
      type: 'reference',
      nullable: false,
      required: true,
      description: 'Vínculo do usuário ao campus.',
      references: 'declarator',
      declarator: () => Vinculo,
    },

    diario: {
      type: 'reference',
      nullable: false,
      required: true,
      description: 'Diário vinculado.',
      references: 'declarator',
      declarator: () => DiarioEntity,
    },
  },

  views: {
    default: ['situacao', 'diario@default', 'vinculo@default'],
    input: ['situacao', 'diario@findById', 'vinculo@findById'],
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
