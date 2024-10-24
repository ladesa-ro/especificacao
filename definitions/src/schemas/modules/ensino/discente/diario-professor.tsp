using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** DiarioProfessor. */
@entity(Tokens.DiarioProfessor)
model DiarioProfessor {
  ...ObjectUuid;

  /** Situação do vínculo. */
  situacao: boolean;

  /** Perfil do usuário ao campus. */
  perfil: Perfil;

  /** Diário vinculado. */
  diario: Diario;

  ...DatedObject;
}

/** Visão completa de um DiarioProfessor. */
@entity(Tokens.DiarioProfessor_View)
model DiarioProfessorView {
  ...OmitProperties<DiarioProfessor, "perfil" | "diario">;
  perfil: PerfilFindOneResultView;
  diario: DiarioFindOneResultView;
}

/** Dados de entrada para encontrar um DiarioProfessor por ID. */
@entity(Tokens.DiarioProfessor_FindOneInput_View)
model DiarioProfessorFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.DiarioProfessor>)
  id: DiarioProfessor.id;
}

/** Visão FindOne de um DiarioProfessor. */
@entity(Tokens.DiarioProfessor_FindOneResult_View)
@entityPartialOf(Tokens.DiarioProfessor_View)
model DiarioProfessorFindOneResultView {
  ...PickProperties<DiarioProfessorView, "id">;
  ...PickProperties<DiarioProfessorView, "situacao">;
  ...PickProperties<DiarioProfessorView, "perfil" | "diario">;
  ...PickProperties<DiarioProfessorView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um DiarioProfessor. */
@entity(Tokens.DiarioProfessor_InputCreate_View)
model DiarioProfessorInputCreateView {
  situacao: boolean;
  perfil: PerfilFindOneInputView;
  diario: DiarioFindOneInputView;
}

/** Dados de entrada para a atualização de um DiarioProfessor. */
@entity(Tokens.DiarioProfessor_InputUpdate_View)
model DiarioProfessorInputUpdateView is OptionalProperties<DiarioProfessorInputCreateView>;

/** Resultados da busca a DiarioProfessor. */
@entity(Tokens.DiarioProfessor_ListResult_View)
model DiarioProfessorListResultView is PaginationResultView<DiarioProfessorFindOneResultView>;

// =====================================
// Operações
// =====================================

model DiarioProfessorFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.DiarioProfessor_Operations_FindOneById,
    DiarioProfessorFindOneInputView.id,
    DiarioProfessorFindOneResultView
  >;

model DiarioProfessorDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.DiarioProfessor_Operations_DeleteOneById, DiarioProfessorFindOneInputView.id>;

model DiarioProfessorCreateOperation
  is GenericOperationCreate<Tokens.DiarioProfessor_Operations_Create, DiarioProfessorInputCreateView, DiarioProfessorFindOneResultView>;

model DiarioProfessorUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.DiarioProfessor_Operations_UpdateOneById,
    DiarioProfessorFindOneInputView.id,
    DiarioProfessorInputUpdateView,
    DiarioProfessorFindOneResultView
  >;

model DiarioProfessorListOperation
  is GenericOperationList<
    Tokens.DiarioProfessor_Operations_List,
    DiarioProfessorListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterPerfilId")
      @extension("x-unispec-http-key", "filter.perfil.id")
      `filter.perfil.id`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterDiarioId")
      @extension("x-unispec-http-key", "filter.diario.id")
      `filter.diario.id`?: Pagination.GenericFilter.eq[];
    }
  >;
