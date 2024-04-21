import { DatedObjectDeclarationFactory, ObjectUuidDeclarationFactory } from '@/core';
import { DeclareEntity, GetDeclarationProperties, PropertyTypes } from '@/helpers';
import * as Dto from '@/index';

export type IImagemArquivoModel = Dto.InferFactoryEntityType<typeof ImagemArquivoDeclarationFactory>;

export const ImagemArquivoDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'ImagemArquivo',

    properties: {
      //
      ...GetDeclarationProperties(ObjectUuidDeclarationFactory),
      //

      largura: {
        type: PropertyTypes.INTEGER,
        description: 'Largura da imagem.',
        nullable: false,
      },

      altura: {
        type: PropertyTypes.INTEGER,
        description: 'Altura da imagem.',
        nullable: false,
      },

      formato: {
        type: PropertyTypes.STRING,
        description: 'Formato da imagem.',
        nullable: false,
      },

      mimeType: {
        type: PropertyTypes.STRING,
        description: 'Mime Type da imagem.',
        nullable: false,
      },

      imagem: {
        nullable: false,
        type: Dto.ImagemDeclarationFactory,
        description: 'Imagem.',
      },

      arquivo: {
        nullable: false,
        type: Dto.ArquivoDeclarationFactory,
        description: 'Arquivo.',
      },

      ...GetDeclarationProperties(DatedObjectDeclarationFactory),
    },
  };
});
