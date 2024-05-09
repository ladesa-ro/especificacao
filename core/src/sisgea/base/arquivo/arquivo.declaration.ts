import { DatedObjectDeclarationFactory, IEntityDate, ObjectUuid } from '@/core';
import * as SpecHelpers from '@/helpers';

// =================================================================================================

export type IArquivoFindOneByIdInputDto = { id: string };

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

export const ArquivoFindOneByIdInput = ObjectUuid;

export const Arquivo = () => {
  return {
    name: 'Arquivo',

    properties: {
      //
      ...ArquivoFindOneByIdInput().properties,
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
        validator: ({ custom }) => custom.number().integer().positive().required().nullable(),
      },
      storageType: {
        nullable: true,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Estratégia de armazenamento do arquivo.',
      },
      //
      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ArquivoFindOneByIdResult = () => {
  const { properties } = Arquivo();

  return {
    name: 'ArquivoFindOneByIdResult',
    partialOf: Arquivo as any,
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
  } satisfies SpecHelpers.IDeclaration;
};

// =================================================================================================
