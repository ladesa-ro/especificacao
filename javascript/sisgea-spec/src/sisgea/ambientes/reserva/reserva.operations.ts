import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
import { ObjectUuid } from '../../../core';
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

export const ReservaFindOneByIdOperator = OperatorFindOne({
  name: 'ReservaFindOneById',
  description: 'Realiza a consulta a uma reserva por ID.',
  params: ReservaFindOneByIdInput as any,
  success: {
    dto: ReservaFindOneResult as any,
    description: 'Reserva encontrada.',
  },
});

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

export const ReservaFindAllOperator = OperatorFindAll({
  name: 'ReservaFindAll',
  description: 'Lista de todos as reservas cadastradas no sistema.',
  success: {
    dto: ReservaFindAllResult as any,
    description: 'Resultados da busca de reservas.',
  },
  filters: [], // Não há filtros adicionais para esta operação.
});
