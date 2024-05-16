import {
  UniDeclarator,
  UniProvider,
  UniTypeArray,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

export const VinculoEntity = UniTypeEntity({
  name: 'Vinculo',

  id: 'uuid',
  dated: true,

  properties: {
    ativo: UniTypeBoolean({
      description: 'Indica se o vínculo está ativo.',
    }),

    cargo: UniTypeString({
      description: 'Cargo do usuário no vínculo.',
    }),

    campus: UniTypeReference({
      description: 'Campus associado ao vínculo.',
      targetsTo: Tokens.Campus.Entity,
    }),

    usuario: UniTypeReference({
      description: 'Usuário associado ao vínculo.',
      targetsTo: Tokens.Usuario.Entity,
    }),
  },
});

export const VinculoView = UniView({
  name: Tokens.Vinculo.Entity,
  description: 'Visão completa de um Vínculo.',
  properties: {
    ...VinculoEntity.properties,

    campus: UniTypeReferenceExtends(VinculoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    usuario: UniTypeReferenceExtends(VinculoEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneResult,
    }),
  },
});

export const VinculoFindOneInputView = UniView({
  name: Tokens.Vinculo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Vínculo por ID.',
  properties: { ...UniTypePick(VinculoView, { id: true }) },
});

export const VinculoFindOneResultView = UniView({
  name: Tokens.Vinculo.Views.FindOneResult,

  partialOf: Tokens.Vinculo.Entity,
  description: 'Visão FindOne de um Vínculo.',

  properties: {
    ...UniTypePick(VinculoView, {
      id: true,
      //
      ativo: true,
      cargo: true,
      //
      campus: true,
      usuario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const VinculoUpdateView = UniView({
  name: Tokens.Vinculo.Views.Update,
  description: 'Dados de entrada para a alteração de vínculo de um Usuário a um Campus.',
  properties: {
    campus: UniTypeReferenceExtends(VinculoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),
    usuario: UniTypeReferenceExtends(VinculoEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneInput,
    }),
    //
    cargos: UniTypeArray({
      description: 'Cargos do usuário no vínculo.',

      of: VinculoEntity.properties.cargo,
    }),
  },
});

export const VinculoDeclarator = UniDeclarator({
  entity: Tokens.Vinculo.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Vinculo.Views.FindOneInput,
        output: Tokens.Vinculo.Views.FindOneResult,
      },

      list: {
        view: Tokens.Vinculo.Views.FindOneResult,
        filters: [],
      },
    },
    extra: {
      update: {
        name: Tokens.Vinculo.Views.Update,

        description: VinculoUpdateView.description,

        input: {
          body: Tokens.Vinculo.Views.Update,
        },

        output: {
          // TODO
        },
      },
    },
  },
});

export const VinculoProvider = UniProvider((ctx) => {
  ctx.Add(VinculoEntity);
  ctx.Add(VinculoView);
  ctx.Add(VinculoFindOneInputView);
  ctx.Add(VinculoFindOneResultView);
  ctx.Add(VinculoUpdateView);
  ctx.Add(VinculoDeclarator);
});
