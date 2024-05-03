import { DatedObjectDeclarationFactory, IEntityDate, ObjectId, ObjectUuid } from '@/core';
import * as SpecHelpers from '@/helpers';
import { CidadeFindOneResult, ICidadeFindOneByIdInputDto, ICidadeFindOneResultDto, ICidadeModel } from '../cidade';

// =================================================================

export type IEnderecoModel = {
  id: string;
  //
  cep: string;
  logradouro: string;
  numero: number;
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
  numero: number;
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
  numero: number;
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

export const Endereco = () => {
  return {
    name: 'Endereco',

    properties: {
      //
      ...ObjectUuid().properties,
      //

      cep: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CEP do Endereço.',
        nullable: false,
        validator: ({ custom }) => custom.cep().required().nonNullable(),
      },

      logradouro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Logradouro do Endereço.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      numero: {
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'Número do Endereço.',
        nullable: false,
        validator: ({ custom }) => custom.number().integer().positive(),
      },

      bairro: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Bairro do Endereço.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      complemento: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Complemento do Endereço.',
        nullable: true,
        validator: ({ custom }) =>
          custom
            .string()
            .nullable()
            .default(() => null),
      },

      pontoReferencia: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Ponto de referência do Endereço.',
        nullable: true,
        validator: ({ custom }) =>
          custom
            .string()
            .nullable()
            .default(() => null),
      },

      cidade: SpecHelpers.Mixed({
        required: true,
        nullable: false,
        input: ObjectId,
        output: CidadeFindOneResult as any,
        description: 'Cidade do Endereço.',
        validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
      }),

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const EnderecoFindOneByIdInput = ObjectUuid;

export const EnderecoFindOneResult = () => {
  const { properties } = Endereco();

  return {
    name: 'EnderecoFindOneResult',
    partialOf: Endereco as any,

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
  } satisfies SpecHelpers.IDeclaration;
};

export const EnderecoInput = (required: boolean = true) => {
  const { properties } = Endereco();

  return {
    name: 'EnderecoInput',

    properties: {
      cep: {
        ...properties.cep,
        required,
      },
      logradouro: {
        ...properties.logradouro,
        required,
      },
      numero: {
        ...properties.numero,
        required,
      },
      bairro: {
        ...properties.bairro,
        required,
      },
      complemento: {
        ...properties.complemento,
        required,
      },
      pontoReferencia: {
        ...properties.pontoReferencia,
        required,
      },
      cidade: {
        ...properties.cidade,
        required,
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const EnderecoCreate = () => {
  return {
    name: 'EnderecoCreate',

    properties: {
      ...EnderecoInput(true).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};
