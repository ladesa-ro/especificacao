import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const TurmaDisponibilidadeDiaEntity = CommonEntity({
  id: "uuid",

  description: "TurmaDisponibilidadeDia",

  properties: {
    diaSemanaIso: U.Integer({
      description: "Dia da semana.",
    }),
    //
    intervaloDeTempo: U.Reference({
      nullable: true,
      description: "Intervalo de tempo.",
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    turmaDisponibilidade: U.Reference({
      nullable: true,
      description: "Disponibilidade da turma.",
      targetsTo: Tokens.TurmaDisponibilidade.Entity,
    }),
  },
});

export const TurmaDisponibilidadeDiaView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidadeDia.Entity,

    default: "Visão completa de uma TurmaDisponibilidadeDia",

    type: U.ObjectTransformer.From(TurmaDisponibilidadeDiaEntity)
      .Extends({
        properties: {
          intervaloDeTempo: {
            targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
          },

          turmaDisponibilidade: {
            targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
          },
        },
      })
      .Node(),
  });

export const TurmaDisponibilidadeDiaFindOneInputView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,
    description: "Dados de entrada para encontrar uma TurmaDisponibilidadeDia por ID.",
    type: U.ObjectTransformer.From(TurmaDisponibilidadeDiaView().type).Pick({ id: true }).Node(),
  });

export const TurmaDisponibilidadeDiaFindOneResultView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,

    partialOf: Tokens.TurmaDisponibilidadeDia.Entity,
    description: "Visão FindOne de uma TurmaDisponibilidadeDia.",

    type: U.ObjectTransformer.From(TurmaDisponibilidadeDiaView().type)
      .Pick({
        id: true,
        //
        diaSemanaIso: true,
        //
        intervaloDeTempo: true,
        turmaDisponibilidade: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const TurmaDisponibilidadeDiaInputCreateView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidadeDia.Views.InputCreate,

    description: "Dados de entrada para a criação de uma TurmaDisponibilidadeDia.",

    type: U.ObjectTransformer.From(TurmaDisponibilidadeDiaView().type)
      .Pick({
        diaSemanaIso: true,
        intervaloDeTempo: true,
        turmaDisponibilidade: true,
      })
      .Extends({
        properties: {
          intervaloDeTempo: {
            targetsTo: Tokens.IntervaloDeTempo.Views.Input,
          },

          turmaDisponibilidade: {
            targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const TurmaDisponibilidadeDiaInputUpdateView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidadeDia.Views.InputUpdate,
    description: "Dados de entrada para a atualização de uma TurmaDisponibilidadeDia.",
    type: UniNodeTypeObjectPartial(TurmaDisponibilidadeDiaInputCreateView().type),
  });

export const TurmaDisponibilidadeDiaFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.TurmaDisponibilidadeDia.Views.FindAllResult,
    description: "Resultados da busca a TurmaDisponibilidadeDias.",
    targetsTo: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,
  });

export const TurmaDisponibilidadeDiaDeclarator = () =>
  CompileOperations({
    entity: Tokens.TurmaDisponibilidadeDia.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.TurmaDisponibilidadeDia.Operations.FindById,
          input: Tokens.TurmaDisponibilidadeDia.Views.FindOneInput,
          output: Tokens.TurmaDisponibilidadeDia.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.TurmaDisponibilidadeDia.Operations.DeleteById,
        },

        create: {
          name: Tokens.TurmaDisponibilidadeDia.Operations.Create,
          input: Tokens.TurmaDisponibilidadeDia.Views.InputCreate,
        },
        updateById: {
          name: Tokens.TurmaDisponibilidadeDia.Operations.UpdateById,
          input: Tokens.TurmaDisponibilidadeDia.Views.InputUpdate,
        },

        list: {
          name: Tokens.TurmaDisponibilidadeDia.Operations.List,
          view: Tokens.TurmaDisponibilidadeDia.Views.FindAllResult,
          filters: [
            ["intervaloDeTempo.id", ["$eq"]],
            ["turmaDisponibilidade.id", ["$eq"]],
          ],
        },
      },
    },
  });

export const TurmaDisponibilidadeDiaProvider = LazyModule({
  nodes: [
    TurmaDisponibilidadeDiaEntity,
    TurmaDisponibilidadeDiaView,
    TurmaDisponibilidadeDiaFindOneInputView,
    TurmaDisponibilidadeDiaFindOneResultView,
    TurmaDisponibilidadeDiaInputCreateView,
    TurmaDisponibilidadeDiaInputUpdateView,
    TurmaDisponibilidadeDiaFindAllResult,
    TurmaDisponibilidadeDiaDeclarator,
  ],
});
