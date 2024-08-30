import "@typespec/json-schema";
import "../.utils/-index.tsp";

using Ladesa.Extensions;
using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Arquivo.
 */
@entity(EntityToken.Arquivo)
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
@entity(EntityToken.ArquivoView)
model ArquivoView {
  ...Arquivo;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
@entity(EntityToken.ArquivoFindOneInputView)
model ArquivoFindOneInputView {
  ...PickProperties<Arquivo, "id">;
}

/**
 * Dados de saída para encontrar um Arquivo por ID.
 */
@entity(EntityToken.ArquivoFindOneResultView)
@entityPartialOf(EntityToken.ArquivoView)
model ArquivoFindOneResultView {
  ...PickProperties<ArquivoView, "id">;

  //

  ...PickProperties<
    ArquivoView,
    "nome" | "mimeType" | "sizeBytes" | "storageType"
  >;

  //

  ...PickProperties<ArquivoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}
