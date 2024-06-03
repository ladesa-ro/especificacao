import { U } from "@unispec/core";
import { Tokens } from "../../tokens";

export const ArquivoEntity = U.ObjectEntity({
  id: "uuid",
  name: "Arquivo",

  dated: true,

  properties: {
    name: U.String({
      description: "Nome.",
    }),
    mimeType: U.String({
      description: "Mime-type.",
    }),
    sizeBytes: U.Integer({
      description: "Tamanho (em bytes).",
    }),
    storageType: U.String({
      description: "Estratégia de armazenamento.",
    }),
  },
});

export const ArquivoView = U.View({
  name: Tokens.Arquivo.Entity,
  description: "Visão completa de um Arquivo.",
  type: U.ObjectTransformer.From(ArquivoEntity).Node(),
});

export const ArquivoFindOneInputView = U.View({
  name: Tokens.Arquivo.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Arquivo por ID.",
  type: U.ObjectTransformer.From(ArquivoView.type).Pick({ id: true }).Node(),
});

export const ArquivoFindOneResultView = U.View({
  name: Tokens.Arquivo.Views.FindOneResult,

  description: "Visão FindOne de um Arquivo.",

  type: U.ObjectTransformer.From(ArquivoView.type)
    .Extends({
      partialOf: Tokens.Arquivo.Entity,
    })
    .Pick({
      id: true,
      //
      name: true,
      mimeType: true,
      sizeBytes: true,
      storageType: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const ArquivoGetFileOperation = U.Operation({
  description: "Obtêm o conteúdo.",

  name: Tokens.Arquivo.Operations.GetFile,

  input: {
    queries: {
      nomeRecurso: U.String({
        description: "Acesso via recurso: nome",
      }),
      idRecurso: U.String({
        description: "Acesso via recurso: id",
      }),
    },
  },

  output: {
    success: U.File({
      description: "Binário.",
      mimeTypes: ["application/octet-stream"],
    }),
  },
});

export const ArquivoDeclarator = U.Declarator({
  entity: Tokens.Arquivo.Entity,

  operations: {
    extra: {
      getFile: ArquivoGetFileOperation,
    },
  },
});

export const ArquivoProvider = U.Provider((ctx) => {
  ctx.Add(ArquivoEntity);
  ctx.Add(ArquivoView);
  ctx.Add(ArquivoFindOneInputView);
  ctx.Add(ArquivoFindOneResultView);
  ctx.Add(ArquivoDeclarator);
});
