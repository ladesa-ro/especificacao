import { IOperation, PropertyTypes } from '@/helpers';
import { PaginatedInput } from '../../../core';
import { EstadoFindAllResult, EstadoFindOneByIdInput, EstadoFindOneByUfInput, EstadoFindOneResult } from './estado.declaration';

export const EstadoFindOneByUfOperator = () => {
  return {
    gql: 'query',

    name: 'EstadoFindOneByUf',
    description: 'Realiza a consulta a uma estado por sigla da UF.',

    input: {
      strategy: 'dto',
      params: {
        uf: EstadoFindOneByUfInput().properties.uf,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: EstadoFindOneResult,
        description: 'Estado encontrado.',
      },
    },
  } satisfies IOperation;
};

export const EstadoFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'EstadoFindOneById',
    description: 'Realiza a consulta a uma estado por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: EstadoFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: EstadoFindOneResult,
        description: 'Estado encontrado.',
      },
    },
  } satisfies IOperation;
};

export const EstadoFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'EstadoFindAll',
    description: 'Lista de todos as estados cadastradas no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
        'filter.estado.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Estado.',
        },
        'filter.estado.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Nome de Estado.',
        },
        'filter.estado.sigla': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Sigla de Estado.',
        },
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: EstadoFindAllResult,
        description: 'Resultados da busca de estados.',
      },
    },
  } satisfies IOperation;
};
