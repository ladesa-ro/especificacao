using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Curso. */
@entity(Tokens.Curso)
model Curso {
  ...ObjectUuid;

  /** Nome do curso. */
  @minLength(1)
  nome: string;

  /** Nome abreviado do curso. */
  @minLength(1)
  nomeAbreviado: string;

  /** Campus que o curso pertence. */
  campus: Campus;

  /** Oferta de formação do curso. */
  ofertaFormacao: OfertaFormacao;

  /** Imagem de capa do curso. */
  imagemCapa: Imagem | null;

  ...DatedObject;
}

/** Visão completa de um Curso. */
@entity(Tokens.Curso_View)
model CursoView {
  ...OmitProperties<Curso, "campus" | "ofertaFormacao" | "imagemCapa">;
  campus: CampusFindOneResultView;
  ofertaFormacao: OfertaFormacaoFindOneResultView;
  imagemCapa: ImagemFindOneResultView | null;
}

/** Dados de entrada para encontrar um Curso por ID. */
@entity(Tokens.Curso_FindOneInput_View)
model CursoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Curso>)
  id: Curso.id;
}

/** Visão FindOne de um Curso. */
@entity(Tokens.Curso_FindOneResult_View)
@entityPartialOf(Tokens.Curso_View)
model CursoFindOneResultView {
  //
  ...PickProperties<CursoView, "id">;

  ...PickProperties<CursoView, "nome" | "nomeAbreviado">;

  //
  ...PickProperties<CursoView, "campus" | "ofertaFormacao" | "imagemCapa">;

  //
  ...PickProperties<CursoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um Curso. */
@entity(Tokens.Curso_InputCreate_View)
model CursoInputCreateView {
  ...PickProperties<CursoView, "nome" | "nomeAbreviado">;
  campus: CampusFindOneInputView;
  ofertaFormacao: OfertaFormacaoFindOneInputView;
}

/** Dados de entrada para a atualização de um Curso. */
@entity(Tokens.Curso_InputUpdate_View)
model CursoInputUpdateView is OptionalProperties<CursoInputCreateView>;

/** Resultados da busca a Cursos. */
@entity(Tokens.Curso_ListResult_View)
model CursoListResultView is PaginationResultView<CursoFindOneResultView>;

// =====================================
// Operações
// =====================================

model CursoFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Curso_Operations_FindOneById, CursoFindOneInputView.id, CursoFindOneResultView>;

model CursoDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Curso_Operations_DeleteOneById, CursoFindOneInputView.id>;

model CursoCreateOperation is GenericOperationCreate<Tokens.Curso_Operations_Create, CursoInputCreateView, CursoFindOneResultView>;

model CursoUpdateByIdOperation
  is GenericOperationUpdate<Tokens.Curso_Operations_UpdateOneById, CursoFindOneInputView.id, CursoInputUpdateView, CursoFindOneResultView>;

model CursoListOperation
  is GenericOperationList<
    Tokens.Curso_Operations_List,
    CursoListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCampusId")
      @extension("x-unispec-http-key", "filter.campus.id")
      `filter.campus.id`?: Pagination.GenericFilter.eq[];

      // filtros
      @extension("x-unispec-gql-key", "filterOfertaFormacaoId")
      @extension("x-unispec-http-key", "filter.ofertaFormacao.id")
      `filter.ofertaFormacao.id`?: Pagination.GenericFilter.eq[];
    }
  >;

// =====================================
// Operações de Imagem de Capa
// =====================================

model CursoGetImagemCapa is ImagemGenericGetImagemCapaOperation<Tokens.Curso_Operations_GetImagemCapa, CursoFindOneInputView.id>;

model CursoSetImagemCapa is ImagemGenericSetImagemCapaOperation<Tokens.Curso_Operations_SetImagemCapa, CursoFindOneInputView.id>;
