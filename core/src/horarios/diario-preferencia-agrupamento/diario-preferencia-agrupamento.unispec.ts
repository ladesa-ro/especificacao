import { U } from "@unispec/core";
import { Tokens } from "../../tokens";

export const DiarioPreferenciaAgrupamentoEntity = U.ObjectEntity({
  id: "uuid",
  dated: true,

  description: "DiarioPreferenciaAgrupamento",

  properties: {
    diaSemanaIso: U.Integer({
      description: "Dia da semana.",
    }),
    aulasSeguidas: U.Integer({
      description: "Quantidade de aulas seguidas.",
    }),
    dataInicio: U.String({
      format: "date",
      description: "Início da vigência da preferência de agendamento.",
    }),
    dataFim: U.String({
      format: "date",
      nullable: true,
      description: "Fim da vigência da preferência de agendamento.",
    }),
    //
    intervaloDeTempo: U.Reference({
      description: "Intervalo de tempo.",
      targetsTo: Tokens.IntervaloDeTempo.Entity,
      nullable: true,
    }),
    diario: U.Reference({
      description: "Diário vinculado.",
      targetsTo: Tokens.Diario.Entity,
    }),
  },
});

export const DiarioPreferenciaAgrupamentoView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Entity,

  description: "Diário preferência agrupamento.",

  type: U.ObjectTransformer.From(DiarioPreferenciaAgrupamentoEntity)
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        },

        diario: {
          targetsTo: Tokens.Diario.Views.FindOneResult,
        },
      },
    })
    .Node(),
});
