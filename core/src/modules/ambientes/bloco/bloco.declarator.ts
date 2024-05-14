import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Ambiente } from '../ambiente';
import { Campus } from '../campus';

export const Bloco = createDeclarator(() => ({
  name: 'Bloco',

  id: 'uuid',
  dated: true,

  properties: {
    nome: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Nome do Bloco.',
      constraints: { minLength: 1 },
    },
    codigo: {
      type: 'string',
      nullable: false,
      required: true,
      description: 'Código do Bloco.',
      constraints: { minLength: 1 },
    },
    campus: {
      type: 'reference',
      required: true,
      nullable: false,
      references: 'declarator',
      declarator: () => Campus,
      description: 'Campus.',
    },
    imagemCapa: ImagemCapa(),
    ambientes: {
      type: 'array',
      required: true,
      nullable: false,
      description: 'Ambientes.',
      of: {
        type: 'reference',
        references: 'declarator',
        required: true,
        nullable: false,
        declarator: () => Ambiente,
        description: 'Ambiente.',
      },
    },
  },

  views: {
    default: [
      'id',
      'dateCreated',
      'dateUpdated',
      'dateDeleted',
      //
      'nome',
      'codigo',
      'campus',
      'imagemCapa@default',
      'ambientes@default',
    ],
    input: ['nome', 'codigo', 'campus@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,

      create: true,
      updateById: true,

      list: {
        filters: [['campus.id', ['$eq']]],
      },
    },

    extra: {
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
}));
