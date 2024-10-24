using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Aula. */
@entity(Tokens.Aula)
model Aula {
  ...ObjectUuid;

  /** Data da aula. */
  data: date;

  /** Modalidade da aula. */
  modalidade: string | null;

  /** Intervalo de Tempo associado à aula. */
  intervaloDeTempo: IntervaloDeTempo;

  /** Diário associado à aula. */
  diario: Diario;

  /** Ambiente associado à aula. */
  ambiente: Ambiente | null;

  ...DatedObject;
}

/** Visão completa de uma Aula. */
@entity(Tokens.Aula_View)
model AulaView {
  ...OmitProperties<Aula, "intervaloDeTempo" | "diario" | "ambiente">;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
  diario: DiarioFindOneResultView;
  ambiente: AmbienteFindOneResultView | null;
}

/** Dados de entrada para encontrar uma Aula por ID. */
@entity(Tokens.Aula_FindOneInput_View)
model AulaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Aula>)
  id: Aula.id;
}

/** Visão FindOne de uma Aula. */
@entity(Tokens.Aula_FindOneResult_View)
@entityPartialOf(Tokens.Aula_View)
model AulaFindOneResultView {
  ...PickProperties<AulaView, "id">;
  ...PickProperties<AulaView, "data" | "modalidade">;
  ...PickProperties<AulaView, "intervaloDeTempo" | "diario" | "ambiente">;
  ...PickProperties<AulaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Aula. */
@entity(Tokens.Aula_InputCreate_View)
model AulaInputCreateView {
  data: date;
  modalidade: string | null;
  intervaloDeTempo: IntervaloDeTempoInputView;
  diario: DiarioFindOneInputView;
  ambiente: AmbienteFindOneInputView | null;
}

/** Dados de entrada para a atualização de uma Aula. */
@entity(Tokens.Aula_InputUpdate_View)
model AulaInputUpdateView is OptionalProperties<AulaInputCreateView>;

/** Resultados da busca a Aulas. */
@entity(Tokens.Aula_ListResult_View)
model AulaListResultView is PaginationResultView<AulaFindOneResultView>;

// =====================================
// Operações
// =====================================

model AulaFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Aula_Operations_FindOneById, AulaFindOneInputView.id, AulaFindOneResultView>;

model AulaDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Aula_Operations_DeleteOneById, AulaFindOneInputView.id>;

model AulaCreateOperation is GenericOperationCreate<Tokens.Aula_Operations_Create, AulaInputCreateView, AulaFindOneResultView>;

model AulaUpdateByIdOperation
  is GenericOperationUpdate<Tokens.Aula_Operations_UpdateOneById, AulaFindOneInputView.id, AulaInputUpdateView, AulaFindOneResultView>;

model AulaListOperation
  is GenericOperationList<
    Tokens.Aula_Operations_List,
    AulaListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterDiarioId")
      @extension("x-unispec-http-key", "filter.diario.id")
      `filter.diario.id`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterAmbienteId")
      @extension("x-unispec-http-key", "filter.ambiente.id")
      `filter.ambiente.id`?: Pagination.GenericFilter.eq[];
    }
  >;
