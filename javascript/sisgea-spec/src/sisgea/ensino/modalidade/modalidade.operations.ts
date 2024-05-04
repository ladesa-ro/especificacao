import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
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

export const ModalidadeFindOneByIdOperator = OperatorFindOne({
  name: 'ModalidadeFindOneById',
  description: 'Realiza a consulta a uma modalidade por ID.',
  params: ModalidadeFindOneByIdInput as any,
  success: {
    dto: ModalidadeFindOneResult as any,
    description: 'Modalidade encontrada.',
  },
});

export const ModalidadeDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'ModalidadeDelete',
    description: 'Realiza a remoção de uma modalidade por ID.',

    input: {
      strategy: 'dto',
      params: ModalidadeFindOneByIdOperator().input.params,
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
      params: ModalidadeFindOneByIdOperator().input.params,
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
