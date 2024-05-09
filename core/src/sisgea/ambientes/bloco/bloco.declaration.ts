import {
  DatedObjectDeclarationFactory,
  IDatedObject,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { IImagemFindOneResultDto, IImagemModel, ImagemFindOneResult } from '@/sisgea/base';
import { Ambiente, IAmbienteModel } from '../ambiente';
import { CampusFindOneResult, ICampusFindOneResultDto, ICampusModel } from '../campus';

export interface IBlocoModel extends IObjectUuid, IDatedObject {
  // =================================

  id: string;

  // =================================

  nome: string;
  codigo: string;

  // =================================

  campus: ICampusModel;
  imagemCapa: IImagemModel | null;

  // =================================

  ambientes: IAmbienteModel[];

  // =================================

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;

  // =================================
}

export interface IBlocoFindOneByIdInputDto extends Pick<IBlocoModel, 'id'> {
  id: string;
}

export interface IBlocoFindOneResultDto extends Pick<IBlocoModel, 'id' | 'nome' | 'codigo'> {
  campus: ICampusFindOneResultDto;
  imagemCapa: IImagemFindOneResultDto | null;
}

export interface IBlocoDeleteOneByIdInputDto extends IBlocoFindOneByIdInputDto {
  id: string;
}

export interface IBlocoFindAllResultDto extends IPaginatedResultDto<IBlocoFindOneResultDto> {}

export interface IBlocoInputDto {
  nome: string;
  codigo: string;
  campus: IObjectUuid;
}

export type IBlocoCreateDto = IBlocoInputDto;

export type IBlocoUpdateDto = {
  id: string;
  nome: string | undefined;
  codigo: string | undefined;
  // campus: IObjectUuid | undefined;
};

// ==================================

export const BlocoFindOneByIdInput = ObjectUuid;

export const Bloco = () => {
  return {
    name: 'Bloco',

    properties: {
      //
      ...BlocoFindOneByIdInput().properties,
      //

      nome: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do Bloco.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      codigo: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Código do Bloco.',
        validator: ({ custom }) => custom.string().required().nonNullable(),
      },

      campus: SpecHelpers.Mixed({
        nullable: false,
        input: ObjectUuid,
        output: CampusFindOneResult as any,
        description: 'Campus do Bloco.',
      }),

      imagemCapa: SpecHelpers.Mixed({
        nullable: true,
        input: ObjectUuid,
        output: ImagemFindOneResult as any,
        description: 'Imagem do Bloco.',
      }),

      ambientes: {
        arrayOf: true,
        nullable: false,
        description: 'Ambientes do Bloco.',
        type: Ambiente as any,
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const BlocoFindOneResult = () => {
  const { properties } = Bloco();

  return {
    name: 'BlocoFindOneResult',

    partialOf: Bloco as any,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      codigo: properties.codigo,
      //
      campus: properties.campus,
      imagemCapa: properties.imagemCapa,
      ambientes: properties.ambientes,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const BlocoInput = (required: boolean) => {
  const { properties } = Bloco();

  return {
    name: 'BlocoInput',

    properties: {
      ...SpecHelpers.PropertiesRequireness(
        {
          nome: properties.nome,
          codigo: properties.codigo,
        },
        required,
      ),
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const BlocoCreate = () => {
  const { properties } = Bloco();

  return {
    name: 'BlocoCreate',
    properties: {
      ...BlocoInput(true).properties,
      ...SpecHelpers.PropertiesRequireness({ campus: properties.campus }, true),
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const BlocoUpdate = () => {
  return {
    name: 'BlocoUpdate',
    properties: {
      ...BlocoFindOneByIdInput().properties,
      ...BlocoInput(false).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const BlocoDeleteOneByIdInput = BlocoFindOneByIdInput;

export const BlocoFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(BlocoFindOneResult, 'BlocoFindAllResult');
