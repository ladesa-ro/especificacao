import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { CommonEntity } from "../../-shared/common/CommonEntity";
import { CompileOperations } from "../../-shared/common/CompileOperations";
import { Tokens } from "../../tokens";
import { PaginatedResultView } from "../../-shared";

export const DisponibilidadeProfessorDiaEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "DisponibilidadeProfessorDia",

  properties: {
    diaSemanaIso: U.Integer({
      description: "Dia da semana.",
    }),
    //
    intervaloDeTempo: U.Reference({
      description: "Intervalo de tempo.",
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    disponibilidade: U.Reference({
      description: "Disponibilidade do professor.",
      targetsTo: Tokens.DisponibilidadeProfessor.Entity,
    }),
  },
});

export const DisponibilidadeProfessorDiaView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Entity,

  description: "Disponibilidade dia do professor.",

  type: U.ObjectTransformer.From(DisponibilidadeProfessorDiaEntity)
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        },

        disponibilidade: {
          targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
        },
      },
    })
    .Node(),
});
export const DisponibilidadeProfessorDiaFindOneInputView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Disponibilidade Professor Dia por ID.",
  type: U.ObjectTransformer.From(DisponibilidadeProfessorDiaView.type).Pick({ id: true }).Node(),
});

export const DisponibilidadeProfessorDiaFindOneResultView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,

  partialOf: Tokens.DisponibilidadeProfessorDia.Entity,
  description: "Visão FindOne de uma Disponibilidade Professor Dia.",

  type: U.ObjectTransformer.From(DisponibilidadeProfessorDiaView.type)
    .Pick({
      id: true,
      //
      diaSemanaIso: true,
      //
      intervaloDeTempo: true,
      disponibilidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const DisponibilidadeProfessorDiaInputCreateView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.InputCreate,
  description: "Dados de entrada para a criação de uma Disponibilidade Professor Dia.",
  type: U.ObjectTransformer.From(DisponibilidadeProfessorDiaView.type)
    .Pick({
      diaSemanaIso: true,
    })
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.Input,
        },
        disponibilidade: {
          targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const DisponibilidadeProfessorDiaInputUpdateView = U.View({
  name: Tokens.DisponibilidadeProfessorDia.Views.InputUpdate,
  description: "Dados de entrada para a atualização de uma Disponibilidade Professor Dia.",
  type: UniNodeTypeObjectPartial(DisponibilidadeProfessorDiaInputCreateView.type),
});

export const DisponibilidadeProfessorDiaFindAllResult = PaginatedResultView({
  name: Tokens.DisponibilidadeProfessorDia.Views.FindAllResult,
  description: "Resultados da busca a Disponibilidade Professor Dia.",
  targetsTo: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,
});

export const DisponibilidadeProfessorDiaDeclarator = CompileOperations({
  entity: Tokens.DisponibilidadeProfessorDia.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.DisponibilidadeProfessorDia.Operations.FindById,
        input: Tokens.DisponibilidadeProfessorDia.Views.FindOneInput,
        output: Tokens.DisponibilidadeProfessorDia.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.DisponibilidadeProfessorDia.Operations.DeleteById,
      },

      create: {
        name: Tokens.DisponibilidadeProfessorDia.Operations.Create,
        input: Tokens.DisponibilidadeProfessorDia.Views.InputCreate,
      },
      updateById: {
        name: Tokens.DisponibilidadeProfessorDia.Operations.UpdateById,
        input: Tokens.DisponibilidadeProfessorDia.Views.InputUpdate,
      },

      list: {
        name: Tokens.DisponibilidadeProfessorDia.Operations.List,
        view: Tokens.DisponibilidadeProfessorDia.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const DisponibilidadeProfessorDiaProvider = BuildModule({
  nodes: [
    DisponibilidadeProfessorDiaEntity,
    DisponibilidadeProfessorDiaView,
    DisponibilidadeProfessorDiaFindOneInputView,
    DisponibilidadeProfessorDiaFindOneResultView,
    DisponibilidadeProfessorDiaInputCreateView,
    DisponibilidadeProfessorDiaInputUpdateView,
    DisponibilidadeProfessorDiaFindAllResult,
    DisponibilidadeProfessorDiaDeclarator,
  ],
});
