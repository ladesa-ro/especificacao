import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const DiaCalendarioEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "DiaCalendario",

  properties: {
    data: U.String({
      format: "date",
      description: "Data.",
    }),
    diaLetivo: U.Boolean({
      description: "Define que o dia é letivo.",
    }),
    feriado: U.Boolean({
      description: "Define que o dia é feriado.",
    }),
    //
    calendario: U.Reference({
      nullable: true,
      description: "Calendario.",
      targetsTo: Tokens.CalendarioLetivo.Entity,
    }),
  },
});

export const DiaCalendarioView = () =>
  U.View({
    name: Tokens.DiaCalendario.Entity,

    description: "Visão completa de um DiaCalendario.",

    type: U.ObjectTransformer.From(DiaCalendarioEntity)
      .Extends({
        properties: {
          calendario: {
            targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
          },
        },
      })
      .Node(),
  });

export const DiaCalendarioFindOneInputView = () =>
  U.View({
    name: Tokens.DiaCalendario.Views.FindOneInput,
    description: "Dados de entrada para encontrar um DiaCalendario por ID.",
    type: U.ObjectTransformer.From(DiaCalendarioView().type).Pick({ id: true }).Node(),
  });

export const DiaCalendarioFindOneResultView = () =>
  U.View({
    name: Tokens.DiaCalendario.Views.FindOneResult,

    description: "Visão FindOne de um DiaCalendario.",

    type: U.ObjectTransformer.From(DiaCalendarioView().type)
      .Extends({ partialOf: Tokens.DiaCalendario.Entity })
      .Pick({
        id: true,
        //
        data: true,
        diaLetivo: true,
        feriado: true,
        //
        calendario: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const DiaCalendarioInputCreateView = () =>
  U.View({
    name: Tokens.DiaCalendario.Views.InputCreate,

    description: "Dados de entrada para a criação de um DiaCalendario.",

    type: U.ObjectTransformer.From(DiaCalendarioView().type)
      .Pick({
        data: true,
        diaLetivo: true,
        feriado: true,
        calendario: true,
      })
      .Extends({
        properties: {
          calendario: {
            targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const DiaCalendarioInputUpdateView = () =>
  U.View({
    name: Tokens.DiaCalendario.Views.InputUpdate,
    description: "Dados de entrada para a atualização de um DiaCalendario.",
    type: UniNodeTypeObjectPartial(DiaCalendarioInputCreateView().type),
  });

export const DiaCalendarioFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.DiaCalendario.Views.FindAllResult,
    description: "Resultados da busca a DiaCalendarios.",
    targetsTo: Tokens.DiaCalendario.Views.FindOneResult,
  });

export const DiaCalendarioDeclarator = () =>
  CompileOperations({
    entity: Tokens.DiaCalendario.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.DiaCalendario.Operations.FindById,
          input: Tokens.DiaCalendario.Views.FindOneInput,
          output: Tokens.DiaCalendario.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.DiaCalendario.Operations.DeleteById,
        },
        create: {
          name: Tokens.DiaCalendario.Operations.Create,
          input: Tokens.DiaCalendario.Views.InputCreate,
        },
        updateById: {
          name: Tokens.DiaCalendario.Operations.UpdateById,
          input: Tokens.DiaCalendario.Views.InputUpdate,
        },

        list: {
          name: Tokens.DiaCalendario.Operations.List,
          view: Tokens.DiaCalendario.Views.FindAllResult,
          filters: [["calendario.id", ["$eq"]]],
        },
      },
    },
  });

export const DiaCalendarioProvider = LazyModule({
  nodes: [
    DiaCalendarioEntity,
    DiaCalendarioView,
    DiaCalendarioFindOneInputView,
    DiaCalendarioFindOneResultView,
    DiaCalendarioInputCreateView,
    DiaCalendarioInputUpdateView,
    DiaCalendarioFindAllResult,
    DiaCalendarioDeclarator,
  ],
});
