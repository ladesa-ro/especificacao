import "@typespec/json-schema";
import "../.utils/common.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Arquivo.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.Arquivo>)
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
@extension("x-ladesa-entity-token", Json<EntityToken.ArquivoView>)
model ArquivoView {
  ...Arquivo;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.ArquivoFindOneInputView>)
model ArquivoFindOneInputView {
  ...PickProperties<Arquivo, "id">;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.ArquivoFindOneResultView>)
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
