import { BuildModule, Build as U } from "@unispec/ast-builder";
import { CommonEntity } from "../../-shared/common-entity";
import { Tokens } from "../../tokens";

export const ImagemArquivoEntity = CommonEntity({
  id: "uuid",
  name: "ImagemArquivo",

  dated: true,

  properties: {
    largura: U.Integer({
      nullable: true,
      description: "Largura da imagem.",
    }),
    altura: U.Integer({
      nullable: true,
      description: "Altura da imagem.",
    }),
    formato: U.String({
      description: "Formato da imagem.",
    }),
    mimeType: U.String({
      description: "Mime Type da imagem.",
    }),
    //
    imagem: U.Reference({
      targetsTo: Tokens.Imagem.Entity,
      description: "Imagem.",
    }),
    arquivo: U.Reference({
      targetsTo: Tokens.Arquivo.Entity,
      description: "Arquivo.",
    }),
  },
});

export const ImagemArquivoView = U.View({
  name: Tokens.ImagemArquivo.Entity,

  description: "Visão completa de uma versão de uma imagem.",

  type: U.ObjectTransformer.From(ImagemArquivoEntity)
    .Extends({
      properties: {
        imagem: {
          targetsTo: Tokens.Imagem.Views.FindOneFromImagemArquivoResult,
        },
        arquivo: {
          targetsTo: Tokens.Arquivo.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const ImagemArquivoFindOneInputView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneInput,
  description: "Dados de entrada para encontrar uma versão de uma imagem por ID.",
  type: U.ObjectTransformer.From(ImagemArquivoView.type).Pick({ id: true }).Node(),
});

export const ImagemArquivoFindOneResultView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneResult,

  description: "Visão FindOne de um ImagemArquivo.",

  type: U.ObjectTransformer.From(ImagemArquivoView.type)
    .Extends({
      partialOf: Tokens.ImagemArquivo.Entity,
    })
    .Pick({
      id: true,
      //
      largura: true,
      altura: true,
      formato: true,
      mimeType: true,
      //
      imagem: true,
      arquivo: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const ImagemArquivoFindOneFromImagemResultView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneFromImagemResult,

  description: "Visão FindOneFromImagem de um ImagemArquivo.",

  type: U.ObjectTransformer.From(ImagemArquivoView.type)
    .Extends({
      partialOf: Tokens.ImagemArquivo.Entity,
    })
    .Pick({
      id: true,
      //
      largura: true,
      altura: true,
      formato: true,
      mimeType: true,
      //
      arquivo: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const ImagemArquivoProvider = BuildModule({
  nodes: [
    ImagemArquivoEntity,
    ImagemArquivoView,
    ImagemArquivoFindOneInputView,
    ImagemArquivoFindOneFromImagemResultView,
    ImagemArquivoFindOneResultView,
  ],
});
