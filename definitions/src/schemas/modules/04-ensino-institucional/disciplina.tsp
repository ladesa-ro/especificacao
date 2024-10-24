using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Disciplina. */
@entity(Tokens.Disciplina)
model Disciplina {
  ...ObjectUuid;

  /** Nome da disciplina. */
  @minLength(1)
  nome: string;

  /** Nome abreviado da disciplina. */
  @minLength(1)
  nomeAbreviado: string;

  /** Carga horária da disciplina. */
  @minValue(1)
  cargaHoraria: uint16;

  /** Imagem de capa da disciplina. */
  imagemCapa: Imagem | null;

  ...DatedObject;
}

/** Visão completa de uma Disciplina. */
@entity(Tokens.Disciplina_View)
model DisciplinaView {
  ...OmitProperties<Disciplina, "imagemCapa">;
  imagemCapa: ImagemFindOneResultView | null;
}

/** Dados de entrada para encontrar uma Disciplina por ID. */
@entity(Tokens.Disciplina_FindOneInput_View)
model DisciplinaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Disciplina>)
  id: Disciplina.id;
}

/** Visão FindOne de uma Disciplina. */
@entity(Tokens.Disciplina_FindOneResult_View)
@entityPartialOf(Tokens.Disciplina_View)
model DisciplinaFindOneResultView {
  //
  ...PickProperties<DisciplinaView, "id">;

  ...PickProperties<DisciplinaView, "nome">;
  ...PickProperties<DisciplinaView, "nomeAbreviado">;
  ...PickProperties<DisciplinaView, "cargaHoraria">;

  //
  ...PickProperties<DisciplinaView, "imagemCapa">;

  //
  ...PickProperties<DisciplinaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Disciplina. */
@entity(Tokens.Disciplina_InputCreate_View)
model DisciplinaInputCreateView {
  ...PickProperties<DisciplinaView, "nome">;
  ...PickProperties<DisciplinaView, "nomeAbreviado">;
  ...PickProperties<DisciplinaView, "cargaHoraria">;
}

/** Dados de entrada para a atualização de uma Disciplina. */
@entity(Tokens.Disciplina_InputUpdate_View)
model DisciplinaInputUpdateView is OptionalProperties<DisciplinaInputCreateView>;

/** Resultados da busca a Disciplinas. */
@entity(Tokens.Disciplina_ListResult_View)
model DisciplinaListResultView is PaginationResultView<DisciplinaFindOneResultView>;

// =====================================
// Operações
// =====================================

model DisciplinaFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Disciplina_Operations_FindOneById, DisciplinaFindOneInputView.id, DisciplinaFindOneResultView>;

model DisciplinaDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.Disciplina_Operations_DeleteOneById, DisciplinaFindOneInputView.id>;

model DisciplinaCreateOperation
  is GenericOperationCreate<Tokens.Disciplina_Operations_Create, DisciplinaInputCreateView, DisciplinaFindOneResultView>;

model DisciplinaUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Disciplina_Operations_UpdateOneById,
    DisciplinaFindOneInputView.id,
    DisciplinaInputUpdateView,
    DisciplinaFindOneResultView
  >;

model DisciplinaListOperation is GenericOperationList<Tokens.Disciplina_Operations_List, DisciplinaListResultView, {}>;

// =====================================
// Operações de Imagem de Capa
// =====================================

model DisciplinaGetImagemCapa
  is ImagemGenericGetImagemCapaOperation<Tokens.Disciplina_Operations_GetImagemCapa, DisciplinaFindOneInputView.id>;

model DisciplinaSetImagemCapa
  is ImagemGenericSetImagemCapaOperation<Tokens.Disciplina_Operations_SetImagemCapa, DisciplinaFindOneInputView.id>;
