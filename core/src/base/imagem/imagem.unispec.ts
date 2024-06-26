import { Build as U } from "@unispec/ast-builder";
import { CommonEntity } from "../../-shared/common/CommonEntity";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const ImagemEntity = () =>
  CommonEntity({
    id: "uuid",
    dated: true,

    description: "Imagem",

    properties: {
      descricao: U.String({
        description: "Descrição.",
      }),
      versoes: U.Array({
        description: "Versões.",
        items: U.Reference({
          targetsTo: Tokens.ImagemArquivo.Entity,
          description: "Versão da imagem.",
        }),
      }),
    },
  });

export const ImagemView = () =>
  U.View({
    name: Tokens.Imagem.Entity,
    description: "Visão completa de um Imagem.",

    type: U.ObjectTransformer.From(ImagemEntity())
      .Extends({
        properties: {
          versoes: {
            items: { targetsTo: Tokens.ImagemArquivo.Views.FindOneFromImagemResult },
          },
        },
      })
      .Node(),
  });

export const ImagemFindOneInputView = () =>
  U.View({
    name: Tokens.Imagem.Views.FindOneInput,
    description: "Dados de entrada para encontrar um Imagem por ID.",
    type: U.ObjectTransformer.From(ImagemView().type).Pick({ id: true }).Node(),
  });

export const ImagemFindOneResultView = () =>
  U.View({
    name: Tokens.Imagem.Views.FindOneResult,

    description: "Visão FindOne de um Imagem.",

    type: U.ObjectTransformer.From(ImagemView().type)
      .Extends({
        partialOf: Tokens.Imagem.Entity,
      })
      .Pick({
        id: true,
        //
        descricao: true,
        versoes: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const ImagemFindOneFromImagemArquivoResultView = () =>
  U.View({
    name: Tokens.Imagem.Views.FindOneFromImagemArquivoResult,

    description: "Visão FindOneFromImagemArquivo de um Imagem.",

    type: U.ObjectTransformer.From(ImagemView().type)
      .Extends({
        partialOf: Tokens.Imagem.Entity,
      })
      .Pick({
        id: true,
      })
      .Node(),
  });

export const ImagemProvider = LazyModule({
  nodes: [
    //
    ImagemEntity,
    ImagemView,
    ImagemFindOneInputView,
    ImagemFindOneFromImagemArquivoResultView,
    ImagemFindOneResultView,
  ],
});
