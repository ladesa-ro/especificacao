import { BuildModule, Build as U } from "@unispec/ast-builder";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

export const VinculoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Vinculo",

  properties: {
    ativo: U.Boolean({
      description: "Indica se o vínculo está ativo.",
    }),

    cargo: U.String({
      description: "Cargo do usuário no vínculo.",
    }),

    campus: U.Reference({
      description: "Campus associado ao vínculo.",
      targetsTo: Tokens.Campus.Entity,
    }),

    usuario: U.Reference({
      description: "Usuário associado ao vínculo.",
      targetsTo: Tokens.Usuario.Entity,
    }),
  },
});

export const VinculoView = U.View({
  name: Tokens.Vinculo.Entity,

  description: "Visão completa de um Vínculo.",

  type: U.ObjectTransformer.From(VinculoEntity)
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneResult,
        },

        usuario: {
          targetsTo: Tokens.Usuario.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const VinculoFindOneInputView = U.View({
  name: Tokens.Vinculo.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Vínculo por ID.",
  type: U.ObjectTransformer.From(VinculoView.type).Pick({ id: true }).Node(),
});

export const VinculoFindOneResultView = U.View({
  name: Tokens.Vinculo.Views.FindOneResult,

  description: "Visão FindOne de um Vínculo.",

  type: U.ObjectTransformer.From(VinculoView.type)
    .Extends({ partialOf: Tokens.Vinculo.Entity })
    .Pick({
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
    })
    .Node(),
});

export const VinculoUpdateView = U.View({
  name: Tokens.Vinculo.Views.Update,

  description: "Dados de entrada para a alteração de vínculo de um Usuário a um Campus.",

  type: U.ObjectTransformer.From(VinculoView.type)
    .Pick({
      campus: true,
      usuario: true,
    })
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneInput,
        },
        usuario: {
          targetsTo: Tokens.Usuario.Views.FindOneInput,
        },
        //
        cargos: U.Array({
          description: "Cargos do usuário no vínculo.",
          items: VinculoView.type.properties.cargo,
        }),
      },
    })
    .Node(),
});

export const VinculoDeclarator = CompileOperations({
  entity: Tokens.Vinculo.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Vinculo.Operations.FindById,
        input: Tokens.Vinculo.Views.FindOneInput,
        output: Tokens.Vinculo.Views.FindOneResult,
      },

      list: {
        name: Tokens.Vinculo.Operations.List,
        view: Tokens.Vinculo.Views.FindOneResult,
        filters: [],
      },
    },
    extra: {
      update: U.Operation({
        name: Tokens.Vinculo.Operations.Update,

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

export const VinculoProvider = BuildModule({
  nodes: [VinculoEntity, VinculoView, VinculoFindOneInputView, VinculoFindOneResultView, VinculoUpdateView, VinculoDeclarator],
});
