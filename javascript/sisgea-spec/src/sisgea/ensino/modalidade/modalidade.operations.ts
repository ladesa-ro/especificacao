import { IOperation } from '@/helpers';
import { ObjectUuid, PaginatedInput } from '../../../core';
import {
  ModalidadeCreate,
  ModalidadeFindAllResult,
  ModalidadeFindOneByIdInput,
  ModalidadeFindOneResult,
  ModalidadeUpdate,
} from './modalidade.declaration';

export const ModalidadeCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'ModalidadeCreate',
    description: 'Registra uma modalidade no sistema.',

    input: {
      strategy: 'dto',
      body: ModalidadeCreate,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindOneResult,
        description: 'Modalidade criada.',
      },
    },
  } satisfies IOperation;
};

export const ModalidadeFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'ModalidadeFindOneById',
    description: 'Realiza a consulta a uma modalidade por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: ModalidadeFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindOneResult,
        description: 'Modalidade encontrada.',
      },
    },
  } satisfies IOperation;
};

export const ModalidadeDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'ModalidadeDelete',
    description: 'Realiza a remoção de uma modalidade por ID.',

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
        description: 'Modalidade removida.',
      },
    },
  } satisfies IOperation;
};

export const ModalidadeUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'ModalidadeUpdate',
    description: 'Realiza a alteração de uma modalidade.',

    input: {
      strategy: 'dto',
      body: ModalidadeUpdate,
      params: {
        id: ModalidadeFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindOneResult,
        description: 'Modalidade atualizada.',
      },
    },
  } satisfies IOperation;
};

export const ModalidadeFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'ModalidadeFindAll',
    description: 'Lista de todos as modalidades cadastradas no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindAllResult,
        description: 'Resultados da busca de modalidades.',
      },
    },
  } satisfies IOperation;
};
