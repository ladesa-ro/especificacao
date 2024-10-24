using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Turma. */
@entity(Tokens.Turma)
model Turma {
  ...ObjectUuid;

  /** Período da Turma. */
  @minLength(1)
  periodo: string;

  /** Curso da Turma. */
  curso: Curso;

  /** Ambiente padrão da sala de aula. */
  ambientePadraoAula: Ambiente | null;

  /** Imagem de capa da Turma. */
  imagemCapa: Imagem | null;

  ...DatedObject;
}

/** Visão completa de uma Turma. */
@entity(Tokens.Turma_View)
model TurmaView {
  ...OmitProperties<Turma, "curso" | "ambientePadraoAula" | "imagemCapa">;
  curso: CursoFindOneResultView;
  ambientePadraoAula: AmbienteFindOneResultView | null;
  imagemCapa: ImagemFindOneResultView | null;
}

/** Dados de entrada para encontrar uma Turma por ID. */
@entity(Tokens.Turma_FindOneInput_View)
model TurmaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Turma>)
  id: Turma.id;
}

/** Visão FindOne de uma Turma. */
@entity(Tokens.Turma_FindOneResult_View)
@entityPartialOf(Tokens.Turma_View)
model TurmaFindOneResultView {
  //
  ...PickProperties<TurmaView, "id">;

  ...PickProperties<TurmaView, "periodo">;

  //
  ...PickProperties<TurmaView, "curso" | "ambientePadraoAula" | "imagemCapa">;

  //
  ...PickProperties<TurmaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Turma. */
@entity(Tokens.Turma_InputCreate_View)
model TurmaInputCreateView {
  ...PickProperties<TurmaView, "periodo">;
  curso: CursoFindOneInputView;
  ambientePadraoAula: AmbienteFindOneInputView;
}

/** Dados de entrada para a atualização de uma Turma. */
@entity(Tokens.Turma_InputUpdate_View)
model TurmaInputUpdateView is OptionalProperties<TurmaInputCreateView>;

/** Resultados da busca a Turmas. */
@entity(Tokens.Turma_ListResult_View)
model TurmaListResultView is PaginationResultView<TurmaFindOneResultView>;

// =====================================
// Operações
// =====================================

model TurmaFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Turma_Operations_FindOneById, TurmaFindOneInputView.id, TurmaFindOneResultView>;

model TurmaDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Turma_Operations_DeleteOneById, TurmaFindOneInputView.id>;

model TurmaCreateOperation is GenericOperationCreate<Tokens.Turma_Operations_Create, TurmaInputCreateView, TurmaFindOneResultView>;

model TurmaUpdateByIdOperation
  is GenericOperationUpdate<Tokens.Turma_Operations_UpdateOneById, TurmaFindOneInputView.id, TurmaInputUpdateView, TurmaFindOneResultView>;

model TurmaListOperation
  is GenericOperationList<
    Tokens.Turma_Operations_List,
    TurmaListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterAmbientePadraoAulaNome")
      @extension("x-unispec-http-key", "filter.ambientePadraoAula.nome")
      `filter.ambientePadraoAula.nome`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterAmbientePadraoAulaCodigo")
      @extension("x-unispec-http-key", "filter.ambientePadraoAula.codigo")
      `filter.ambientePadraoAula.codigo`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterAmbientePadraoAulaCapacidade")
      @extension("x-unispec-http-key", "filter.ambientePadraoAula.capacidade")
      `filter.ambientePadraoAula.capacidade`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterAmbientePadraoAulaTipo")
      @extension("x-unispec-http-key", "filter.ambientePadraoAula.tipo")
      `filter.ambientePadraoAula.tipo`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterCursoNome")
      @extension("x-unispec-http-key", "filter.curso.nome")
      `filter.curso.nome`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterCursoNomeAbreviado")
      @extension("x-unispec-http-key", "filter.curso.nomeAbreviado")
      `filter.curso.nomeAbreviado`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterCursoCampusId")
      @extension("x-unispec-http-key", "filter.curso.campus.id")
      `filter.curso.campus.id`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterCursoModalidadeId")
      @extension("x-unispec-http-key", "filter.curso.modalidade.id")
      `filter.curso.modalidade.id`?: Pagination.GenericFilter.eq[];
    }
  >;

// =====================================
// Operações de Imagem de Capa
// =====================================

model TurmaGetImagemCapa is ImagemGenericGetImagemCapaOperation<Tokens.Turma_Operations_GetImagemCapa, TurmaFindOneInputView.id>;

model TurmaSetImagemCapa is ImagemGenericSetImagemCapaOperation<Tokens.Turma_Operations_SetImagemCapa, TurmaFindOneInputView.id>;
