import { createDeclarator } from '../../../types';
import { ImagemArquivo } from '../imagem-arquivo/imagem-arquivo.declarator';

export const Imagem = createDeclarator(() => ({
  id: 'uuid',

  dated: true,
  name: 'Imagem',

  properties: {
    descricao: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Descrição.',
    },
    versoes: {
      type: 'array',
      required: true,
      nullable: false,
      description: 'Versões.',
      of: {
        type: 'reference',
        references: 'declarator',
        required: true,
        nullable: false,
        declarator: () => ImagemArquivo,
        description: 'Versão.',
      },
    },
  },

  views: {
    default: ['descricao', ['versoes', { subView: 'fromImagem' }]],
  },
}));
