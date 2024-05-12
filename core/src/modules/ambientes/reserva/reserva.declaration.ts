import {
  DatedObject,
  IEntityDate,
  IEntityDateNullable,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import { IUsuarioFindOneResultDto, IUsuarioModel, UsuarioFindOneResult } from '@/sisgea/autenticacao';
import { IDeclaration, Mixed, PropertiesRequireness } from '../../../legacy/helpers';
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
  dataTermino: IEntityDateNullable;

  // Ambiente que foi reservado.
  ambiente: IAmbienteModel;
  // Usuário que fez a reserva.
  usuario: IUsuarioModel;

  //

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
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
        type: 'string',
        description: 'Situação da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      motivo: {
        // string | null
        nullable: true,
        type: 'string',
        description: 'Motivo da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      tipo: {
        // string | null
        nullable: true,
        type: 'string',
        description: 'Definir tipo da reserva.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      dataInicio: {
        // IEntityDate
        nullable: false,
        type: 'date-time',
        description: 'Data e hora de início da reserva.',
        validator: ({ yup }) => yup.mixed(),
      },

      dataTermino: {
        nullable: true,
        type: 'date-time',
        description: 'Data e hora de término da reserva.',
        validator: ({ yup }) => yup.mixed(),
      },

      usuario: Mixed({
        required: true,
        nullable: false,
        input: ObjectUuid,
        output: UsuarioFindOneResult as any,
        description: 'Usuário que fez a reserva.',
      }),

      ambiente: Mixed({
        required: true,
        nullable: false,
        input: AmbienteFindOneByIdInput,
        output: AmbienteFindOneResult as any,
        description: 'Ambiente que foi reservado.',
      }),

      ...DatedObject().properties,
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
      ...PropertiesRequireness(
        {
          situacao: properties.situacao,
          motivo: properties.motivo,
          tipo: properties.tipo,
          dataInicio: properties.dataInicio,
          dataTermino: properties.dataTermino,
          usuario: properties.usuario,
          ambiente: properties.ambiente,
        },
        required,
      ),
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
