import {
    DatedObjectDeclarationFactory,
    IEntityDate,
    IObjectUuid,
    IPaginatedResultDto,
    ObjectUuidDeclarationFactory,
    PaginatedResultDtoDeclarationFactoryBuilder,
  } from '@/core';
  import * as SpecHelpers from '@/helpers';
  import { CampusDeclarationFactory, ICampusFindOneResultDto, ICampusModel } from '@/sisgea/ambientes/campus';

  import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeDeclarationFactory } from '@/sisgea/ensino/modalidade';
  
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
  
  export const CalendarioLetivoFindOneByIdInputDeclarationFactory = ObjectUuidDeclarationFactory;
  
  export const CalendarioLetivoDeclarationFactory = SpecHelpers.DeclareEntity(() => {
    return {
      name: 'Calendario Letivo',
  
      properties: {
        //
  
        ...SpecHelpers.GetDeclarationProperties(CalendarioLetivoFindOneByIdInputDeclarationFactory),
  
        //
  
        nome: {
          type: SpecHelpers.PropertyTypes.STRING,
          description: 'Nome do calendario letivo.',
          nullable: false,
        },
  
        ano: {
          type: SpecHelpers.PropertyTypes.STRING,
          description: 'Ano do calendario letivo.',
          nullable: false,
        },
  
        campus: {
          type: SpecHelpers.PropertyTypes.MIXED,
          input: {
            nullable: false,
            type: ObjectUuidDeclarationFactory,
            description: 'Campus que o calendario pertence.',
          },
          output: {
            nullable: false,
            type: CampusDeclarationFactory,
            description: 'Campus que o calendario pertence.',
          },
        },
  
        modalidade: {
          type: SpecHelpers.PropertyTypes.MIXED,
          input: {
            nullable: false,
            type: ObjectUuidDeclarationFactory,
            description: 'Modalidade a que o calendario pertence.',
          },
          output: {
            nullable: false,
            type: ModalidadeDeclarationFactory,
            description: 'Modalidade a que o calendario pertence.',
          },
        },
  
  
        //
  
        ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),
  
        //
      },
    };
  });
  
  export const CalendarioLetivoFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(CalendarioLetivoDeclarationFactory);
  
    return {
      name: 'CalendarioLetivoFindOneResult',
      partialOf: CalendarioLetivoDeclarationFactory,
  
      properties: {
        id: properties.id,
        //
        nome: properties.nome,
        ano: properties.ano,
        campus: properties.campus,
        modalidade: properties.modalidade,
        //
        dateCreated: properties.dateCreated,
        dateUpdated: properties.dateUpdated,
        dateDeleted: properties.dateDeleted,
      },
    };
  });
  
  export const CalendarioLetivoFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
    CalendarioLetivoFindOneResultDeclaration,
    'CalendarioLetivoFindAllResult',
  );
  
  export const CalendarioLetivoInputDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(CalendarioLetivoDeclarationFactory);
  
    return {
      name: 'CalendarioLetivoInput',
  
      properties: {
        nome: properties.nome,
        nomeAbreviado: properties.ano,
        campus: properties.campus,
        modalidade: properties.modalidade,
      },
    };
  });
  
  export const CalendarioLetivoUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(CalendarioLetivoDeclarationFactory);
  
    return {
      name: 'CalendarioLetivoUpdate',
  
      properties: {
        id: properties.id,
        //
        nome: {
          ...properties.nome,
          required: false,
        },
        ano: {
          ...properties.ano,
          required: false,
        },
        campus: {
          ...properties.campus.input,
          required: false,
        },
        modalidade: {
          ...properties.modalidade.input,
          required: false,
        },
      },
    };
  });
  
  export const CalendarioLetivoDeleteOneByIdInputDeclarationFactory = ObjectUuidDeclarationFactory;
  
  // =================================================================
  