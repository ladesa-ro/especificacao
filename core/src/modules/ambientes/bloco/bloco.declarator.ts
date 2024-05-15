import { UniTypeArray, UniTypeEntity, UniTypeReference, UniTypeString } from '../../../common/unispec/types';
import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
import { IDeclarator, createDeclarator } from '../../../types';
import { AmbienteDeclarator } from '../ambiente';
import { Campus } from '../campus';

export const Bloco: IDeclarator = createDeclarator(() => ({
  name: 'Bloco',

  shape: UniTypeEntity({
    id: 'uuid',
    dated: true,

    properties: {
      nome: UniTypeString({ description: 'Nome do Bloco.', constraints: { minLength: 1 } }),

      codigo: UniTypeString({ description: 'Código do Bloco.', constraints: { minLength: 1 } }),
      campus: UniTypeReference({ targetsTo: Campus.name, description: 'Campus.' }),

      imagemCapa: ImagemCapa(),

      ambientes: UniTypeArray({
        type: 'array',
        description: 'Ambientes.',
        of: UniTypeReference({ targetsTo: AmbienteDeclarator.name, description: 'Ambiente.' }),
      }),
    },
  }),

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
