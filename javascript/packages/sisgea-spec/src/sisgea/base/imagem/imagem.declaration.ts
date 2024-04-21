import { DatedObjectDeclarationFactory, IEntityDate, ObjectUuidDeclarationFactory } from '@/core';
import { DeclareEntity, GetDeclarationProperties, IDeclaredEntity, IEntityDeclarationRaw, PropertyTypes } from '@/helpers';
import { IImagemArquivoModel, ImagemArquivoDeclarationFactory } from '../imagem-arquivo';

export type IImagemModel = {
  id: string;
  //
  descricao: string | null;
  //
  imagemArquivo: IImagemArquivoModel[];
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

export const ImagemDeclarationFactory: ImagemDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'Imagem',

    properties: {
      //
      ...GetDeclarationProperties(ObjectUuidDeclarationFactory),
      //

      descricao: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Descrição da imagem.',
      },

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoDeclarationFactory,
        description: 'Descrição da imagem.',
      },

      ...GetDeclarationProperties(DatedObjectDeclarationFactory),
    },
  } satisfies IEntityDeclarationRaw<IImagemModel>;
});

export type ImagemDeclarationFactory = IDeclaredEntity<IImagemModel>;
