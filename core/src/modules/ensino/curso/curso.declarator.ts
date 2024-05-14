import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Campus } from '../../ambientes';
import { Modalidade } from '../modalidade';

export const Curso = createDeclarator(() => ({
  name: 'Curso',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      description: 'Nome do curso.',
      nullable: false,
      required: true,
      constraints: { minLength: 1 },
    },

    nomeAbreviado: {
      type: 'string',
      description: 'Nome abreviado do curso.',
      nullable: false,
      required: true,
      constraints: { minLength: 1 },
    },

    campus: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Campus,
      description: 'Campus que o curso pertence.',
    },

    modalidade: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Modalidade,
      description: 'Modalidade a que o curso pertence.',
    },

    imagemCapa: ImagemCapa(),
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'nome',
      'nomeAbreviado',
      'campus@default',
      'modalidade@default',
      'imagemCapa@default',
    ],
    input: ['nome', 'nomeAbreviado', 'campus@findById', 'modalidade@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['campus.id', ['$eq']],
          ['modalidade.id', ['$eq']],
        ],
      },
    },
    extra: {
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
}));
