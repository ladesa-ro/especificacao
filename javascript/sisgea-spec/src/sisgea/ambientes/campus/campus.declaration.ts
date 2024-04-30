import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeDeclarationFactory } from '@/sisgea/ensino';
import { EnderecoDeclarationFactory, IEnderecoFindOneResultDto, IEnderecoInputDto, IEnderecoModel } from '../endereco';

// ======================================

export type ICampusModel = {
  //
  id: string;
  //
  nomeFantasia: string;
  razaoSocial: string;
  apelido: string;
  cnpj: string;
  //
  endereco: IEnderecoModel;
  modalidades: IModalidadeModel[];
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type ICampusDeleteOneByIdInputDto = ICampusFindOneByIdInputDto;

export type ICampusFindOneByIdInputDto = Pick<ICampusModel, 'id'>;
export const CampusFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export type ICampusFindOneResultDto = {
  //
  id: string;
  //
  nomeFantasia: string;
  razaoSocial: string;
  apelido: string;
  cnpj: string;
  //
  endereco: IEnderecoFindOneResultDto;
  modalidades: IModalidadeFindOneResultDto[];
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type ICampusFindAllResultDto = IPaginatedResultDto<ICampusFindOneResultDto>;

// ================================================

export type ICampusInputDto = {
  //
  nomeFantasia: string;
  razaoSocial: string;
  apelido: string;
  cnpj: string;
  //
  endereco: IEnderecoInputDto;
  //
  modalidades: IObjectUuid[];
};

export type ICampusCreateDto = ICampusInputDto;

export type ICampusUpdateDto = {
  id: string;
  //
  nomeFantasia: string | undefined;
  razaoSocial: string | undefined;
  apelido: string | undefined;
  cnpj: string | undefined;
  //
  endereco: IEnderecoInputDto | undefined;
  //
  modalidades: IObjectUuid[] | undefined;
};

// ================================================

export const CampusDeclarationFactory = () => {
  return {
    name: 'Campus',

    properties: {
      //
      ...CampusFindOneByIdInputDeclaration().properties,
      //

      razaoSocial: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Razão social do Campus.',
      },

      nomeFantasia: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome fantasia do Campus.',
      },

      apelido: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Apelido do Campus.',
      },

      cnpj: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CNPJ do Campus.',
      },

      endereco: {
        type: SpecHelpers.PropertyTypes.MIXED,

        input: {
          nullable: false,
          description: 'Endereço do Campus.',
          type: ObjectUuidDeclarationFactory,
        },

        output: {
          nullable: false,
          description: 'Endereço do Campus.',
          type: EnderecoDeclarationFactory as any,
        },
      },

      modalidades: {
        arrayOf: true,
        nullable: false,
        description: 'Modalidades oferecidas pelo Campus.',
        type: ModalidadeDeclarationFactory as any,
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusFindOneResultDeclaration = () => {
  const { properties } = CampusDeclarationFactory();

  return {
    name: 'CampusFindOneResult',
    partialOf: CampusDeclarationFactory as any,

    properties: {
      //
      id: properties.id,
      //
      nomeFantasia: properties.nomeFantasia,
      razaoSocial: properties.razaoSocial,
      apelido: properties.apelido,
      cnpj: properties.cnpj,
      //
      endereco: properties.endereco,
      modalidades: properties.modalidades,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusInputDeclaration = (required: boolean) => {
  const { properties } = CampusDeclarationFactory();

  return {
    name: 'CampusInput',

    properties: {
      nomeFantasia: {
        ...properties.nomeFantasia,
        required,
      },
      razaoSocial: {
        ...properties.razaoSocial,
        required,
      },
      apelido: {
        ...properties.apelido,
        required,
      },
      cnpj: {
        ...properties.cnpj,
        required,
      },
      //
      endereco: {
        ...properties.endereco,
        required,
      },
      modalidades: {
        ...properties.modalidades,
        required,
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusCreateDeclaration = () => {
  return {
    name: 'CampusCreate',
    properties: {
      ...CampusInputDeclaration(true).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusUpdateDeclaration = () => {
  return {
    name: 'CampusUpdate',
    properties: {
      ...CampusFindOneByIdInputDeclaration().properties,
      ...CampusInputDeclaration(false).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusDeleteOneByIdInputDeclaration = CampusFindOneByIdInputDeclaration;

export const CampusFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  CampusFindOneResultDeclaration,
  'CampusFindAllResult',
);

// ======================================
