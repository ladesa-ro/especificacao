import "../../../.utils/index.tsp";

using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

/**
 * Imagem.
 */
@entity(Tokens.Imagem)
model Imagem {
  ...ObjectUuid;

  /**
   * Descrição da imagem.
   */
  descricao?: string;

  /**
   * Versões da imagem.
   */
  versoes: ImagemArquivo[];

  ...DatedObject;
}

/**
 * Visão completa de uma Imagem.
 */
@entity(Tokens.Imagem_View)
model ImagemView {
  ...OmitProperties<Imagem, "versoes">;
  versoes: ImagemArquivoFindOneFromImagemResultView[];
}

/**
 * Dados de entrada para encontrar uma imagem por ID.
 */
@entity(Tokens.Imagem_FindOneInput_View)
model ImagemFindOneInputView {
  ...PickProperties<Imagem, "id">;
}

/**
 * Visão FindOne de uma imagem.
 */
@entity(Tokens.Imagem_FindOneResult_View)
@entityPartialOf(Tokens.Imagem_View)
model ImagemFindOneResultView {
  //
  ...PickProperties<ImagemView, "id">;

  ...PickProperties<ImagemView, "descricao">;
  ...PickProperties<ImagemView, "versoes">;

  //
  ...PickProperties<ImagemView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/**
 * Visão FindOneFromImagemArquivo de uma imagem.
 */
@entity(Tokens.Imagem_FindOneFromImagemArquivoResult_View)
@entityPartialOf(Tokens.Imagem_View)
model ImagemFindOneFromImagemArquivoResultView {
  ...PickProperties<ImagemView, "id">;
}

/**
 * Operação para definir o conteúdo binário de uma imagem.
 */
alias ImagemGenericSetImageOperation<Token = Tokens.Imagem_Operations_SetImagem, Id = never> = GenericOperation<
  Token,
  #{},
  {
    input: {
      params: {
        id: Id;
      };

      /**
       * Binário da imagem.
       */
      @extension("mimeTypes", #["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"])
      body: string;
    };
    output: {
      /**
       * Resultado da operação.
       */
      success: boolean;
    };
  }
>;

/**
 * Operação para obter o conteúdo binário de uma imagem.
 */
alias ImagemGenericGetImagemOperation<Token = Tokens.Imagem_Operations_GetImagem, Id = never> = GenericOperation<
  Token,
  #{},
  {
    input: {
      params: {
        id: Id;
      };
    };
    output: {
      /**
       * Binário.
       */
      @format("binary")
      @extension("mimeTypes", #["image/jpeg"])
      success: string;
    };
  }
>;

/**
 * Define a imagem de capa.
 */
alias ImagemGenericSetImagemCapaOperation<Token = Tokens.Imagem_Operations_SetImagem, Id = never> = ImagemGenericSetImageOperation<
  Token,
  Id
>;

/**
 * Obtêm a imagem de capa.
 */
alias ImagemGenericGetImagemCapaOperation<Token = Tokens.Imagem_Operations_GetImagem, Id = never> = ImagemGenericGetImagemOperation<
  Token,
  Id
>;
