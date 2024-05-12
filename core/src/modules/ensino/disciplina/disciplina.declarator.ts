import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
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

    imagemCapa: ImagemCapa(),
  },

  views: {
    default: ['nome', 'nomeAbreviado', 'cargaHoraria', 'imagemCapa@default'],
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
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
}));
