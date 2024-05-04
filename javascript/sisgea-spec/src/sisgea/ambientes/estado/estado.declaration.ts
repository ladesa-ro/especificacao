import { IPaginatedResultDto, ObjectUuid, PaginatedResultDtoDeclarationFactoryBuilder } from '@/core';
import * as SpecHelpers from '@/helpers';

// ======================================

export type IEstadoModel = {
  id: number;
  nome: string;
  sigla: string;
};

export type IEstadoFindOneByIdInputDto = {
  id: number;
};

export type IEstadoFindOneByUfInputDto = {
  uf: IEstadoModel['sigla'];
};

export type IEstadoFindOneResultDto = {
  id: IEstadoModel['id'];
  nome: IEstadoModel['nome'];
  sigla: IEstadoModel['sigla'];
};

export type IEstadoFindAllResultDto = IPaginatedResultDto<IEstadoFindOneResultDto>;

// ======================================

export const Estado = () => {
  return {
    name: 'Estado',

    properties: {
      //
      id: {
        nullable: false,
        description: 'ID IBGE do Estado.',
        type: SpecHelpers.PropertyTypes.INTEGER,
      },
      //

      nome: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome oficial do Estado.',
      },

      sigla: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Sigla UF oficial do Estado.',
        validator: ({ custom }) =>
          custom
            .string()
            .length(2)
            .uppercase()
            .test('is-valid-uf', (value) => {
              if (typeof value === 'string') {
                return value.match(/^[a-zA-Z]{2}$/) !== null;
              }

              return false;
            }),
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const EstadoFindOneByIdInput = ObjectUuid;

export const EstadoFindOneByUfInput = () => {
  const { properties } = Estado();

  return {
    name: 'EstadoFindOneByUfInput',

    properties: {
      uf: properties.sigla,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const EstadoFindOneResult = () => {
  const { properties } = Estado();

  return {
    name: 'EstadoFindOneResult',
    partialOf: Estado as any,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      sigla: properties.sigla,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const EstadoFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(EstadoFindOneResult, 'EstadoFindAllResult');
// ======================================
