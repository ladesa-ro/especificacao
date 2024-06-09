import { BuildModule, Build as U } from "@unispec/ast-builder";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

export const IntervaloDeTempoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "IntervaloDeTempo",

  properties: {
    periodoInicio: U.String({
      format: "time",
      description: "Horário que o intervalo de tempo inicia.",
    }),
    periodoFim: U.String({
      format: "time",
      description: "Horário que o intervalo de tempo termina.",
    }),
  },
});

export const IntervaloDeTempoView = U.View({
  name: Tokens.IntervaloDeTempo.Entity,
  description: "Visão completa de um IntervaloDeTempo.",

  type: U.ObjectTransformer.From(IntervaloDeTempoEntity).Node(),
});

export const IntervaloDeTempoFindOneResultView = U.View({
  name: Tokens.IntervaloDeTempo.Views.FindOneResult,

  partialOf: Tokens.IntervaloDeTempo.Entity,
  description: "Visão FindOne de um IntervaloDeTempo.",

  type: U.ObjectTransformer.From(IntervaloDeTempoView.type)
    .Pick({
      id: true,
      //
      periodoInicio: true,
      periodoFim: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const IntervaloDeTempoInputView = U.View({
  name: Tokens.IntervaloDeTempo.Views.Input,
  description: "Dados de entrada para um IntervaloDeTempo.",

  type: U.ObjectTransformer.From(IntervaloDeTempoView.type)
    .Pick({
      periodoInicio: true,
      periodoFim: true,
    })
    .Node(),
});

// =======================================

export const IntervaloDeTempoDeclarator = CompileOperations({
  entity: Tokens.IntervaloDeTempo.Entity,
});

// =======================================

export const IntervaloDeTempoProvider = BuildModule({
  nodes: [
    IntervaloDeTempoEntity,
    IntervaloDeTempoView,
    IntervaloDeTempoFindOneResultView,
    IntervaloDeTempoInputView,
    IntervaloDeTempoDeclarator,
  ],
});
