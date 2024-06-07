import { BuildModule, Build as U } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common-entity";
import { Tokens } from "../../tokens";

const EstadoEntity = CommonEntity({
  id: "numeric",
  dated: false,

  description: "Estado",

  properties: {
    nome: U.String({
      description: "Nome oficial do Estado.",
    }),

    sigla: U.String({
      description: "Sigla do Estado.",
      constraints: {
        ["x-estado-sigla"]: true,
      } as any,
    }),
  },
});

export const EstadoView = U.View({
  name: Tokens.Estado.Entity,
  description: "Visão completa de um Estado.",
  type: U.ObjectTransformer.From(EstadoEntity).Node(),
});

export const EstadoFindOneInputView = U.View({
  name: Tokens.Estado.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Estado por ID.",
  type: U.ObjectTransformer.From(EstadoView.type).Pick({ id: true }).Node(),
});

export const EstadoFindOneResultView = U.View({
  name: Tokens.Estado.Views.FindOneResult,

  description: "Visão FindOne de um Estado.",

  type: U.ObjectTransformer.From(EstadoView.type)
    .Extends({
      partialOf: Tokens.Estado.Entity,
    })
    .Pick({
      id: true,
      nome: true,
      sigla: true,
    })
    .Node(),
});

export const EstadoFindAllResult = PaginatedResultView({
  name: Tokens.Estado.Views.FindAllResult,
  description: "Resultados da busca a Estados.",
  targetsTo: Tokens.Estado.Views.FindOneResult,
});

//

export const EstadoDeclarator = CompileOperations({
  entity: Tokens.Estado.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Estado.Operations.FindById,
        input: Tokens.Estado.Views.FindOneInput,
        output: Tokens.Estado.Views.FindOneResult,
      },

      list: {
        name: Tokens.Estado.Operations.List,
        view: Tokens.Estado.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const EstadoProvider = BuildModule({
  nodes: [EstadoEntity, EstadoView, EstadoFindOneInputView, EstadoFindOneResultView, EstadoFindAllResult, EstadoDeclarator],
});
