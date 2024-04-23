import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeDeclarationFactory } from '@/sisgea/ensino';
import { EnderecoDeclarationFactory, IEnderecoFindOneByIdInputDto, IEnderecoFindOneResultDto, IEnderecoModel } from '../endereco';

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
  endereco: IEnderecoFindOneByIdInputDto;
  //
};

export type ICampusCreateDto = SpecHelpers.InferFactoryEntityType<typeof CampusCreateDeclaration>;
export type ICampusUpdateDto = SpecHelpers.InferFactoryEntityType<typeof CampusUpdateDeclaration>;

// ================================================

export const CampusDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Campus',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(CampusFindOneByIdInputDeclaration),
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
          type: EnderecoDeclarationFactory,
        },
      },

      modalidades: {
        arrayOf: true,
        nullable: false,
        description: 'Modalidades oferecidas pelo Campus.',
        type: ModalidadeDeclarationFactory,
      },

      //

      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),

      //
    },
  };
});

export const CampusFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusFindOneResult',
    partialOf: CampusDeclarationFactory,

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
  };
});

export const CampusInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusInput',

    properties: {
      nomeFantasia: properties.nomeFantasia,
      razaoSocial: properties.razaoSocial,
      apelido: properties.apelido,
      cnpj: properties.cnpj,
      //
      endereco: properties.endereco,
    },
  };
});

export const CampusCreateDeclaration = SpecHelpers.DeclareEntity(() => {
  return {
    ...SpecHelpers.GetDeclaration(CampusInputDeclaration),
  };
});

export const CampusUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusUpdate',

    properties: {
      id: properties.id,
      //
      nomeFantasia: {
        ...properties.nomeFantasia,
        required: false,
      },
      razaoSocial: {
        ...properties.razaoSocial,
        required: false,
      },
      apelido: {
        ...properties.apelido,
        required: false,
      },
      cnpj: {
        ...properties.cnpj,
        required: false,
      },
      //
      endereco: {
        ...properties.endereco,
        required: false,
      },
    },
  };
});

export const CampusDeleteOneByIdInputDeclaration = CampusFindOneByIdInputDeclaration;

export const CampusFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  CampusFindOneResultDeclaration,
  'CampusFindAllResult',
);

// ======================================
