import { CoverImage, GetCoverImage, SetCoverImage } from '../../-shared';
import { createDeclarator } from '../../../types';
import { AmbienteDeclarator } from '../../ambientes';
import { CursoEntity } from '../curso';

export const Turma = createDeclarator(() => ({
  name: 'Turma',

  id: 'uuid',
  dated: true,

  properties: {
    periodo: {
      nullable: false,
      required: true,
      type: 'string',
      description: 'Período do turma.',
      constraints: { minLength: 1 },
    },

    curso: {
      nullable: false,
      required: true,
      type: 'reference',
      references: 'declarator',
      declarator: () => CursoEntity,
      description: 'Curso que o turma pertence.',
    },

    ambientePadraoAula: {
      nullable: true,
      required: false,
      type: 'reference',
      references: 'declarator',
      declarator: () => AmbienteDeclarator,
      description: 'Ambiente padrão da sala de aula.',
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
      'periodo',
      'curso@default',
      'ambientePadraoAula@default',
      'CoverImage@default',
    ],
    input: ['periodo', 'curso@findById', 'ambientePadraoAula@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['ambientePadraoAula.nome', ['$eq']],
          ['ambientePadraoAula.codigo', ['$eq']],
          ['ambientePadraoAula.capacidade', ['$eq']],
          ['ambientePadraoAula.tipo', ['$eq']],
          ['curso.nome', ['$eq']],
          ['curso.nomeAbreviado', ['$eq']],
          ['curso.campus.id', ['$eq']],
          ['curso.modalidade.id', ['$eq']],
          ['curso.modalidade.nome', ['$eq']],
          ['curso.modalidade.slug', ['$eq']],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
}));
