import { DatedObjectDeclarationFactory, IEntityDate, ObjectUuidDeclarationFactory } from '@/core';
import { IImagemArquivoFindOneResultDto, IImagemArquivoModel, ImagemArquivo, ImagemArquivoFindOneByIdResult } from '../imagem-arquivo';
import { PropertyTypes, IDeclaration } from '@/helpers';

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

export const Imagem = () => {
  return {
    name: 'Imagem',

    properties: {
      //
      ...ObjectUuidDeclarationFactory().properties,
      //

      descricao: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Descrição da imagem.',
      },

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivo as any,
        description: 'Descrição da imagem.',
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const ImagemFindOneResult = () => {
  const properties = Imagem().properties;

  return {
    name: 'ImagemFindOneResult',
    partialOf: Imagem as any,

    properties: {
      id: properties.id,

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoFindOneByIdResult as any,
        description: 'Imagem-arquivo.',
      },

      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

// =================================================================================================
