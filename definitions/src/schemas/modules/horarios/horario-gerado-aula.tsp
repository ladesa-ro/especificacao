using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** HorarioGeradoAula. */
@entity(Tokens.HorarioGeradoAula)
model HorarioGeradoAula {
  ...ObjectUuid;

  /** Data da aula gerada. */
  data: date;

  /** Intervalo de tempo. */
  intervaloDeTempo: IntervaloDeTempo;

  /** Vínculo de diário e professor. */
  diarioProfessor: DiarioProfessor;

  /** Horário ao qual a aula pertence. */
  horarioGerado: HorarioGerado;
}

/** Visão completa de um HorarioGeradoAula. */
@entity(Tokens.HorarioGeradoAula_View)
model HorarioGeradoAulaView {
  ...OmitProperties<HorarioGeradoAula, "intervaloDeTempo" | "diarioProfessor" | "horarioGerado">;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
  diarioProfessor: DiarioProfessorFindOneResultView;
  horarioGerado: HorarioGeradoFindOneResultView;
}

/** Dados de entrada para encontrar um HorarioGeradoAula por ID. */
@entity(Tokens.HorarioGeradoAula_FindOneInput_View)
model HorarioGeradoAulaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.HorarioGeradoAula>)
  id: HorarioGeradoAula.id;
}

/** Visão FindOne de um HorarioGeradoAula. */
@entity(Tokens.HorarioGeradoAula_FindOneResult_View)
@entityPartialOf(Tokens.HorarioGeradoAula)
model HorarioGeradoAulaFindOneResultView {
  ...PickProperties<HorarioGeradoAulaView, "id" | "data">;
  ...PickProperties<HorarioGeradoAulaView, "intervaloDeTempo" | "diarioProfessor" | "horarioGerado">;
  ...PickProperties<HorarioGeradoAulaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um HorarioGeradoAula. */
@entity(Tokens.HorarioGeradoAula_InputCreate_View)
model HorarioGeradoAulaInputCreateView {
  data: HorarioGeradoAula.data;
  intervaloDeTempo: IntervaloDeTempoInputView;
  diarioProfessor: DiarioProfessorFindOneInputView;
  horarioGerado: HorarioGeradoFindOneInputView;
}

/** Dados de entrada para a atualização de um HorarioGeradoAula. */
@entity(Tokens.HorarioGeradoAula_InputUpdate_View)
model HorarioGeradoAulaInputUpdateView is OptionalProperties<HorarioGeradoAulaInputCreateView>;

/** Resultados da busca de HorarioGeradoAulas. */
@entity(Tokens.HorarioGeradoAula_ListResult_View)
model HorarioGeradoAulaListResultView is PaginationResultView<HorarioGeradoAulaFindOneResultView>;

// =====================================
// Operações
// =====================================

model HorarioGeradoAulaFindByIdOperation
  is GenericOperationFindOneById<
    Tokens.HorarioGeradoAula_Operations_FindOneById,
    HorarioGeradoAulaFindOneInputView.id,
    HorarioGeradoAulaFindOneResultView
  >;

model HorarioGeradoAulaDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.HorarioGeradoAula_Operations_DeleteOneById, HorarioGeradoAulaFindOneInputView.id>;

model HorarioGeradoAulaCreateOperation
  is GenericOperationCreate<
    Tokens.HorarioGeradoAula_Operations_Create,
    HorarioGeradoAulaInputCreateView,
    HorarioGeradoAulaFindOneResultView
  >;

model HorarioGeradoAulaUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.HorarioGeradoAula_Operations_UpdateOneById,
    HorarioGeradoAulaFindOneInputView.id,
    HorarioGeradoAulaInputUpdateView,
    HorarioGeradoAulaFindOneResultView
  >;

model HorarioGeradoAulaListOperation
  is GenericOperationList<
    Tokens.HorarioGeradoAula_Operations_List,
    HorarioGeradoAulaListResultView,
    {
      // filtros
      // Adicione aqui os filtros necessários, se houver
    }
  >;
