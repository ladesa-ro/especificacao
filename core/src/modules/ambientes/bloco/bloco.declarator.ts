import { createDeclarator } from '../../../types';
import { Imagem } from '../../base';
import { Ambiente } from '../ambiente';
import { Campus } from '../campus';

export const Bloco = createDeclarator(() => ({
  name: 'Bloco',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Nome do Bloco.',
      constraints: [['string', { minLength: 1 }]],
    },
    codigo: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Código do Bloco.',
      constraints: [['string', { minLength: 1 }]],
    },
    campus: {
      type: 'reference',
      required: true,
      nullable: false,
      references: 'declarator',
      declarator: () => Campus,
      description: 'Campus.',
    },
    imagemCapa: {
      type: 'reference',
      required: true,
      nullable: false,
      references: 'declarator',
      declarator: () => Imagem,
      description: 'Imagem.',
    },
    //
    ambientes: {
      type: 'array',
      required: true,
      nullable: false,
      description: 'Ambientes.',
      of: {
        type: 'reference',
        references: 'declarator',
        required: true,
        nullable: false,
        declarator: () => Ambiente,
        description: 'Ambiente.',
      },
    },
  },

  views: {
    default: ['nome', 'codigo', 'campus', 'imagemCapa', 'ambientes'],
    input: ['nome', 'codigo', 'campus'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,

      create: true,
      updateById: true,

      list: {
        filters: [['campus.id', ['$eq']]],
      },
    },

    extra: {
      getImagemCapa: {
        description: 'Obtêm a imagem de capa.',

        body: {
          type: 'file',
          nullable: false,
          required: true,
          description: 'Arquivo.',
          mimeTypes: ['image/jpeg', 'image/png'],
        },

        outputs: {
          success: {
            type: 'file',
            required: true,
            nullable: false,
            description: 'Binário.',
            mimeTypes: ['image/jpeg'],
          },
        },
      },
      setImagemCapa: {
        description: 'Define a imagem de capa.',

        body: {
          type: 'file',
          nullable: false,
          required: true,
          description: 'Arquivo.',
          mimeTypes: ['image/jpeg', 'image/png'],
        },

        outputs: {
          success: {
            type: 'boolean',
            required: true,
            nullable: false,
            description: 'Resultado da operação.',
          },
        },
      },
    },
  },
}));
