import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const CalendarioLetivoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "CalendarioLetivo",

  properties: {
    nome: U.String({
      description: "Nome do calendário letivo.",
    }),

    ano: U.Integer({
      description: "Ano do calendário letivo.",
      constraints: {
        integer: true,
      },
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

export const CalendarioLetivoView = () =>
  U.View({
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

export const CalendarioLetivoFindOneInputView = () =>
  U.View({
    name: Tokens.CalendarioLetivo.Views.FindOneInput,
    description: "Dados de entrada para encontrar um CalendarioLetivo por ID.",
    type: U.ObjectTransformer.From(CalendarioLetivoView().type).Pick({ id: true }).Node(),
  });

export const CalendarioLetivoFindOneResultView = () =>
  U.View({
    name: Tokens.CalendarioLetivo.Views.FindOneResult,

    description: "Visão FindOne de um CalendarioLetivo.",

    type: U.ObjectTransformer.From(CalendarioLetivoView().type)
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

export const CalendarioLetivoInputCreateView = () =>
  U.View({
    name: Tokens.CalendarioLetivo.Views.InputCreate,

    description: "Dados de entrada para a criação de um CalendarioLetivo.",

    type: U.ObjectTransformer.From(CalendarioLetivoView().type)
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

export const CalendarioLetivoInputUpdateView = () =>
  U.View({
    name: Tokens.CalendarioLetivo.Views.InputUpdate,
    description: "Dados de entrada para a atualização de um CalendarioLetivo.",
    type: UniNodeTypeObjectPartial(CalendarioLetivoInputCreateView().type),
  });

export const CalendarioLetivoFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.CalendarioLetivo.Views.FindAllResult,
    description: "Resultados da busca a CalendarioLetivos.",
    targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
  });

export const CalendarioLetivoDeclarator = () =>
  CompileOperations({
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

export const CalendarioLetivoProvider = LazyModule({
  nodes: [
    CalendarioLetivoEntity,
    CalendarioLetivoView,
    CalendarioLetivoFindOneInputView,
    CalendarioLetivoFindOneResultView,
    CalendarioLetivoInputCreateView,
    CalendarioLetivoInputUpdateView,
    CalendarioLetivoFindAllResult,
    CalendarioLetivoDeclarator,
  ],
});
