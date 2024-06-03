import { U } from "@unispec/core";
import { PaginatedResultView } from "../../-shared";
import { Tokens } from "../../tokens";

export const CalendarioLetivoEntity = U.ObjectEntity({
  id: "uuid",
  dated: true,

  description: "CalendarioLetivo",

  properties: {
    nome: U.String({
      description: "Nome do calendário letivo.",
    }),

    ano: U.String({
      description: "Ano do calendário letivo.",
    }),

    //

    campus: U.Reference({
      targetsTo: Tokens.Campus.Entity,
      description: "Campus.",
    }),

    modalidade: U.Reference({
      nullable: true,
      targetsTo: Tokens.Modalidade.Entity,
      description: "Modalidade.",
    }),
  },
});

export const CalendarioLetivoView = U.View({
  name: Tokens.CalendarioLetivo.Entity,

  description: "Visão completa de um CalendarioLetivo.",

  type: U.ObjectTransformer.From(CalendarioLetivoEntity)
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneResult,
        },

        modalidade: {
          targetsTo: Tokens.Modalidade.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const CalendarioLetivoFindOneInputView = U.View({
  name: Tokens.CalendarioLetivo.Views.FindOneInput,
  description: "Dados de entrada para encontrar um CalendarioLetivo por ID.",
  type: U.ObjectTransformer.From(CalendarioLetivoView.type).Pick({ id: true }).Node(),
});

export const CalendarioLetivoFindOneResultView = U.View({
  name: Tokens.CalendarioLetivo.Views.FindOneResult,

  description: "Visão FindOne de um CalendarioLetivo.",

  type: U.ObjectTransformer.From(CalendarioLetivoView.type)
    .Extends({ partialOf: Tokens.CalendarioLetivo.Entity })
    .Pick({
      id: true,
      //
      nome: true,
      ano: true,
      //
      campus: true,
      modalidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const CalendarioLetivoInputCreateView = U.View({
  name: Tokens.CalendarioLetivo.Views.InputCreate,

  description: "Dados de entrada para a criação de um CalendarioLetivo.",

  type: U.ObjectTransformer.From(CalendarioLetivoView.type)
    .Pick({
      nome: true,
      ano: true,
      campus: true,
      modalidade: true,
    })
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneInput,
        },

        modalidade: {
          targetsTo: Tokens.Modalidade.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const CalendarioLetivoInputUpdateView = U.View({
  name: Tokens.CalendarioLetivo.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um CalendarioLetivo.",
  type: U.ObjectPartial(CalendarioLetivoInputCreateView.type),
});

export const CalendarioLetivoFindAllResult = PaginatedResultView({
  name: Tokens.CalendarioLetivo.Views.FindAllResult,
  description: "Resultados da busca a CalendarioLetivos.",
  targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
});

export const CalendarioLetivoDeclarator = U.Declarator({
  entity: Tokens.CalendarioLetivo.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.CalendarioLetivo.Operations.FindById,
        input: Tokens.CalendarioLetivo.Views.FindOneInput,
        output: Tokens.CalendarioLetivo.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.CalendarioLetivo.Operations.DeleteById,
      },
      create: {
        name: Tokens.CalendarioLetivo.Operations.Create,
        input: Tokens.CalendarioLetivo.Views.InputCreate,
      },
      updateById: {
        name: Tokens.CalendarioLetivo.Operations.UpdateById,
        input: Tokens.CalendarioLetivo.Views.InputUpdate,
      },

      list: {
        name: Tokens.CalendarioLetivo.Operations.List,
        view: Tokens.CalendarioLetivo.Views.FindAllResult,
        filters: [
          ["campus.id", ["$eq"]],
          ["modalidade.id", ["$eq"]],
        ],
      },
    },
  },
});

export const CalendarioLetivoProvider = U.Provider((ctx) => {
  ctx.Add(CalendarioLetivoEntity);
  ctx.Add(CalendarioLetivoView);
  ctx.Add(CalendarioLetivoFindOneInputView);
  ctx.Add(CalendarioLetivoFindOneResultView);
  ctx.Add(CalendarioLetivoInputCreateView);
  ctx.Add(CalendarioLetivoInputUpdateView);
  ctx.Add(CalendarioLetivoFindAllResult);
  ctx.Add(CalendarioLetivoDeclarator);
});
