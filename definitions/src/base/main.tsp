import "@typespec/json-schema";
import "../.utils/common.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/** Arquivo. */
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

/** Visão completa de um Arquivo. */
model ArquivoView {
  ...Arquivo;
}

/** Dados de entrada para encontrar um Arquivo por ID. */
model ArquivoFindOneInputView {
  ...PickProperties<Arquivo, "id">;
}

/** Dados de entrada para encontrar um Arquivo por ID. */
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

model Imagem {
  ...ObjectUuid;

  /** Descrição da imagem. */
  descricao?: string;

  ...DatedObject;
}

model ImagemArquivo {
  ...ObjectUuid;

  /** Largura da imagem. */
  largura: integer;

  /** Altura da imagem. */
  altura: integer;

  /** Formato da imagem. */
  formato: integer;

  /** Mime-type da imagem. */
  mimeType: string;

  /** Imagem. */
  imagem: Imagem;

  /** Arquivo. */
  arquivo: Arquivo;

  ...DatedObject;
}
