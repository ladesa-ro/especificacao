import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import { IUsuarioFindOneResultDto, IUsuarioModel, UsuarioFindOneByIdInput, UsuarioFindOneResult } from '@/sisgea/autenticacao';
import { IDeclaration, PropertyTypes } from '../../../helpers';
import { AmbienteFindOneByIdInput, AmbienteFindOneResult, IAmbienteFindOneResultDto, IAmbienteModel } from '../ambiente';

export interface IReservaModel {
  // ID do registro.
  id: string;

  //

  // Situação da reserva.
  situacao: string;
  // Motivo da reserva.
  motivo: string | null;
  // Definir tipo da reserva.
  tipo: string | null;
  // Data e hora de início da reserva.
  dataInicio: IEntityDate;
  // Data e hora de término da reserva.
  dataTermino: IEntityDate | null;

  // Ambiente que foi reservado.
  ambiente: IAmbienteModel;
  // Usuário que fez a reserva.
  usuario: IUsuarioModel;

  //

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
}

export interface IReservaInputDto {
  situacao: IReservaModel['situacao'];
  motivo: IReservaModel['motivo'];
  tipo: IReservaModel['tipo'];
  dataInicio: IReservaModel['dataInicio'];
  dataTermino: IReservaModel['dataTermino'];

  ambiente: IObjectUuid;
  usuario: IObjectUuid;
}

export interface IReservaCreateDto extends IReservaInputDto {}

export interface IReservaUpdateDto {
  id: IReservaFindOneByIdInputDto['id'];

  situacao?: IReservaInputDto['situacao'];
  motivo?: IReservaInputDto['motivo'];
  tipo?: IReservaInputDto['tipo'];
  dataInicio?: IReservaInputDto['dataInicio'];
  dataTermino?: IReservaInputDto['dataTermino'];

  ambiente?: IObjectUuid;
  usuario?: IObjectUuid;
}

export interface IReservaFindOneByIdInputDto {
  id: IReservaModel['id'];
}

export interface IReservaFindOneResultDto {
  id: IReservaFindOneByIdInputDto['id'];

  situacao: IReservaModel['situacao'];
  motivo: IReservaModel['motivo'];
  tipo: IReservaModel['tipo'];
  dataInicio: IReservaModel['dataInicio'];
  dataTermino: IReservaModel['dataTermino'];

  usuario: IUsuarioFindOneResultDto;
  ambiente: IAmbienteFindOneResultDto;
}

export interface IReservaFindAllResultDto extends IPaginatedResultDto<IReservaFindOneResultDto> {}

export interface IReservaDeleteOneByIdInputDto extends IReservaFindOneByIdInputDto {
  id: string;
}

// =================================================================

export const ReservaFindOneByIdInput = ObjectUuid;

export const Reserva = () => {
  return {
    name: 'Reserva',

    properties: {
      ...ReservaFindOneByIdInput().properties,

      situacao: {
        // string
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Situação da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      motivo: {
        // string | null
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Motivo da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      tipo: {
        // string | null
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Definir tipo da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      dataInicio: {
        // IEntityDate
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data e hora de início da reserva.',
        validator: ({ yup }) => yup.mixed(),
      },

      dataTermino: {
        // IEntityDate | null
        nullable: true,
        type: PropertyTypes.DATE_TIME,
        description: 'Data e hora de término da reserva.',
        validator: ({ yup }) => yup.mixed(),
      },

      usuario: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: UsuarioFindOneByIdInput,
          description: 'Usuário que fez a reserva.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: UsuarioFindOneResult,
          description: 'Usuário que fez a reserva.',
        },
      },

      ambiente: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: AmbienteFindOneByIdInput,
          description: 'Ambiente que foi reservado.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: AmbienteFindOneResult,
          description: 'Ambiente que foi reservado.',
        },
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const ReservaFindOneResult = () => {
  const { properties } = Reserva();

  return {
    name: 'ReservaFindOneResult',
    partialOf: Reserva as any,

    properties: {
      id: properties.id,
      //
      situacao: properties.situacao,
      motivo: properties.motivo,
      tipo: properties.tipo,
      dataInicio: properties.dataInicio,
      dataTermino: properties.dataTermino,
      usuario: properties.usuario,
      ambiente: properties.ambiente,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
};

export const ReservaFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(ReservaFindOneResult, 'ReservaFindAllResult');

export const ReservaInput = (required: boolean) => {
  const { properties } = Reserva();

  return {
    name: 'ReservaInput',
    properties: {
      situacao: {
        ...properties.situacao,
        required,
      },
      motivo: {
        ...properties.motivo,
        required,
      },
      tipo: {
        ...properties.tipo,
        required,
      },
      dataInicio: {
        ...properties.dataInicio,
        required,
      },
      dataTermino: {
        ...properties.dataTermino,
        required,
      },
      usuario: {
        ...properties.usuario,
        required,
      },
      ambiente: {
        ...properties.ambiente,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const ReservaUpdate = () => {
  return {
    name: 'ReservaUpdate',
    properties: {
      ...ReservaFindOneByIdInput().properties,
      ...ReservaInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const ReservaCreate = () => {
  return {
    name: 'ReservaCreate',
    properties: {
      ...ReservaInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const ReservaDeleteOneByIdInput = ReservaFindOneByIdInput;

// =================================================================
