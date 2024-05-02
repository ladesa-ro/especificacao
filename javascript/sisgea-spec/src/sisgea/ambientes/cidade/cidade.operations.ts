import { IOperation, PropertyTypes } from '@/helpers';
import { PaginatedInput } from '../../../core';
import { CidadeFindAllResult, CidadeFindOneByIdInput, CidadeFindOneResult } from './cidade.declaration';

export const CidadeFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'CidadeFindOneById',
    description: 'Realiza a consulta a uma cidade por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CidadeFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CidadeFindOneResult,
        description: 'Cidade encontrado.',
      },
    },
  } satisfies IOperation;
};

export const CidadeFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'CidadeFindAll',
    description: 'Lista de todos as cidades cadastradas no sistema.',

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
        dto: CidadeFindAllResult,
        description: 'Resultados da busca de cidades.',
      },
    },
  } satisfies IOperation;
};
