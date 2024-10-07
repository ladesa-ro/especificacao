using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** GradeHorarioOfertaFormacaoIntervaloDeTempo. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo)
model GradeHorarioOfertaFormacaoIntervaloDeTempo {
  ...ObjectUuid;

  /** Grade de horário da oferta de formação. */
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacao;

  /** Intervalo de tempo. */
  intervaloDeTempo: IntervaloDeTempo;

  ...DatedObject;
}

/** Visão completa de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoView {
  ...OmitProperties<GradeHorarioOfertaFormacaoIntervaloDeTempo, "gradeHorarioOfertaFormacao" | "intervaloDeTempo">;
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoFindOneResultView;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
}

/** Dados de entrada para encontrar uma oferta de formação por ID. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_FindOneInput_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo>)
  id: GradeHorarioOfertaFormacaoIntervaloDeTempo.id;
}

/** Visão FindOne de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_FindOneResult_View)
@entityPartialOf(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView {
  ...PickProperties<GradeHorarioOfertaFormacaoIntervaloDeTempoView, "id">;
  ...PickProperties<GradeHorarioOfertaFormacaoIntervaloDeTempoView, "gradeHorarioOfertaFormacao" | "intervaloDeTempo">;
  ...PickProperties<GradeHorarioOfertaFormacaoIntervaloDeTempoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_InputCreate_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView {
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoFindOneInputView;
  intervaloDeTempo: IntervaloDeTempoInputView;
}

/** Dados de entrada para a atualização de uma oferta de formação. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_InputUpdate_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView
  is OptionalProperties<GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView>;

/** Resultados da busca a GradeHorarioOfertaFormacaoIntervaloDeTempos. */
@entity(Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_ListResult_View)
model GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView
  is PaginationResultView<GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView>;

// =====================================
// Operações
// =====================================

model GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_FindOneById,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView.id,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperation
  is GenericOperationDeleteOneById<
    Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_DeleteOneById,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView.id
  >;

model GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperation
  is GenericOperationCreate<
    Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_Create,
    GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_UpdateOneById,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView.id,
    GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView,
    GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView
  >;

model GradeHorarioOfertaFormacaoIntervaloDeTempoListOperation
  is GenericOperationList<
    Tokens.GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_List,
    GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView,
    {}
  >;
