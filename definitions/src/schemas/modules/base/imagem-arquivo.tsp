import "../../../.utils/index.tsp";

using Unispec.JsonSchema;

namespace Ladesa.Schemas;

/**
 * ImagemArquivo.
 */
@entity(Tokens.ImagemArquivo)
model ImagemArquivo {
  ...ObjectUuid;

  /** Largura da imagem. */
  largura: integer;

  /** Altura da imagem. */
  altura: integer;

  /** Formato da imagem. */
  formato: string;

  /** Mime-type da imagem. */
  mimeType: string;

  /** Imagem. */
  imagem: Imagem;

  /** Arquivo. */
  arquivo: Arquivo;

  ...DatedObject;
}

/**
 * Visão completa de uma versão de uma imagem.
 */
model ImagemArquivoView {
  ...OmitProperties<ImagemArquivo, "imagem" | "arquivo">;
  imagem: ImagemFindOneFromImagemArquivoResultView;
  arquivo: ArquivoFindOneResultView;
}

/**
 * Dados de entrada para encontrar uma versão de uma imagem por ID.
 */
@entity(Tokens.ImagemArquivo_FindOneInput_View)
model ImagemArquivoFindOneInputView {
  ...PickProperties<Imagem, "id">;
}

/**
 * Visão FindOne de uma versão de uma versão de imagem.
 */
@entity(Tokens.ImagemArquivo_FindOneResult_View)
@entityPartialOf(Tokens.ImagemArquivo_View)
model ImagemArquivoFindOneResultView {
  ...PickProperties<ImagemArquivoView, "id">;

  //

  ...PickProperties<ImagemArquivoView, "largura" | "altura" | "formato" | "mimeType">;

  ...PickProperties<ImagemArquivoView, "imagem">;
  ...PickProperties<ImagemArquivoView, "arquivo">;

  //

  ...PickProperties<ImagemArquivoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/**
 * Visão FindOneFromImagem de uma versão de imagem.
 */
@entity(Tokens.ImagemArquivo_FindOneFromImagemResult_View)
@entityPartialOf(Tokens.ImagemArquivo_View)
model ImagemArquivoFindOneFromImagemResultView {
  ...PickProperties<ImagemArquivoView, "id">;

  //

  ...PickProperties<ImagemArquivoView, "largura" | "altura" | "formato" | "mimeType">;

  ...PickProperties<ImagemArquivoView, "arquivo">;

  //

  ...PickProperties<ImagemArquivoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}
