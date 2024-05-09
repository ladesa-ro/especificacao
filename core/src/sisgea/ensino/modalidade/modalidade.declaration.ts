import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IEntityDateNullable,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import { IDeclaration, PropertiesRequireness, PropertyTypes } from '../../../helpers';

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
  dateDeleted: IEntityDateNullable;
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
  dateDeleted: IEntityDateNullable;
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
        type: PropertyTypes.STRING,
        description: 'Nome da modalidade.',
        nullable: false,
      },

      slug: {
        type: PropertyTypes.STRING,
        description: 'Slug da modalidade.',
        nullable: false,
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
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
  } satisfies IDeclaration;
};

export const ModalidadeInput = (required: boolean) => {
  const { properties } = Modalidade();

  return {
    name: 'ModalidadeInput',

    properties: {
      ...PropertiesRequireness(
        {
          nome: properties.nome,
          slug: properties.slug,
        },
        required,
      ),
    },
  } satisfies IDeclaration;
};

export const ModalidadeCreate = () => {
  return {
    name: 'ModalidadeCreate',

    properties: {
      ...ModalidadeInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const ModalidadeUpdate = () => {
  return {
    name: 'ModalidadeUpdate',

    properties: {
      ...ModalidadeFindOneByIdInput().properties,
      ...ModalidadeInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const ModalidadeFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(ModalidadeFindOneResult, 'ModalidadeFindAllResult');

export const ModalidadeDeleteOneByIdInput = ModalidadeFindOneByIdInput;

// =================================================================
