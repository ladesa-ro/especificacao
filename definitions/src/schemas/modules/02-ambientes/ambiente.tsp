using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Ambiente. */
@entity(Tokens.Ambiente)
model Ambiente {
  ...ObjectUuid;

  /** Nome do ambiente/sala. */
  @minLength(1)
  nome: string;

  /** Descrição do ambiente/sala. */
  descricao: string | null;

  /** Código do ambiente/sala. */
  @minLength(1)
  codigo: string;

  /** Capacidade do ambiente/sala. */
  capacidade: integer | null;

  /** Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química. */
  tipo: string | null;

  /** Bloco que o ambiente/sala pertence. */
  bloco: Bloco;

  /** Imagem de capa. */
  imagemCapa: Imagem | null;

  ...DatedObject;
}

/** Visão completa de um ambiente. */
@entity(Tokens.Ambiente_View)
model AmbienteView {
  ...OmitProperties<Ambiente, "bloco" | "imagemCapa">;
  bloco: BlocoFindOneResultView;
  imagemCapa: ImagemFindOneResultView | null;
}

/**
 * Dados de entrada para encontrar um ambiente por id.
 */
@entity(Tokens.Ambiente_FindOneInput_View)
model AmbienteFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Ambiente>)
  id: Ambiente.id;
}

/**
 * Visão FindOne de um ambiente.
 */
@entity(Tokens.Ambiente_FindOneResult_View)
@entityPartialOf(Tokens.Ambiente_View)
model AmbienteFindOneResultView {
  //
  ...PickProperties<AmbienteView, "id">;

  ...PickProperties<AmbienteView, "nome">;
  ...PickProperties<AmbienteView, "descricao">;
  ...PickProperties<AmbienteView, "codigo">;
  ...PickProperties<AmbienteView, "capacidade">;
  ...PickProperties<AmbienteView, "tipo">;

  //
  ...PickProperties<AmbienteView, "bloco">;

  ...PickProperties<AmbienteView, "imagemCapa">;

  //
  ...PickProperties<AmbienteView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um ambiente. */
@entity(Tokens.Ambiente_InputCreate_View)
model AmbienteInputCreateView {
  ...PickProperties<AmbienteView, "nome">;
  ...PickProperties<AmbienteView, "descricao">;
  ...PickProperties<AmbienteView, "codigo">;
  ...PickProperties<AmbienteView, "capacidade">;
  ...PickProperties<AmbienteView, "tipo">;
  bloco: BlocoFindOneInputView;
}

/** Dados de entrada para a atualização de um ambiente. */
@entity(Tokens.Ambiente_InputUpdate_View)
model AmbienteInputUpdateView is OptionalProperties<AmbienteInputCreateView>;

/** Resultados da busca a ambientes. */
@entity(Tokens.Ambiente_ListResult_View)
model AmbienteListResultView is PaginationResultView<AmbienteFindOneResultView>;

// =====================================
// operações
// =====================================

model AmbienteFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Ambiente_Operations_FindOneById, AmbienteFindOneInputView.id, AmbienteFindOneResultView>;

model AmbienteDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Ambiente_Operations_DeleteOneById, AmbienteFindOneInputView.id>;

model AmbienteCreateOperation
  is GenericOperationCreate<Tokens.Ambiente_Operations_Create, AmbienteInputCreateView, AmbienteFindOneResultView>;

model AmbienteUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Ambiente_Operations_UpdateOneById,
    AmbienteFindOneInputView.id,
    AmbienteInputUpdateView,
    AmbienteFindOneResultView
  >;

model AmbienteListOperation
  is GenericOperationList<
    Tokens.Ambiente_Operations_List,
    AmbienteListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterBlocoId")
      @extension("x-unispec-http-key", "filter.bloco.id")
      `filter.bloco.id`?: Pagination.GenericFilter.eq[];

      // filtros
      @extension("x-unispec-gql-key", "filterBlocoCampusId")
      @extension("x-unispec-http-key", "filter.bloco.campus.id")
      `filter.bloco.campus.id`?: Pagination.GenericFilter.eq[];
    }
  >;

model AmbienteSetCoverImage is ImagemGenericSetImagemCapaOperation<Tokens.Ambiente_Operations_SetImagemCapa, AmbienteFindOneInputView.id>;

model AmbienteGetCoverImage is ImagemGenericGetImagemCapaOperation<Tokens.Ambiente_Operations_GetImagemCapa, AmbienteFindOneInputView.id>;
