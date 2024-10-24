using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Bloco. */
@entity(Tokens.Bloco)
model Bloco {
  ...ObjectUuid;

  /** Nome do Bloco. */
  @minLength(1)
  nome: string;

  /** Código do Bloco. */
  @minLength(1)
  codigo: string;

  /** Campus. */
  campus: Campus;

  /** Imagem de capa. */
  imagemCapa: Imagem | null;

  /** Ambientes. */
  ambientes: Ambiente[];

  ...DatedObject;
}

/** Visão completa de um bloco. */
@entity(Tokens.Bloco_View)
model BlocoView {
  ...OmitProperties<Bloco, "campus" | "ambientes" | "imagemCapa">;
  campus: CampusFindOneResultView;
  imagemCapa: ImagemFindOneResultView | null;
  ambientes: AmbienteFindOneResultView[];
}

/**
 * Dados de entrada para encontrar um bloco por id.
 */
@entity(Tokens.Bloco_FindOneInput_View)
model BlocoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Bloco>)
  id: Bloco.id;
}

/**
 * Visão FindOne de um bloco.
 */
@entity(Tokens.Bloco_FindOneResult_View)
@entityPartialOf(Tokens.Bloco_View)
model BlocoFindOneResultView {
  //
  ...PickProperties<BlocoView, "id">;

  ...PickProperties<BlocoView, "nome">;
  ...PickProperties<BlocoView, "codigo">;

  //
  ...PickProperties<BlocoView, "campus">;

  ...PickProperties<BlocoView, "imagemCapa">;

  //
  ...PickProperties<BlocoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um bloco. */
@entity(Tokens.Bloco_InputCreate_View)
model BlocoInputCreateView {
  ...PickProperties<BlocoView, "nome">;
  ...PickProperties<BlocoView, "codigo">;
  campus: CampusFindOneInputView;
}

/** Dados de entrada para a atualização de um bloco. */
@entity(Tokens.Bloco_InputUpdate_View)
model BlocoInputUpdateView is OptionalProperties<BlocoInputCreateView>;

/** Resultados da busca a blocos. */
@entity(Tokens.Bloco_ListResult_View)
model BlocoListResultView is PaginationResultView<BlocoFindOneResultView>;

// =====================================
// operações
// =====================================

model BlocoFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Bloco_Operations_FindOneById, BlocoFindOneInputView.id, BlocoFindOneResultView>;

model BlocoDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Bloco_Operations_DeleteOneById, BlocoFindOneInputView.id>;

model BlocoCreateOperation is GenericOperationCreate<Tokens.Bloco_Operations_Create, BlocoInputCreateView, BlocoFindOneResultView>;

model BlocoUpdateByIdOperation
  is GenericOperationUpdate<Tokens.Bloco_Operations_UpdateOneById, BlocoFindOneInputView.id, BlocoInputUpdateView, BlocoFindOneResultView>;

model BlocoListOperation
  is GenericOperationList<
    Tokens.Bloco_Operations_List,
    BlocoListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCampusId")
      @extension("x-unispec-http-key", "filter.campus.id")
      `filter.campus.id`?: Pagination.GenericFilter.eq[];
    }
  >;

model BlocoSetCoverImage is ImagemGenericSetImagemCapaOperation<Tokens.Bloco_Operations_SetImagemCapa, BlocoFindOneInputView.id>;

model BlocoGetCoverImage is ImagemGenericGetImagemCapaOperation<Tokens.Bloco_Operations_GetImagemCapa, BlocoFindOneInputView.id>;
