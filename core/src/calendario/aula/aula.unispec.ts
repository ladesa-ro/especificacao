import { U } from "@unispec/core";
import { PaginatedResultView } from "../../-shared";
import { Tokens } from "../../tokens";

export const AulaEntity = U.ObjectEntity({
  id: "uuid",
  dated: true,

  description: "Aula",

  properties: {
    formato: U.String({
      type: "string",
      nullable: true,
      description: "Formato da aula.",
    }),

    data: U.String({
      type: "string",
      format: "date",
      description: "Data da aula.",
    }),

    intervaloDeTempo: U.Reference({
      targetsTo: Tokens.IntervaloDeTempo.Entity,
      description: "Intervalo de Tempo associado à aula.",
    }),

    diario: U.Reference({
      targetsTo: Tokens.Diario.Entity,
      description: "Diário associado à aula.",
    }),

    ambiente: U.Reference({
      nullable: true,
      targetsTo: Tokens.Ambiente.Entity,
      description: "Ambiente associado à aula.",
    }),
  },
});

export const AulaView = U.View({
  name: Tokens.Aula.Entity,

  default: "Visão completa de uma Aula",

  type: U.ObjectTransformer.From(AulaEntity)
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        },

        diario: {
          targetsTo: Tokens.Diario.Views.FindOneResult,
        },

        ambiente: {
          targetsTo: Tokens.Ambiente.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const AulaFindOneInputView = U.View({
  name: Tokens.Aula.Views.FindOneInput,
  description: "Dados de entrada para encontrar uma Aula por ID.",
  type: U.ObjectTransformer.From(AulaView.type).Pick({ id: true }).Node(),
});

export const AulaFindOneResultView = U.View({
  name: Tokens.Aula.Views.FindOneResult,

  description: "Visão FindOne de uma Aula.",

  type: U.ObjectTransformer.From(AulaView.type)
    .Extends({ partialOf: Tokens.Aula.Entity })
    .Pick({
      id: true,
      //
      formato: true,
      data: true,
      //
      intervaloDeTempo: true,
      diario: true,
      ambiente: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const AulaInputCreateView = U.View({
  name: Tokens.Aula.Views.InputCreate,

  description: "Dados de entrada para a criação de uma Aula.",

  type: U.ObjectTransformer.From(AulaView.type)
    .Pick({
      formato: true,
      data: true,
      intervaloDeTempo: true,
      diario: true,
      ambiente: true,
    })
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.Input,
        },

        diario: {
          targetsTo: Tokens.Diario.Views.FindOneInput,
        },

        ambiente: {
          targetsTo: Tokens.Ambiente.Views.FindOneInput,
        },
      },
    })

    .Node(),
});

export const AulaInputUpdateView = U.View({
  name: Tokens.Aula.Views.InputUpdate,
  description: "Dados de entrada para a atualização de uma Aula.",
  type: U.ObjectTransformer.From(AulaInputCreateView.type).Partial().Node(),
});

export const AulaFindAllResult = PaginatedResultView({
  name: Tokens.Aula.Views.FindAllResult,
  description: "Resultados da busca a Aulas.",
  targetsTo: Tokens.Aula.Views.FindOneResult,
});

export const AulaDeclarator = U.Declarator({
  entity: Tokens.Aula.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Aula.Operations.FindById,
        input: Tokens.Aula.Views.FindOneInput,
        output: Tokens.Aula.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Aula.Operations.DeleteById,
      },
      create: {
        name: Tokens.Aula.Operations.Create,
        input: Tokens.Aula.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Aula.Operations.UpdateById,
        input: Tokens.Aula.Views.InputUpdate,
      },

      list: {
        name: Tokens.Aula.Operations.List,
        view: Tokens.Aula.Views.FindAllResult,
        filters: [
          ["diario.id", ["$eq"]],
          ["ambiente.id", ["$eq"]],
        ],
      },
    },
  },
});

export const AulaProvider = U.Provider((ctx) => {
  ctx.Add(AulaEntity);
  ctx.Add(AulaView);
  ctx.Add(AulaFindOneInputView);
  ctx.Add(AulaFindOneResultView);
  ctx.Add(AulaInputCreateView);
  ctx.Add(AulaInputUpdateView);
  ctx.Add(AulaFindAllResult);
  ctx.Add(AulaDeclarator);
});
