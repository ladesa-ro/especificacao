import "../../../.utils/index.tsp";

using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

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
 * Visão completa de um arquivo.
 */
@entity(Tokens.Arquivo_View)
model ArquivoView {
  ...Arquivo;
}

/**
 * Dados de entrada para encontrar um arquivo por id.
 */
@entity(Tokens.Arquivo_FindOneInput_View)
model ArquivoFindOneInputView {
  ...PickProperties<Arquivo, "id">;
}

/**
 * Dados de saída para encontrar um arquivo por id.
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

/**
 * Obtêm o conteúdo de um Arquivo.
 */
model ArquivoGetFileOperation
  is GenericOperation<
    Tokens.Arquivo_Operations_GetFile,
    #{},
    {
      input: {
        queries: {
          /**
           * Acesso via recurso: nome.
           */
          nomeRecurso: string;

          /**
           * Acesso via recurso: id.
           */
          idRecurso: string;
        };
      };
      output: {
        /**
         * Binário do Arquivo.
         */
        @format("binary")
        @extension("mimeTypes", #["application/octet-stream"])
        success: string;
      };
    }
  >;
