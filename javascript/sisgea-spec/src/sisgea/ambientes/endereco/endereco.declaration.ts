import { DatedObjectDeclarationFactory, IEntityDate, ObjectIdDeclarationFactory, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';
import { CidadeDeclarationFactory, ICidadeFindOneByIdInputDto, ICidadeFindOneResultDto, ICidadeModel } from '../cidade';

// =================================================================

export type IEnderecoModel = {
  id: string;
  //
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string | null;
  pontoReferencia: string | null;
  //
  cidade: ICidadeModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

export type IEnderecoFindOneByIdInputDto = Pick<IEnderecoModel, 'id'>;

export type IEnderecoFindOneResultDto = {
  id: string;
  //
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string | null;
  pontoReferencia: string | null;
  //
  cidade: ICidadeFindOneResultDto;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

export type IEnderecoInputDto = {
  id: string;
  //
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string | null;
  pontoReferencia: string | null;
  //
  cidade: ICidadeFindOneByIdInputDto;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

// =================================================================

export const EnderecoDeclarationFactory = () => {
  return {
    name: 'Endereco',

    properties: {
      //
      ...ObjectUuidDeclarationFactory().properties,
      //

      cep: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CEP do Endereço.',
        nullable: false,
      },

      logradouro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Logradouro do Endereço.',
        nullable: false,
      },

      numero: {
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Número do Endereço.',
        nullable: false,
      },

      bairro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Bairro do Endereço.',
        nullable: false,
      },

      complemento: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Complemento do Endereço.',
        nullable: true,
      },

      pontoReferencia: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Ponto de referência do Endereço.',
        nullable: true,
      },

      cidade: {
        nullable: false,
        type: CidadeDeclarationFactory,
        description: 'Cidade do Endereço.',
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  };
};

export const EnderecoFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const EnderecoFindOneResultDeclaration = () => {
  const { properties } = EnderecoDeclarationFactory();

  return {
    name: 'EnderecoFindOneResult',
    partialOf: EnderecoDeclarationFactory as any,

    properties: {
      id: properties.id,
      //
      cep: properties.cep,
      logradouro: properties.logradouro,
      numero: properties.numero,
      bairro: properties.bairro,
      complemento: properties.complemento,
      pontoReferencia: properties.pontoReferencia,
      //
      cidade: properties.cidade,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
};

export const EnderecoInputDeclaration = () => {
  const { properties } = EnderecoDeclarationFactory();

  return {
    name: 'EnderecoInput',

    properties: {
      cep: properties.cep,
      logradouro: properties.logradouro,
      numero: properties.numero,
      bairro: properties.bairro,
      complemento: properties.complemento,
      pontoReferencia: properties.pontoReferencia,
      cidade: {
        ...properties.cidade,
        type: ObjectIdDeclarationFactory,
      },
    },
  };
};
