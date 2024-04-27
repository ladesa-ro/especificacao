import { DatedObjectDeclarationFactory, IEntityDate, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';
import {
  IImagemArquivoFindOneResultDto,
  IImagemArquivoModel,
  ImagemArquivoDeclarationFactory,
  ImagemArquivoFindOneByIdResultDeclaration,
} from '../imagem-arquivo';

// =================================================================================================

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

export interface IImagemFindOneResultDto {
  id: string;
  //
  descricao: string | null;
  //
  imagemArquivo: Omit<IImagemArquivoFindOneResultDto, 'imagem'>[];
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
}

// =================================================================================================

export const ImagemDeclarationFactory: ImagemDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Imagem',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(ObjectUuidDeclarationFactory),
      //

      descricao: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Descrição da imagem.',
      },

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoDeclarationFactory,
        description: 'Descrição da imagem.',
      },

      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw<IImagemModel>;
});

export type ImagemDeclarationFactory = SpecHelpers.IDeclaredEntity<IImagemModel>;

export const ImagemFindOneResultDeclarationFactory: ImagemFindOneResultDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'ImagemFindOneResult',
    partialOf: ImagemDeclarationFactory,

    properties: {
      ...SpecHelpers.GetDeclarationProperties(ImagemDeclarationFactory, {
        id: true,
        descricao: true,
      }),

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoFindOneByIdResultDeclaration,
        description: 'Imagem-arquivo.',
      },

      ...SpecHelpers.GetDeclarationProperties(ImagemDeclarationFactory, {
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      }),
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw<IImagemFindOneResultDto>;
});

export type ImagemFindOneResultDeclarationFactory = SpecHelpers.IDeclaredEntity<IImagemFindOneResultDto>;

// =================================================================================================
