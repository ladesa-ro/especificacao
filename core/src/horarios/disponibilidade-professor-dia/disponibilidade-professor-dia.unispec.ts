import { Build as U } from "@unispec/ast-builder";
import { CommonEntity } from "../../-shared/common-entity";
import { Tokens } from "../../tokens";

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
