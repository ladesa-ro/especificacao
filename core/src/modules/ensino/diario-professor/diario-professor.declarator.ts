import { createDeclarator } from '../../../types';
import { Vinculo } from '../../autenticacao';
import { Diario } from '../diario/diario.declarator';

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
      declarator: () => Diario,
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
