import { createDeclarator } from '../../../types';

export const Arquivo = createDeclarator(() => ({
  id: 'uuid',

  dated: true,

  name: 'Arquivo',

  properties: {
    name: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Nome.',
    },
    mimeType: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Mime-type.',
    },
    sizeBytes: {
      type: 'integer',
      required: true,
      nullable: true,
      description: 'Tamanho (em bytes).',
    },
    storageType: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Estratégia de armazenamento.',
    },
  },

  views: {
    default: ['name', 'mimeType', 'sizeBytes', 'storageType'],
  },

  operations: {
    crud: {
      findById: true,
      list: { view: 'default' },
      create: { view: 'default' },
      updateById: { by: 'id', view: 'default' },
      deleteById: true,
    },

    extra: {
      getFile: {
        description: 'Obtêm o conteúdo.',

        queries: {
          nomeRecurso: {
            type: 'string',
            required: true,
            nullable: false,
            description: 'Acesso via recurso: nome',
          },
          idRecurso: {
            type: 'string',
            required: true,
            nullable: false,
            description: 'Acesso via recurso: id',
          },
        },

        outputs: {
          success: {
            type: 'file',
            required: true,
            nullable: false,
            description: 'Binário.',
            mimeTypes: ['application/octet-stream'],
          },
        },
      },
    },
  },
}));
