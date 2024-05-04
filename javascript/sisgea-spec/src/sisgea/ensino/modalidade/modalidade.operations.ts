import { IOperation, OperatorFindAll } from '@/helpers';
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
      body: ModalidadeCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindOneResult as any,
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
        dto: ModalidadeFindOneResult as any,
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
        id: ModalidadeFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
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
      body: ModalidadeUpdate as any,
      params: {
        id: ModalidadeFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: ModalidadeFindOneResult as any,
        description: 'Modalidade atualizada.',
      },
    },
  } satisfies IOperation;
};

export const ModalidadeFindAllOperator = OperatorFindAll({
  name: 'ModalidadeFindAll',
  description: 'Lista de todos as modalidades cadastradas no sistema.',
  success: {
    dto: ModalidadeFindAllResult as any,
    description: 'Resultados da busca de modalidades.',
  },
  filters: [], // Não há filtros adicionais para esta operação.
});
