import "../../../.utils/index.tsp";

using Ladesa.Extensions;

namespace Ladesa.Schemas;

/**
 * Arquivo.
 */
@entity(Tokens.Arquivo)
model Arquivo {
  ...ObjectUuid;

  /** Nome do arquivo. */
  nome?: string;

  /** Formato do arquivo. */
  mimeType?: string;

  /** Tamanho do arquivo (em bytes). */
  sizeBytes?: integer;

  /** Estratégia de armazenamento do conteúdo. */
  storageType: string;

  ...DatedObject;
}

/**
 * Visão completa de um Arquivo.
 */
@entity(Tokens.Arquivo_View)
model ArquivoView {
  ...Arquivo;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
@entity(Tokens.Arquivo_FindOneInput_View)
model ArquivoFindOneInputView {
  ...PickProperties<Arquivo, "id">;
}

/**
 * Dados de saída para encontrar um Arquivo por ID.
 */
@entity(Tokens.Arquivo_FindOneResult_View)
@entityPartialOf(Tokens.Arquivo_View)
model ArquivoFindOneResultView {
  ...PickProperties<ArquivoView, "id">;

  //

  ...PickProperties<ArquivoView, "nome" | "mimeType" | "sizeBytes" | "storageType">;

  //

  ...PickProperties<ArquivoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}
