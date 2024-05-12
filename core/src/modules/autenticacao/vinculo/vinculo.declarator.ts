import { createDeclarator } from '../../../types';
import { Campus } from '../../ambientes';
import { Usuario } from '../usuario';

export const Vinculo = createDeclarator(() => ({
  name: 'Vinculo',

  id: 'uuid',
  dated: true,

  properties: {
    ativo: {
      type: 'boolean',
      description: 'Indica se o vínculo está ativo.',
      nullable: false,
      required: true,
    },

    cargo: {
      type: 'string',
      description: 'Cargo do usuário no vínculo.',
      nullable: false,
      required: true,
    },

    campus: {
      type: 'reference',
      description: 'Campus associado ao vínculo.',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Campus,
    },

    usuario: {
      type: 'reference',
      description: 'Usuário associado ao vínculo.',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Usuario,
    },
  },

  views: {
    default: ['ativo', 'cargo', 'campus@default', 'usuario@default'],
    input: ['ativo', 'cargo', 'campus', 'usuario'],
  },

  operations: {
    crud: {
      list: true,
      findById: true,
      deleteById: false,
      create: false,
      updateById: false,
    },
    extra: {
      update: {
        body: {
          campus: {
            type: 'reference',
            description: 'Campus associado ao vínculo.',
            nullable: false,
            required: true,
            references: 'declarator',
            declarator: () => Campus,
          },
          usuario: {
            type: 'reference',
            description: 'Usuário associado ao vínculo.',
            nullable: false,
            required: true,
            references: 'declarator',
            declarator: () => Usuario,
          },
          cargos: {
            type: 'array',
            description: 'Cargos do usuário no vínculo.',
            nullable: false,
            required: true,
            of: {
              type: 'string',
              description: 'Cargo do usuário no vínculo.',
              nullable: false,
              required: true,
            },
          },
        },
      },
    },
  },
}));
