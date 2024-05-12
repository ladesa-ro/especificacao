import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Ambiente } from '../../ambientes';
import { Curso } from '../curso';

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
      constraints: [['string', { minLength: 1 }]],
    },

    curso: {
      nullable: false,
      required: true,
      type: 'reference',
      references: 'declarator',
      declarator: () => Curso,
      description: 'Curso que o turma pertence.',
    },

    ambientePadraoAula: {
      nullable: true,
      required: false,
      type: 'reference',
      references: 'declarator',
      declarator: () => Ambiente,
      description: 'Ambiente padrão da sala de aula.',
    },

    imagemCapa: ImagemCapa(),
  },

  views: {
    default: ['periodo', 'curso@default', 'ambientePadraoAula@default', 'imagemCapa@default'],
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
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
}));
