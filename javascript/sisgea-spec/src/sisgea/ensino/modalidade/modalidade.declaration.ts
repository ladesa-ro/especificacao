import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
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
  nome: string | undefined;
  slug: string | undefined;
};

export type IModalidadeFindAllResultDto = IPaginatedResultDto<IModalidadeFindOneResultDto>;

export type IModalidadeDeleteOneByIdInputDto = IModalidadeFindOneByIdInputDto;

// =================================================================

export const ModalidadeFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const ModalidadeDeclarationFactory = () => {
  return {
    name: 'Modalidade',

    properties: {
      //
      ...ObjectUuidDeclarationFactory().properties,

      //

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

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  };
};

export const ModalidadeFindOneResultDeclaration = () => {
  const { properties } = ModalidadeDeclarationFactory();

  return {
    name: 'ModalidadeFindOneResult',
    partialOf: ModalidadeDeclarationFactory,

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
  };
};

export const ModalidadeInputDeclaration = () => {
  const { properties } = ModalidadeDeclarationFactory();

  return {
    name: 'ModalidadeInput',

    properties: {
      nome: properties.nome,
      slug: properties.slug,
    },
  };
};

export const ModalidadeCreateDeclaration = ModalidadeInputDeclaration;

export const ModalidadeUpdateDeclaration = () => {
  const { properties } = ModalidadeDeclarationFactory();

  return {
    name: 'ModalidadeUpdate',

    properties: {
      id: properties.id,
      //
      nome: {
        ...properties.nome,
        required: false,
      },
      slug: {
        ...properties.slug,
        required: false,
      },
    },
  };
};

export const ModalidadeFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  ModalidadeFindOneResultDeclaration,
  'ModalidadeFindAllResult',
);

export const ModalidadeDeleteOneByIdInputDeclaration = ModalidadeFindOneByIdInputDeclaration;

// =================================================================
