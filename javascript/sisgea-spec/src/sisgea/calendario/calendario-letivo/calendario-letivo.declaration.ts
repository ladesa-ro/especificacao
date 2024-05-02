import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import { CampusFindOneResult, ICampusFindOneResultDto, ICampusModel } from '@/sisgea/ambientes/campus';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeFindOneResult } from '@/sisgea/ensino/modalidade';
import { IDeclaration, PropertyTypes } from '../../../helpers';

// =================================================================

export type ICalendarioLetivoModel = {
  id: string;
  //
  nome: string;
  ano: number;
  campus: ICampusModel;
  modalidade: IModalidadeModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

export type ICalendarioLetivoInputDto = {
  nome: ICalendarioLetivoModel['nome'];
  ano: ICalendarioLetivoModel['ano'];
  //
  campus: IObjectUuid;
  modalidade: IObjectUuid;
};

export type ICalendarioLetivoFindOneResultDto = {
  id: ICalendarioLetivoModel['id'];
  //
  nome: ICalendarioLetivoModel['nome'];
  ano: ICalendarioLetivoModel['ano'];
  //
  campus: ICampusFindOneResultDto;
  modalidade: IModalidadeFindOneResultDto;
};

// =================================================================
export type ICalendarioLetivoFindOneByIdInputDto = { id: ICalendarioLetivoModel['id'] };
export type ICalendarioLetivoFindAllResultDto = IPaginatedResultDto<ICalendarioLetivoFindOneResultDto>;
// =================================================================
export type ICalendarioLetivoCreateDto = ICalendarioLetivoInputDto;
export type ICalendarioLetivoUpdateDto = ICalendarioLetivoFindOneByIdInputDto & Partial<Omit<ICalendarioLetivoInputDto, 'id'>>;
// =================================================================
export type ICalendarioLetivoDeleteOneByIdInputDto = ICalendarioLetivoFindOneByIdInputDto;
// =================================================================

export const CalendarioLetivoFindOneByIdInput = ObjectUuid;

export const CalendarioLetivo = () => {
  return {
    name: 'Calendario Letivo',

    properties: {
      ...CalendarioLetivoFindOneByIdInput().properties,

      nome: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Nome do calendário letivo.',
      },

      ano: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Ano do calendário letivo.',
      },

      campus: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: ObjectUuid,
          description: 'Campus que o calendário pertence.',
        },
        output: {
          required: true,
          nullable: false,
          type: CampusFindOneResult as any,
          description: 'Campus que o calendário pertence.',
        },
      },

      modalidade: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: ObjectUuid,
          description: 'Modalidade a que o calendário pertence.',
        },
        output: {
          required: true,
          nullable: false,
          type: ModalidadeFindOneResult as any,
          description: 'Modalidade a que o calendário pertence.',
        },
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const CalendarioLetivoFindOneResult = () => {
  const { properties } = CalendarioLetivo();

  return {
    name: 'CalendarioLetivoFindOneResult',
    partialOf: CalendarioLetivo as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      ano: properties.ano,
      //
      campus: properties.campus,
      modalidade: properties.modalidade,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const CalendarioLetivoFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(
  CalendarioLetivoFindOneResult,
  'CalendarioLetivoFindAllResult',
);

export const CalendarioLetivoInput = (required: boolean) => {
  const { properties } = CalendarioLetivo();

  return {
    name: 'CalendarioLetivoInput',

    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      nomeAbreviado: {
        ...properties.ano,
        required,
      },
      campus: {
        ...properties.campus,
        required,
      },
      modalidade: {
        ...properties.modalidade,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const CalendarioLetivoCreate = () => {
  return {
    name: 'CalendarioLetivoCreate',

    properties: {
      ...CalendarioLetivoInput(true).properties,
    },
  };
};

export const CalendarioLetivoUpdate = () => {
  return {
    name: 'CalendarioLetivoUpdate',

    properties: {
      ...CalendarioLetivoFindOneByIdInput().properties,
      ...CalendarioLetivoInput(false).properties,
    },
  };
};

export const CalendarioLetivoDeleteOneByIdInputDeclarationFactory = ObjectUuid;

// =================================================================
