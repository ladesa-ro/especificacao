using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

/** Intervalo de Tempo. */
@entity(Tokens.IntervaloDeTempo)
model IntervaloDeTempo {
  ...ObjectUuid;

  /** Horário que o intervalo de tempo inicia. */
  periodoInicio: time;

  /** Horário que o intervalo de tempo termina. */
  periodoFim: time;

  ...DatedObject;
}

/** Visão completa de um Intervalo de Tempo. */
@entity(Tokens.IntervaloDeTempo_View)
model IntervaloDeTempoView {
  ...IntervaloDeTempo;
}

/** Visão FindOne de um Intervalo de Tempo. */
@entity(Tokens.IntervaloDeTempo_FindOneResult_View)
@entityPartialOf(Tokens.IntervaloDeTempo_View)
model IntervaloDeTempoFindOneResultView {
  ...PickProperties<IntervaloDeTempoView, "id">;
  ...PickProperties<IntervaloDeTempoView, "periodoInicio">;
  ...PickProperties<IntervaloDeTempoView, "periodoFim">;
  ...PickProperties<IntervaloDeTempoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para um Intervalo de Tempo. */
@entity(Tokens.IntervaloDeTempo_Input_View)
model IntervaloDeTempoInputView {
  ...PickProperties<IntervaloDeTempoView, "periodoInicio">;
  ...PickProperties<IntervaloDeTempoView, "periodoFim">;
}
