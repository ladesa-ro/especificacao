import { createDeclarator } from '../../../types';
import { Arquivo } from '../arquivo/arquivo.declarator';
import { Imagem } from '../imagem/imagem.declarator';

export const ImagemArquivo = createDeclarator(() => ({
  id: 'uuid',

  dated: true,
  name: 'ImagemArquivo',

  properties: {
    largura: {
      type: 'integer',
      required: true,
      nullable: true,
      description: 'Largura da imagem.',
    },
    altura: {
      type: 'integer',
      required: true,
      nullable: true,
      description: 'Altura da imagem.',
    },
    formato: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Formato da imagem.',
    },
    mimeType: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Mime Type da imagem.',
    },
    imagem: {
      type: 'reference',
      references: 'declarator',
      required: true,
      nullable: true,
      declarator: () => Imagem,
      description: 'Imagem.',
    },
    arquivo: {
      type: 'reference',
      references: 'declarator',
      required: true,
      nullable: true,
      declarator: () => Arquivo,
      description: 'Arquivo.',
    },
  },

  views: {
    default: ['largura', 'altura', 'formato', 'mimeType'],
  },

  operations: {
    crud: {
      findById: false,
      list: false,
      create: false,
      updateById: false,
      deleteById: false,
    },
  },
}));
