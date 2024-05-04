import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '../../../core';
import { IDeclaration, Mixed, PropertiesRequireness, PropertyTypes } from '../../../helpers';
import { IVinculoFindOneResultDto, IVinculoModel, VinculoFindOneResult } from '../../autenticacao';
import { DiarioFindOneByIdInput, IDiarioFindOneResultDto, IDiarioModel } from '../diario/diario.declaration';

export interface IDiarioProfessorModel {
  id: string;

  //
  situacao: boolean;
  diario: IDiarioModel;
  vinculo: IVinculoModel;
  //

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
}

export interface IDiarioProfessorFindOneByIdInputDto {
  id: IDiarioProfessorModel['id'];
}

export interface IDiarioProfessorFindAllResultDto extends IPaginatedResultDto<IDiarioProfessorFindOneResultDto> {}

export interface IDiarioProfessorFindOneResultDto {
  id: IDiarioProfessorModel['id'];

  situacao: IDiarioProfessorModel['situacao'];

  diario: IDiarioFindOneResultDto;
  vinculo: IVinculoFindOneResultDto;
}

export interface IDiarioProfessorCreateDto extends IDiarioProfessorInputDto {}

export interface IDiarioProfessorInputDto {
  situacao: IDiarioProfessorModel['situacao'];

  diario: IObjectUuid;
  vinculo: IObjectUuid;
}

export interface IDiarioProfessorUpdateDto {
  id: IDiarioProfessorModel['id'];
  //
  situacao: IDiarioProfessorModel['situacao'] | undefined;
  diario: IDiarioProfessorModel['diario'] | undefined;
  vinculo: IDiarioProfessorModel['vinculo'] | undefined;
  //
}

export interface IDiarioProfessorDeleteOneByIdInputDto extends IDiarioProfessorFindOneByIdInputDto {}

//

// =================================================================

export const DiarioProfessorFindOneByIdInput = ObjectUuid;

export const DiarioProfessor = () => {
  return {
    name: 'DiarioProfessor',

    properties: {
      ...DiarioProfessorFindOneByIdInput().properties,

      situacao: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Situação do vínculo.',
      },

      vinculo: Mixed({
        required: true,
        nullable: false,
        input: ObjectUuid,
        output: VinculoFindOneResult as any,
        description: 'Vínculo do usuário ao campus.',
        validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
      }),

      diario: Mixed({
        required: true,
        nullable: false,
        description: 'Diário vinculado.',
        input: ObjectUuid,
        output: DiarioFindOneByIdInput as any,
        validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
      }),

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const DiarioProfessorFindOneResult = () => {
  const { properties } = DiarioProfessor();

  return {
    name: 'DiarioProfessorFindOneResult',
    partialOf: DiarioProfessor as any,

    properties: {
      id: properties.id,
      //
      situacao: properties.situacao,
      diario: properties.diario,
      vinculo: properties.vinculo,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const DiarioProfessorInput = (required: boolean) => {
  const { properties } = DiarioProfessor();

  return {
    name: 'DiarioProfessorInput',

    properties: {
      ...PropertiesRequireness(
        {
          situacao: properties.situacao,
          diario: properties.diario,
          vinculo: properties.vinculo,
        },
        required,
      ),
    },
  } satisfies IDeclaration;
};

export const DiarioProfessorCreate = () => {
  return {
    name: 'DiarioProfessorCreate',

    properties: {
      ...DiarioProfessorInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const DiarioProfessorUpdate = () => {
  return {
    name: 'DiarioProfessorUpdate',

    properties: {
      ...DiarioProfessorFindOneByIdInput().properties,
      ...DiarioProfessorInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const DiarioProfessorFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(
  DiarioProfessorFindOneResult,
  'DiarioProfessorFindAllResult',
);

export const DiarioProfessorDeleteOneByIdInput = DiarioProfessorFindOneByIdInput;

// =================================================================
