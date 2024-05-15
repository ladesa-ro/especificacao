import { CoverImage, GetCoverImage, SetCoverImage } from '../../-shared';
import { createDeclarator } from '../../../types';

export const Disciplina = createDeclarator(() => ({
  name: 'Disciplina',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      nullable: false,
      required: true,
      type: 'string',
      description: 'Nome da disciplina.',
      constraints: { minLength: 1 },
    },

    nomeAbreviado: {
      nullable: false,
      required: true,
      type: 'string',
      description: 'Nome abreviado da disciplina.',
      constraints: { minLength: 1 },
    },

    cargaHoraria: {
      nullable: false,
      required: true,
      type: 'integer',
      description: 'Carga horária da disciplina.',
      constraints: {
        min: 1,
        integer: true,
      },
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
      'nome',
      'nomeAbreviado',
      'cargaHoraria',
      'CoverImage@default',
    ],
    input: ['nome', 'nomeAbreviado', 'cargaHoraria'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: true,
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
}));
