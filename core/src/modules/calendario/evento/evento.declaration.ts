import {
  DatedObject,
  IEntityDate,
  IEntityDateNullable,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
  Validator,
} from '../../../legacy/core';
import { IDeclaration, Mixed, PropertiesRequireness } from '../../../legacy/helpers';
import { CalendarioLetivoFindOneResult, ICalendarioLetivoModel } from '../calendario-letivo';

export interface IEventoModel {
  //
  id: string;
  //
  nome: string;
  dataInicio: IEntityDate;
  dataTermino: IEntityDate;
  cor: string;
  //
  calendario: ICalendarioLetivoModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
  //
}

export interface IEventoDeleteOneByIdInputDto {
  id: IEventoModel['id'];
}

export interface IEventoFindAllResultDto extends IPaginatedResultDto<IEventoFindOneResultDto> {}

export interface IEventoFindOneByIdInputDto {
  id: IEventoModel['id'];
}

export interface IEventoFindOneResultDto {
  id: IEventoModel['id'];
  //
  nome: IEventoModel['nome'];
  dataInicio: IEventoModel['dataInicio'];
  dataTermino: IEventoModel['dataTermino'];
  cor: IEventoModel['cor'];
  //
  calendario: ICalendarioLetivoModel;
  //
}

export interface IEventoCreateDto extends IEventoInputDto {}

export interface IEventoInputDto {
  //
  nome: IEventoModel['nome'];
  dataInicio: IEventoModel['dataInicio'];
  dataTermino: IEventoModel['dataTermino'];
  cor: IEventoModel['cor'];
  //
  calendario: ICalendarioLetivoModel;
  //
}

export interface IEventoUpdateDto {
  //
  id: string;
  //
  nome: IEventoModel['nome'] | undefined;
  dataInicio: IEventoModel['dataInicio'] | undefined;
  dataTermino: IEventoModel['dataTermino'] | undefined;
  cor: IEventoModel['cor'] | null | undefined;
  //
  calendario: IObjectUuid | undefined;
  //
}

// =================================================================

export const EventoFindOneByIdInput = ObjectUuid;

export const Evento = () => {
  return {
    name: 'Evento',

    properties: {
      //
      ...EventoFindOneByIdInput().properties,
      //

      nome: {
        nullable: false,
        type: 'string',
        description: 'Nome do evento.',
        validator: Validator(({ yup }) => yup.string().required().nonNullable()),
      },

      dataInicio: {
        nullable: false,
        type: 'date-time',
        description: 'Data de início do evento.',
      },

      dataTermino: {
        nullable: true,
        type: 'date-time',
        description: 'Data de término do evento.',
      },

      cor: {
        nullable: true,
        type: 'string',
        description: 'Cor do evento.',
      },

      calendario: Mixed({
        nullable: false,
        input: ObjectUuid,
        output: CalendarioLetivoFindOneResult as any,
        description: 'Calendário vinculado ao evento.',
      }),

      //
      ...DatedObject().properties,
      //
    },
  } satisfies IDeclaration;
};

export const EventoFindOneResult = () => {
  const { properties } = Evento();

  return {
    name: 'EventoFindOneResult',
    partialOf: Evento as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      dataInicio: properties.dataInicio,
      dataTermino: properties.dataTermino,
      cor: properties.cor,
      //
      calendario: properties.calendario,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const EventoFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(EventoFindOneResult, 'EventoFindAllResult');

export const EventoInput = (required: boolean) => {
  const { properties } = Evento();

  return {
    name: 'EventoInput',

    properties: {
      ...PropertiesRequireness(
        {
          nome: properties.nome,
          dataInicio: properties.dataInicio,
          dataTermino: properties.dataTermino,
          cor: properties.cor,
          //
          calendario: properties.calendario,
        },
        required,
      ),
    },
  } satisfies IDeclaration;
};

export const EventoCreate = () => {
  return {
    name: 'EventoCreate',

    properties: {
      ...EventoInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const EventoUpdate = () => {
  return {
    name: 'EventoUpdate',

    properties: {
      ...EventoFindOneByIdInput().properties,
      ...EventoInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const EventoDeleteOneByIdInputDeclarationFactory = EventoFindOneByIdInput;

// =================================================================