using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** DiarioPreferenciaAgrupamento. */
@entity(Tokens.DiarioPreferenciaAgrupamento)
model DiarioPreferenciaAgrupamento {
  ...ObjectUuid;

  /** Início da vigência da preferência de agrupamento. */
  dataInicio: date;

  /** Fim da vigência da preferência de agrupamento. */
  dataFim: date | null;

  /** Dia da semana. */
  diaSemanaIso: uint8;

  /** Quantidade de aulas seguidas. */
  aulasSeguidas: uint8;

  /** Intervalo de tempo. */
  intervaloDeTempo: IntervaloDeTempo;

  /** Diário vinculado. */
  diario: Diario;

  ...DatedObject;
}

/** Visão completa de um DiarioPreferenciaAgrupamento. */
@entity(Tokens.DiarioPreferenciaAgrupamento_View)
model DiarioPreferenciaAgrupamentoView {
  ...OmitProperties<DiarioPreferenciaAgrupamento, "intervaloDeTempo" | "diario">;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
  diario: DiarioFindOneResultView;
}

/** Dados de entrada para encontrar um DiarioPreferenciaAgrupamento por ID. */
@entity(Tokens.DiarioPreferenciaAgrupamento_FindOneInput_View)
model DiarioPreferenciaAgrupamentoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.DiarioPreferenciaAgrupamento>)
  id: DiarioPreferenciaAgrupamento.id;
}

/** Visão FindOne de um DiarioPreferenciaAgrupamento. */
@entity(Tokens.DiarioPreferenciaAgrupamento_FindOneResult_View)
@entityPartialOf(Tokens.DiarioPreferenciaAgrupamento)
model DiarioPreferenciaAgrupamentoFindOneResultView {
  ...PickProperties<DiarioPreferenciaAgrupamentoView, "id">;
  ...PickProperties<DiarioPreferenciaAgrupamentoView, "diaSemanaIso" | "aulasSeguidas" | "dataInicio" | "dataFim">;
  ...PickProperties<DiarioPreferenciaAgrupamentoView, "intervaloDeTempo" | "diario">;
  ...PickProperties<DiarioPreferenciaAgrupamentoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um DiarioPreferenciaAgrupamento. */
@entity(Tokens.DiarioPreferenciaAgrupamento_InputCreate_View)
model DiarioPreferenciaAgrupamentoInputCreateView {
  diaSemanaIso: DiarioPreferenciaAgrupamento.diaSemanaIso;
  aulasSeguidas: DiarioPreferenciaAgrupamento.aulasSeguidas;
  dataInicio: DiarioPreferenciaAgrupamento.dataInicio;
  dataFim: DiarioPreferenciaAgrupamento.dataFim;

  //
  intervaloDeTempo: IntervaloDeTempoInputView;

  //
  diario: DiarioFindOneInputView;
}

/** Dados de entrada para a atualização de um DiarioPreferenciaAgrupamento. */
@entity(Tokens.DiarioPreferenciaAgrupamento_InputUpdate_View)
model DiarioPreferenciaAgrupamentoInputUpdateView is OptionalProperties<DiarioPreferenciaAgrupamentoInputCreateView>;

/** Resultados da busca de DiarioPreferenciaAgrupamentos. */
@entity(Tokens.DiarioPreferenciaAgrupamento_ListResult_View)
model DiarioPreferenciaAgrupamentoListResultView is PaginationResultView<DiarioPreferenciaAgrupamentoFindOneResultView>;

// =====================================
// Operações
// =====================================

model DiarioPreferenciaAgrupamentoFindByIdOperation
  is GenericOperationFindOneById<
    Tokens.DiarioPreferenciaAgrupamento_Operations_FindOneById,
    DiarioPreferenciaAgrupamentoFindOneInputView.id,
    DiarioPreferenciaAgrupamentoFindOneResultView
  >;

model DiarioPreferenciaAgrupamentoDeleteByIdOperation
  is GenericOperationDeleteOneById<
    Tokens.DiarioPreferenciaAgrupamento_Operations_DeleteOneById,
    DiarioPreferenciaAgrupamentoFindOneInputView.id
  >;

model DiarioPreferenciaAgrupamentoCreateOperation
  is GenericOperationCreate<
    Tokens.DiarioPreferenciaAgrupamento_Operations_Create,
    DiarioPreferenciaAgrupamentoInputCreateView,
    DiarioPreferenciaAgrupamentoFindOneResultView
  >;

model DiarioPreferenciaAgrupamentoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.DiarioPreferenciaAgrupamento_Operations_UpdateOneById,
    DiarioPreferenciaAgrupamentoFindOneInputView.id,
    DiarioPreferenciaAgrupamentoInputUpdateView,
    DiarioPreferenciaAgrupamentoFindOneResultView
  >;

model DiarioPreferenciaAgrupamentoListOperation
  is GenericOperationList<
    Tokens.DiarioPreferenciaAgrupamento_Operations_List,
    DiarioPreferenciaAgrupamentoListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterDiarioId")
      @extension("x-unispec-http-key", "filter.diario.id")
      filter_diario_id: Pagination.GenericFilter.eq[] | null;
    }
  >;
