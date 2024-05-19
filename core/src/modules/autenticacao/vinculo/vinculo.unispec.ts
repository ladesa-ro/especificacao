import { U } from '@unispec/core';
import { Tokens } from '../../tokens';

export const VinculoEntity = U.ObjectEntity({
  name: 'Vinculo',

  id: 'uuid',
  dated: true,

  properties: {
    ativo: U.Boolean({
      description: 'Indica se o vínculo está ativo.',
    }),

    cargo: U.String({
      description: 'Cargo do usuário no vínculo.',
    }),

    campus: U.Reference({
      description: 'Campus associado ao vínculo.',
      targetsTo: Tokens.Campus.Entity,
    }),

    usuario: U.Reference({
      description: 'Usuário associado ao vínculo.',
      targetsTo: Tokens.Usuario.Entity,
    }),
  },
});

export const VinculoView = U.View({
  name: Tokens.Vinculo.Entity,
  description: 'Visão completa de um Vínculo.',
  properties: {
    ...VinculoEntity.properties,

    campus: U.ReferenceExtends(VinculoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    usuario: U.ReferenceExtends(VinculoEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneResult,
    }),
  },
});

export const VinculoFindOneInputView = U.View({
  name: Tokens.Vinculo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Vínculo por ID.',
  properties: { ...U.ObjectPick(VinculoView, { id: true }) },
});

export const VinculoFindOneResultView = U.View({
  name: Tokens.Vinculo.Views.FindOneResult,

  partialOf: Tokens.Vinculo.Entity,
  description: 'Visão FindOne de um Vínculo.',

  properties: {
    ...U.ObjectPick(VinculoView, {
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

export const VinculoUpdateView = U.View({
  name: Tokens.Vinculo.Views.Update,
  description: 'Dados de entrada para a alteração de vínculo de um Usuário a um Campus.',
  properties: {
    campus: U.ReferenceExtends(VinculoView.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),
    usuario: U.ReferenceExtends(VinculoView.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneInput,
    }),
    //
    cargos: U.Array({
      description: 'Cargos do usuário no vínculo.',
      items: VinculoView.properties.cargo,
    }),
  },
});

export const VinculoDeclarator = U.Declarator({
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
      update: U.Operation({
        name: Tokens.Vinculo.Views.Update,

        description: VinculoUpdateView.description,

        input: {
          body: Tokens.Vinculo.Views.Update,
        },

        output: {
          // TODO
        },
      }),
    },
  },
});

export const VinculoProvider = U.Provider((ctx) => {
  ctx.Add(VinculoEntity);
  ctx.Add(VinculoView);
  ctx.Add(VinculoFindOneInputView);
  ctx.Add(VinculoFindOneResultView);
  ctx.Add(VinculoUpdateView);
  ctx.Add(VinculoDeclarator);
});
