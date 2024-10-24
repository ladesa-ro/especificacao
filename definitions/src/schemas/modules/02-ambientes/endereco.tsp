using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

/** Endereço. */
@entity(Tokens.Endereco)
model Endereco {
  ...ObjectUuid;

  /** Código postal (CEP). */
  @extension("x-unispec-constraint-cep", true)
  cep: string;

  /** Logradouro. */
  logradouro: string;

  /** Número. */
  @minValue(0)
  @maxValue(99999)
  numero: uint16;

  /** Bairro. */
  bairro: string;

  /** Complemento. */
  complemento: string | null;

  /** Ponto de referência. */
  pontoReferencia: string | null;

  /** Cidade. */
  cidade: Cidade;

  ...DatedObject;
}

/** Visão completa de um endereco. */
@entity(Tokens.Endereco_View)
model EnderecoView {
  ...OmitProperties<Endereco, "cidade">;
  cidade: CidadeFindOneResultView;
}

/**
 * Dados de entrada para encontrar um endereço por id.
 */
@entity(Tokens.Endereco_FindOneInput_View)
model EnderecoFindOneInputView is PickProperties<EnderecoView, "id">;

/**
 * Visão FindOne de um endereço.
 */
@entity(Tokens.Endereco_FindOneResult_View)
@entityPartialOf(Tokens.Endereco_View)
model EnderecoFindOneResultView {
  //
  ...PickProperties<EnderecoView, "id">;

  ...PickProperties<EnderecoView, "cep">;
  ...PickProperties<EnderecoView, "logradouro">;
  ...PickProperties<EnderecoView, "numero">;
  ...PickProperties<EnderecoView, "bairro">;
  ...PickProperties<EnderecoView, "complemento">;
  ...PickProperties<EnderecoView, "pontoReferencia">;

  //
  ...PickProperties<EnderecoView, "cidade">;

  //
  ...PickProperties<EnderecoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/**
 * Dados de entrada para um endereco.
 */
@entity(Tokens.Endereco_Input_View)
model EnderecoInput {
  ...PickProperties<EnderecoView, "cep">;
  ...PickProperties<EnderecoView, "logradouro">;
  ...PickProperties<EnderecoView, "numero">;
  ...PickProperties<EnderecoView, "bairro">;
  ...PickProperties<EnderecoView, "complemento">;
  ...PickProperties<EnderecoView, "pontoReferencia">;
  cidade: CidadeFindOneInputView;
}
