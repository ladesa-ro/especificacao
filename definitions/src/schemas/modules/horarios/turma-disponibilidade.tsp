using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** TurmaDisponibilidade. */
@entity(Tokens.TurmaDisponibilidade)
model TurmaDisponibilidade {
  ...ObjectUuid;

  /** Disponibilidade. */
  disponibilidade: Disponibilidade;

  /** Turma. */
  turma: Turma;

  ...DatedObject;
}

/** Visão completa de uma TurmaDisponibilidade. */
@entity(Tokens.TurmaDisponibilidade_View)
model TurmaDisponibilidadeView {
  ...OmitProperties<TurmaDisponibilidade, "disponibilidade" | "turma">;
  disponibilidade: DisponibilidadeFindOneResultView;
  turma: TurmaFindOneResultView;
}

/** Dados de entrada para encontrar uma TurmaDisponibilidade por ID. */
@entity(Tokens.TurmaDisponibilidade_FindOneInput_View)
model TurmaDisponibilidadeFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.TurmaDisponibilidade>)
  id: TurmaDisponibilidade.id;
}

/** Visão FindOne de uma TurmaDisponibilidade. */
@entity(Tokens.TurmaDisponibilidade_FindOneResult_View)
@entityPartialOf(Tokens.TurmaDisponibilidade)
model TurmaDisponibilidadeFindOneResultView {
  ...PickProperties<TurmaDisponibilidadeView, "id">;
  ...PickProperties<TurmaDisponibilidadeView, "disponibilidade" | "turma">;
  ...PickProperties<TurmaDisponibilidadeView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma TurmaDisponibilidade. */
@entity(Tokens.TurmaDisponibilidade_InputCreate_View)
model TurmaDisponibilidadeInputCreateView {
  disponibilidade: DisponibilidadeFindOneInputView;
  turma: TurmaFindOneInputView;
}

/** Dados de entrada para a atualização de uma TurmaDisponibilidade. */
@entity(Tokens.TurmaDisponibilidade_InputUpdate_View)
model TurmaDisponibilidadeInputUpdateView is OptionalProperties<TurmaDisponibilidadeInputCreateView>;

/** Resultados da busca a TurmaDisponibilidades. */
@entity(Tokens.TurmaDisponibilidade_ListResult_View)
model TurmaDisponibilidadeListResultView is PaginationResultView<TurmaDisponibilidadeFindOneResultView>;

// =====================================
// Operações
// =====================================

model TurmaDisponibilidadeFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.TurmaDisponibilidade_Operations_FindOneById,
    TurmaDisponibilidadeFindOneInputView.id,
    TurmaDisponibilidadeFindOneResultView
  >;

model TurmaDisponibilidadeDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.TurmaDisponibilidade_Operations_DeleteOneById, TurmaDisponibilidadeFindOneInputView.id>;

model TurmaDisponibilidadeCreateOperation
  is GenericOperationCreate<
    Tokens.TurmaDisponibilidade_Operations_Create,
    TurmaDisponibilidadeInputCreateView,
    TurmaDisponibilidadeFindOneResultView
  >;

model TurmaDisponibilidadeUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.TurmaDisponibilidade_Operations_UpdateOneById,
    TurmaDisponibilidadeFindOneInputView.id,
    TurmaDisponibilidadeInputUpdateView,
    TurmaDisponibilidadeFindOneResultView
  >;

model TurmaDisponibilidadeListOperation
  is GenericOperationList<
    Tokens.TurmaDisponibilidade_Operations_List,
    TurmaDisponibilidadeListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterTurmaId")
      @extension("x-unispec-http-key", "filter.turma.id")
      filter_turma_id: Pagination.GenericFilter.eq[] | null;
    }
  >;
