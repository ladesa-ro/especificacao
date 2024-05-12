import { ImagemCapa } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Bloco } from '../bloco';

export const Ambiente = createDeclarator(() => ({
  name: 'Ambiente',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Nome do ambiente/sala.',
      constraints: [['string', { minLength: 1 }]],
    },

    descricao: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Descrição do ambiente/sala.',
      constraints: [['string', { minLength: 1 }]],
    },

    codigo: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Código do ambiente/sala.',
      constraints: [['string', { minLength: 1 }]],
    },

    capacidade: {
      type: 'integer',
      nullable: true,
      required: false,
      description: 'Capacidade do ambiente/sala.',
      constraints: ['number'],
    },

    tipo: {
      type: 'string',
      nullable: true,
      required: false,
      description: 'Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.',
      constraints: [['string', { minLength: 1 }]],
    },

    bloco: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Bloco,
      description: 'Bloco que o ambiente/sala pertence.',
    },

    imagemCapa: ImagemCapa(),
  },

  views: {
    default: ['nome', 'descricao', 'codigo', 'capacidade', 'tipo', 'bloco', 'imagemCapa'],
    input: ['nome', 'descricao', 'codigo', 'capacidade', 'tipo', 'bloco@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['bloco.id', ['$eq']],
          ['bloco.campus.id', ['$eq']],
        ],
      },
    },
  },
}));
