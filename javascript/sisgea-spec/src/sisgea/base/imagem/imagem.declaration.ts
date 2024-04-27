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

export const ImagemDeclarationFactory = () => {
  return {
    name: 'Imagem',

    properties: {
      //
      ...ObjectUuidDeclarationFactory().properties,
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

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

export const ImagemFindOneResultDeclarationFactory = () => {
  const properties = ImagemDeclarationFactory().properties;

  return {
    name: 'ImagemFindOneResult',
    partialOf: ImagemDeclarationFactory as any,

    properties: {
      id: properties.id,

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoFindOneByIdResultDeclaration,
        description: 'Imagem-arquivo.',
      },

      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

// =================================================================================================
