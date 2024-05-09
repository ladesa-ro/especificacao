import { IPaginatedResultDto, ObjectUuid, PaginatedResultDtoDeclarationFactoryBuilder } from '@/core';
import * as SpecHelpers from '@/helpers';
import { Estado, IEstadoFindOneResultDto, IEstadoModel } from '../estado';

// ======================================

export type ICidadeModel = {
  id: number;
  nome: string;
  estado: IEstadoModel;
};

export type ICidadeFindOneByIdInputDto = Pick<ICidadeModel, 'id'>;

export type ICidadeFindOneResultDto = {
  id: number;
  nome: string;
  estado: IEstadoFindOneResultDto;
};

export type ICidadeFindAllResultDto = IPaginatedResultDto<ICidadeFindOneResultDto>;

// ======================================

export const Cidade = () => {
  return {
    name: 'Cidade',

    properties: {
      //
      id: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.INTEGER,
        description: 'ID IBGE da Cidade.',
      },
      //

      nome: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome oficial da Cidade.',
      },

      estado: {
        nullable: false,
        type: Estado as any,
        description: 'Estado da Cidade.',
      },
    },
  };
};
export const CidadeFindOneByIdInput = ObjectUuid;

export const CidadeFindOneResult = () => {
  const { properties } = Cidade();

  return {
    name: 'CidadeFindOneResult',
    partialOf: Cidade as any,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      estado: properties.estado,
      //
    },
  };
};

export const CidadeFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(CidadeFindOneResult, 'CidadeFindAllResult');

// ======================================
