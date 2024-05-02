import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';

// =================================================================

export type IModalidadeFindOneByIdInputDto = IObjectUuid;

export type IModalidadeModel = {
  //
  id: IModalidadeFindOneByIdInputDto['id'];
  //
  nome: string;
  slug: string;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type IModalidadeFindOneResultDto = {
  //
  id: IModalidadeFindOneByIdInputDto['id'];
  //
  nome: string;
  slug: string;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type IModalidadeInputDto = {
  nome: string;
  slug: string;
};

export type IModalidadeCreateDto = IModalidadeInputDto;

export type IModalidadeUpdateDto = {
  id: string;
  nome: string | undefined;
  slug: string | undefined;
};

export type IModalidadeFindAllResultDto = IPaginatedResultDto<IModalidadeFindOneResultDto>;

export type IModalidadeDeleteOneByIdInputDto = IModalidadeFindOneByIdInputDto;

// =================================================================

export const ModalidadeFindOneByIdInput = ObjectUuid;

export const Modalidade = () => {
  return {
    name: 'Modalidade',

    properties: {
      ...ModalidadeFindOneByIdInput().properties,

      nome: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome da modalidade.',
        nullable: false,
      },

      slug: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Slug da modalidade.',
        nullable: false,
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ModalidadeFindOneResult = () => {
  const { properties } = Modalidade();

  return {
    name: 'ModalidadeFindOneResult',
    partialOf: Modalidade as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      slug: properties.slug,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ModalidadeInput = (required: boolean) => {
  const { properties } = Modalidade();

  return {
    name: 'ModalidadeInput',

    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      slug: {
        ...properties.slug,
        required,
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ModalidadeCreate = () => {
  return {
    name: 'ModalidadeCreate',

    properties: {
      ...ModalidadeInput(true).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ModalidadeUpdate = () => {
  return {
    name: 'ModalidadeUpdate',

    properties: {
      ...ModalidadeInput(false).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const ModalidadeFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(ModalidadeFindOneResult, 'ModalidadeFindAllResult');

export const ModalidadeDeleteOneByIdInput = ModalidadeFindOneByIdInput;

// =================================================================
