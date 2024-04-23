import { IPaginatedResultDto, ObjectUuidDeclarationFactory, PaginatedResultDtoDeclarationFactoryBuilder } from '@/core';
import * as SpecHelpers from '@/helpers';
import { EstadoDeclarationFactory, IEstadoFindOneResultDto, IEstadoModel } from '../estado';

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

export const CidadeDeclarationFactory = SpecHelpers.DeclareEntity(() => {
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
        type: EstadoDeclarationFactory,
        description: 'Estado da Cidade.',
      },
    },
  };
});
export const CidadeFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const CidadeFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CidadeDeclarationFactory);

  return {
    name: 'CidadeFindOneResult',
    partialOf: CidadeDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      estado: properties.estado,
      //
    },
  };
});

export const CidadeFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  CidadeFindOneResultDeclaration,
  'CidadeFindAllResult',
);

// ======================================
