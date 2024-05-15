import { CoverImage, SetCoverImage } from '@/modules/-shared';
import {
  UniDeclarator,
  UniTypeArray,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const BlocoEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Bloco',

  properties: {
    nome: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome do Bloco.',
    }),

    codigo: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Código do Bloco.',
    }),

    //

    campus: UniTypeReference({
      description: 'Campus.',
      targetsTo: Tokens.Campus.Entity,
    }),

    imagemCapa: CoverImage(),

    ambientes: UniTypeArray({
      type: 'array',
      description: 'Ambientes.',
      of: UniTypeReference({
        description: 'Ambiente.',
        targetsTo: Tokens.Ambiente.Entity,
      }),
    }),
  },
});

export const BlocoView = UniView({
  name: Tokens.Bloco.Entity,
  description: 'Visão completa de um Bloco.',
  properties: BlocoEntity.properties,
});

export const BlocoFindOneInputView = UniView({
  name: Tokens.Bloco.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Bloco por ID.',
  properties: { ...UniTypePick(BlocoEntity, { id: true }) },
});

export const BlocoFindOneResultView = UniView({
  name: Tokens.Bloco.Views.FindOneResult,

  partialOf: Tokens.Bloco.Entity,
  description: 'Visão FindOne de um Bloco.',

  properties: {
    ...UniTypePick(BlocoEntity, {
      id: true,
      //
      nome: true,
      codigo: true,
      //
      campus: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const BlocoInputCreateView = UniView({
  name: Tokens.Bloco.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Bloco.',
  properties: {
    ...UniTypePick(BlocoView, {
      nome: true,
      codigo: true,
    }),

    campus: UniTypeReference({
      targetsTo: Tokens.Campus.Views.FindOneResult,
      description: 'Campus que o Bloco pertence.',
    }),
  },
});

export const BlocoInputUpdateView = UniView({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Bloco.',
  properties: {
    ...UniTypePartial(BlocoInputCreateView),
  },
});

// =======================================

export const BlocoDeclarator = UniDeclarator({
  entity: Tokens.Bloco.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Bloco.Views.FindOneInput,
        output: Tokens.Bloco.Views.FindOneResult,
      },

      deleteById: Tokens.Bloco.Views.FindOneInput,

      create: Tokens.Bloco.Views.InputCreate,
      updateById: Tokens.Bloco.Views.InputUpdate,

      list: {
        view: Tokens.Bloco.Views.FindOneResult,
        filters: [['campus.id', ['$eq']]],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});
