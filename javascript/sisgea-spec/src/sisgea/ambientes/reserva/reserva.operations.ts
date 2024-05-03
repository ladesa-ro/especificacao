import { IOperation } from '@/helpers';
import { ObjectUuid, PaginatedInput } from '../../../core';
import { ReservaCreate, ReservaFindAllResult, ReservaFindOneByIdInput, ReservaFindOneResult, ReservaUpdate } from './reserva.declaration';

export const ReservaCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'ReservaCreate',
    description: 'Registra uma reserva no sistema.',

    input: {
      strategy: 'dto',
      body: ReservaCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ReservaFindOneResult as any,
        description: 'Reserva criada.',
      },
    },
  } satisfies IOperation;
};

export const ReservaFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'ReservaFindOneById',
    description: 'Realiza a consulta a uma reserva por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: ReservaFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ReservaFindOneResult as any,
        description: 'Reserva encontrada.',
      },
    },
  } satisfies IOperation;
};

export const ReservaDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'ReservaDelete',
    description: 'Realiza a remoção de uma reserva por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Reserva removida.',
      },
    },
  } satisfies IOperation;
};

export const ReservaUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'ReservaUpdate',
    description: 'Realiza a alteração de uma reserva.',

    input: {
      strategy: 'dto',
      body: ReservaUpdate as any,
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ReservaFindOneResult as any,
        description: 'Reserva atualizada.',
      },
    },
  } satisfies IOperation;
};

export const ReservaFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'ReservaFindAll',
    description: 'Lista de todos as reservas cadastradas no sistema.',

    input: {
      strategy: 'dto',
      query: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ReservaFindAllResult as any,
        description: 'Resultados da busca de reservas.',
      },
    },
  } satisfies IOperation;
};
