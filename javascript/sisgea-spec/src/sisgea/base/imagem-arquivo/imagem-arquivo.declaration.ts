import { IEntityDate, IObjectUuid, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';
import { ArquivoDeclarationFactory, ArquivoFindOneByIdResultDeclaration, IArquivoFindOneByIdResultDto, IArquivoModel } from '../arquivo';
import { IImagemModel, ImagemDeclarationFactory } from '../imagem/imagem.declaration';

// =================================================================================================

export type IImagemArquivoModel = {
  //
  id: string;
  //
  largura: number;
  altura: number;
  formato: string;
  mimeType: string;
  //
  imagem: IImagemModel;
  arquivo: IArquivoModel;
  //
  dateCreated: IEntityDate;
  //
};

export interface IImagemArquivoFindOneResultDto {
  //
  id: string;
  //
  largura: number;
  altura: number;
  formato: string;
  mimeType: string;
  //
  imagem: IObjectUuid;
  arquivo: IArquivoFindOneByIdResultDto;
  //
  dateCreated: IEntityDate;
}

// =================================================================================================

export const ImagemArquivoDeclarationFactory = () => {
  return {
    name: 'ImagemArquivo',

    properties: {
      //
      ...ObjectUuidDeclarationFactory().properties,
      //
      largura: {
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Largura da imagem.',
        nullable: false,
      },
      altura: {
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Altura da imagem.',
        nullable: false,
      },
      formato: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Formato da imagem.',
        nullable: false,
      },
      mimeType: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Mime Type da imagem.',
        nullable: false,
      },
      imagem: {
        nullable: false,
        type: ImagemDeclarationFactory as any,
        description: 'Imagem.',
      },
      arquivo: {
        nullable: false,
        type: ArquivoDeclarationFactory as any,
        description: 'Arquivo.',
      },
      //
      dateCreated: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.DATE_TIME,
        description: 'Data de criação do registro.',
      },
      //
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

export const ImagemArquivoFindOneByIdResultDeclaration = () => {
  const { properties } = ImagemArquivoDeclarationFactory();

  return {
    name: 'ImagemArquivoFindOneByIdResult',
    partialOf: ImagemArquivoDeclarationFactory as any,

    properties: {
      //
      id: properties.id,
      //
      largura: properties.largura,
      altura: properties.altura,
      formato: properties.formato,
      mimeType: properties.mimeType,
      //
      imagem: {
        ...properties.imagem,
        type: ObjectUuidDeclarationFactory,
      },
      arquivo: {
        ...properties.arquivo,
        type: ArquivoFindOneByIdResultDeclaration as any,
      },
      //
      dateCreated: properties.dateCreated,
      //
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

// =================================================================================================
