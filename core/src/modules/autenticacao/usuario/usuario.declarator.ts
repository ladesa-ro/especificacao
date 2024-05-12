import { ImagemCapa, ImagemPerfil } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Vinculo } from '../vinculo';

export const Usuario = createDeclarator(() => ({
  name: 'Usuario',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      description: 'Nome do usuário.',
      nullable: false,
      required: true,
      constraints: [['string', { minLength: 1 }]],
    },

    matriculaSiape: {
      type: 'string',
      description: 'Matrícula Siape do usuário.',
      nullable: false,
      required: true,
      constraints: [['string', { minLength: 1 }]],
    },

    email: {
      type: 'string',
      description: 'E-mail do usuário.',
      nullable: false,
      required: true,
      constraints: [['string', { email: true, minLength: 1 }]],
    },

    imagemCapa: ImagemCapa(),

    imagemPerfil: ImagemPerfil(),

    isSuperUser: {
      type: 'boolean',
      description: 'Indentifica que o usuário é um super usuário.',
      nullable: false,
      required: true,
    },

    vinculosAtivos: {
      type: 'array',

      nullable: false,
      required: true,
      description: 'Vínculos ativos do usuário.',

      of: {
        type: 'reference',
        description: 'Vínculos ativos do usuário.',
        nullable: false,
        required: true,
        references: 'declarator',
        declarator: () => Vinculo,
      },
    },
  },

  views: {
    default: ['nome', 'matriculaSiape', 'email', 'isSuperUser', 'imagemCapa@default', 'imagemPerfil@default', 'vinculosAtivos@default'],
    input: ['nome', 'matriculaSiape', 'email'],
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
