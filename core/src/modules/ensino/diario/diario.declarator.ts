import { createDeclarator } from '../../../types';
import { AmbienteDeclarator } from '../../ambientes';
import { Disciplina } from '../disciplina';
import { Turma } from '../turma';

export const Diario = createDeclarator(() => ({
  name: 'Diario',

  id: 'uuid',
  dated: true,

  properties: {
    situacao: {
      type: 'boolean',
      nullable: false,
      required: true,
      description: 'Situação do diário.',
    },

    ano: {
      type: 'integer',
      nullable: false,
      required: true,
      description: 'Ano do diário.',
    },

    etapa: {
      type: 'string',
      nullable: true,
      required: true,
      description: 'Etapa do diário.',
    },

    turma: {
      type: 'reference',
      nullable: false,
      required: true,
      description: 'Turma vinculada ao diário.',
      references: 'declarator',
      declarator: () => Turma,
    },

    disciplina: {
      type: 'reference',
      nullable: false,
      required: true,
      description: 'Disciplina vinculada ao diário.',
      references: 'declarator',
      declarator: () => Disciplina,
    },

    ambientePadrao: {
      type: 'reference',
      nullable: true,
      required: true,
      description: 'Ambiente padrão.',
      references: 'declarator',
      declarator: () => AmbienteDeclarator,
    },

    imagemCapa: CoverImage(),
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'situacao',
      'ano',
      'etapa',
      'turma',
      'disciplina@default',
      'ambientePadrao@default',
      'CoverImage@default',
    ],
    input: ['situacao', 'ano', 'etapa', 'turma', 'disciplina@findById', 'ambientePadrao@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['turma.id', ['$eq']],
          ['disciplina.id', ['$eq']],
          ['ambientePadrao.id', ['$eq']],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
}));
