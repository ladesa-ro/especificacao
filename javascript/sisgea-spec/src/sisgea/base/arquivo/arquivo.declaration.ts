import { DatedObjectDeclarationFactory, IEntityDate, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';

// =================================================================================================

export type IArquivoFindOneByIdInputDto = {
  id: string;
};

export type IArquivoModel = {
  //
  id: string;
  //
  nome: string | null;
  mimeType: string | null;
  sizeBytes: number | null;
  storageType: string | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type IArquivoFindOneByIdResultDto = {
  id: string;
  //
  nome: string | null;
  mimeType: string | null;
  sizeBytes: number | null;
  storageType: string | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

// =================================================================================================

export const ArquivoFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const ArquivoDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Arquivo',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(ArquivoFindOneByIdInputDeclaration),
      //
      nome: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do arquivo.',
      },
      mimeType: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Mime-type do arquivo.',
      },
      sizeBytes: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Tamanho do arquivo (em bytes).',
      },
      storageType: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Estratégia de armazenamento do arquivo.',
      },
      //
      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),
    },
  };
});

export const ArquivoFindOneByIdResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ArquivoDeclarationFactory);

  return {
    name: 'ArquivoFindOneByIdResult',
    partialOf: ArquivoDeclarationFactory,
    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      mimeType: properties.mimeType,
      sizeBytes: properties.sizeBytes,
      storageType: properties.storageType,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  };
});

// =================================================================================================
