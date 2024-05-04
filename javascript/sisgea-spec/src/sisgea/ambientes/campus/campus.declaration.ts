import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { IModalidadeFindOneResultDto, IModalidadeModel, Modalidade } from '@/sisgea/ensino';
import { Endereco, EnderecoInput, IEnderecoFindOneResultDto, IEnderecoInputDto, IEnderecoModel } from '../endereco';

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

export const CampusFindOneByIdInput = ObjectUuid;

export const Campus = () => {
  return {
    name: 'Campus',

    properties: {
      //
      ...CampusFindOneByIdInput().properties,

      nomeFantasia: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome fantasia do Campus.',
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },
      //

      razaoSocial: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Razão social do Campus.',
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      apelido: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Apelido do Campus.',
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      cnpj: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CNPJ do Campus.',
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      endereco: SpecHelpers.Mixed({
        nullable: false,
        input: EnderecoInput,
        output: Endereco as any,
        description: 'Endereço do Campus.',
      }),

      modalidades: {
        arrayOf: true,
        nullable: false,
        description: 'Modalidades oferecidas pelo Campus.',
        type: Modalidade as any,
        validator: ({ yup, custom }) =>
          yup.array(custom.objectUuid({ nonNullable: true, optional: false })).test('', (arr) => {
            if (Array.isArray(arr)) {
              const validRefs = arr.map((i) => i?.id).filter((i) => i) as string[];
              const uniqueRefs = Array.from(new Set(validRefs));
              return uniqueRefs.length === arr.length;
            }
            return false;
          }),
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusFindOneResult = () => {
  const { properties } = Campus();

  return {
    name: 'CampusFindOneResult',
    partialOf: Campus as any,

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

export const CampusInput = (required: boolean) => {
  const { properties } = Campus();

  return {
    name: 'CampusInput',

    properties: {
      ...SpecHelpers.PropertiesRequireness(
        {
          nomeFantasia: properties.nomeFantasia,
          razaoSocial: properties.razaoSocial,
          apelido: properties.apelido,
          cnpj: properties.cnpj,
          endereco: properties.endereco,
          modalidades: properties.modalidades,
        },
        required,
      ),
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusCreate = () => {
  return {
    name: 'CampusCreate',
    properties: {
      ...CampusInput(true).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusUpdate = () => {
  return {
    name: 'CampusUpdate',
    properties: {
      ...CampusFindOneByIdInput().properties,
      ...CampusInput(false).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CampusDeleteOneByIdInput = CampusFindOneByIdInput;

export const CampusFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(CampusFindOneResult, 'CampusFindAllResult');

// ======================================
