using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** ProfessorDisponibilidade. */
@entity(Tokens.ProfessorDisponibilidade)
model ProfessorDisponibilidade {
  ...ObjectUuid;

  /** Disponibilidade. */
  disponibilidade: Disponibilidade;

  /** Professor. */
  perfil: Perfil;

  ...DatedObject;
}

/** Visão completa de uma ProfessorDisponibilidade. */
@entity(Tokens.ProfessorDisponibilidade_View)
model ProfessorDisponibilidadeView {
  ...OmitProperties<ProfessorDisponibilidade, "disponibilidade" | "perfil">;
  disponibilidade: DisponibilidadeFindOneResultView;
  perfil: PerfilFindOneResultView;
}

/** Dados de entrada para encontrar uma ProfessorDisponibilidade por ID. */
@entity(Tokens.ProfessorDisponibilidade_FindOneInput_View)
model ProfessorDisponibilidadeFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.ProfessorDisponibilidade>)
  id: ProfessorDisponibilidade.id;
}

/** Visão FindOne de uma ProfessorDisponibilidade. */
@entity(Tokens.ProfessorDisponibilidade_FindOneResult_View)
@entityPartialOf(Tokens.ProfessorDisponibilidade)
model ProfessorDisponibilidadeFindOneResultView {
  ...PickProperties<ProfessorDisponibilidadeView, "id">;
  ...PickProperties<ProfessorDisponibilidadeView, "disponibilidade" | "perfil">;
  ...PickProperties<ProfessorDisponibilidadeView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma ProfessorDisponibilidade. */
@entity(Tokens.ProfessorDisponibilidade_InputCreate_View)
model ProfessorDisponibilidadeInputCreateView {
  disponibilidade: DisponibilidadeFindOneInputView;
  perfil: PerfilFindOneInputView;
}

/** Dados de entrada para a atualização de uma ProfessorDisponibilidade. */
@entity(Tokens.ProfessorDisponibilidade_InputUpdate_View)
model ProfessorDisponibilidadeInputUpdateView is OptionalProperties<ProfessorDisponibilidadeInputCreateView>;

/** Resultados da busca a ProfessorDisponibilidades. */
@entity(Tokens.ProfessorDisponibilidade_ListResult_View)
model ProfessorDisponibilidadeListResultView is PaginationResultView<ProfessorDisponibilidadeFindOneResultView>;

// =====================================
// Operações
// =====================================

model ProfessorDisponibilidadeFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.ProfessorDisponibilidade_Operations_FindOneById,
    ProfessorDisponibilidadeFindOneInputView.id,
    ProfessorDisponibilidadeFindOneResultView
  >;

model ProfessorDisponibilidadeDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.ProfessorDisponibilidade_Operations_DeleteOneById, ProfessorDisponibilidadeFindOneInputView.id>;

model ProfessorDisponibilidadeCreateOperation
  is GenericOperationCreate<
    Tokens.ProfessorDisponibilidade_Operations_Create,
    ProfessorDisponibilidadeInputCreateView,
    ProfessorDisponibilidadeFindOneResultView
  >;

model ProfessorDisponibilidadeUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.ProfessorDisponibilidade_Operations_UpdateOneById,
    ProfessorDisponibilidadeFindOneInputView.id,
    ProfessorDisponibilidadeInputUpdateView,
    ProfessorDisponibilidadeFindOneResultView
  >;

model ProfessorDisponibilidadeListOperation
  is GenericOperationList<
    Tokens.ProfessorDisponibilidade_Operations_List,
    ProfessorDisponibilidadeListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterPerfilId")
      @extension("x-unispec-http-key", "filter.perfil.id")
      filter_professor_id: Pagination.GenericFilter.eq[] | null;
    }
  >;
