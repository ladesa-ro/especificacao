using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Campus. */
@entity(Tokens.Campus)
model Campus {
  ...ObjectUuid;

  /** Nome fantasia do campus. */
  @minLength(1)
  nomeFantasia: string;

  /** Razão social do campus. */
  @minLength(1)
  razaoSocial: string;

  /** Apelido do campus. */
  @minLength(1)
  apelido: string;

  /** CNPJ do campus. */
  @minLength(1)
  cnpj: string;

  /** Endereço do campus */
  endereco: Endereco;

  ...DatedObject;
}

/** Visão completa de um campus. */
@entity(Tokens.Campus_View)
model CampusView {
  ...OmitProperties<Campus, "endereco">;
  endereco: EnderecoFindOneResultView;
}

/**
 * Dados de entrada para encontrar um campus por id.
 */
@entity(Tokens.Campus_FindOneInput_View)
model CampusFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Campus>)
  id: Campus.id;
}

/**
 * Visão FindOne de um campus.
 */
@entity(Tokens.Campus_FindOneResult_View)
@entityPartialOf(Tokens.Campus_View)
model CampusFindOneResultView {
  //
  ...PickProperties<CampusView, "id">;

  ...PickProperties<CampusView, "nomeFantasia">;
  ...PickProperties<CampusView, "razaoSocial">;
  ...PickProperties<CampusView, "apelido">;
  ...PickProperties<CampusView, "cnpj">;

  //
  ...PickProperties<CampusView, "endereco">;

  //
  ...PickProperties<CampusView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Resultados da busca a campi. */
@entity(Tokens.Campus_ListResult_View)
model CampusListResultView is PaginationResultView<CampusFindOneResultView>;

/**
 * Dados de entrada para a criação de um campus.
 */
@entity(Tokens.Campus_InputCreate_View)
model CampusInputCreateView {
  ...PickProperties<CampusView, "nomeFantasia">;
  ...PickProperties<CampusView, "razaoSocial">;
  ...PickProperties<CampusView, "apelido">;
  ...PickProperties<CampusView, "cnpj">;
  endereco: EnderecoInput;
}

/** Dados de entrada para a atualização de um campus. */
@entity(Tokens.Campus_InputUpdate_View)
model CampusInputUpdateView is OptionalProperties<CampusInputCreateView>;

// =====================================
// operações
// =====================================

model CampusFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Campus_Operations_FindOneById, CampusFindOneInputView.id, CampusFindOneResultView>;

model CampusDeleteOneByIdOperation is GenericOperationDeleteOneById<Tokens.Campus_Operations_DeleteOneById, CampusFindOneInputView.id>;

model CampusListOperation
  is GenericOperationList<
    Tokens.Campus_Operations_List,
    CampusListResultView,
    {
      // filters
      @extension("x-unispec-gql-key", "filterEnderecoCidadeId")
      @extension("x-unispec-http-key", "filter.endereco.cidade.id")
      `filter.endereco.cidade.id`?: Pagination.GenericFilter.eq[];

      // filters
      @extension("x-unispec-gql-key", "filterEnderecoCidadeEstadoId")
      @extension("x-unispec-http-key", "filter.endereco.cidade.estado.id")
      `filter.endereco.cidade.estado.id`?: Pagination.GenericFilter.eq[];
    }
  >;

/** Operação de criação de um campus. */
model CampusCreateOperation is GenericOperationCreate<Tokens.Campus_Operations_Create, CampusInputCreateView, CampusFindOneResultView>;

/** Operação de atualização de um campus. */
model CampusUpdateOperation
  is GenericOperationUpdate<
    Tokens.Campus_Operations_UpdateOneById,
    CampusFindOneInputView.id,
    CampusInputUpdateView,
    CampusFindOneResultView
  >;
