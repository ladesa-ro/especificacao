import { IOperation, PropertyTypes } from '@/helpers';
import { ObjectUuid, PaginatedInput } from '../../../core';
import { CampusCreate, CampusFindAllResult, CampusFindOneByIdInput, CampusFindOneResult, CampusUpdate } from './campus.declaration';

export const CampusCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CampusCreate',
    description: 'Registra um campus no sistema.',

    input: {
      strategy: 'dto',
      body: CampusCreate,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CampusFindOneResult,
        description: 'Campus criado.',
      },
    },
  } satisfies IOperation;
};

export const CampusFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'CampusFindOneById',
    description: 'Realiza a consulta a um campus por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CampusFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CampusFindOneResult,
        description: 'Campus encontrado.',
      },
    },
  } satisfies IOperation;
};

export const CampusDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'CampusDelete',
    description: 'Realiza a remoção de um campus por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Campus removido.',
      },
    },
  } satisfies IOperation;
};

export const CampusUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CampusUpdate',
    description: 'Realiza a alteração de um campus.',

    input: {
      strategy: 'dto',
      body: CampusUpdate,
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CampusFindOneResult,
        description: 'Campus atualizado.',
      },
    },
  } satisfies IOperation;
};

export const CampusFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'CampusFindAll',
    description: 'Lista de todos os campi cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
        'filter.campus.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Campus.',
        },
        'filter.endereco.cidade.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Cidade.',
        },
        'filter.endereco.cidade.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Nome de Cidade.',
        },
        'filter.endereco.cidade.estado.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Estado.',
        },
        'filter.endereco.cidade.estado.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Nome de Estado.',
        },
        'filter.endereco.cidade.estado.sigla': {
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
        dto: CampusFindAllResult,
        description: 'Resultados da busca de campi.',
      },
    },
  } satisfies IOperation;
};
