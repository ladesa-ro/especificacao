import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
import {
  DiarioProfessorCreate,
  DiarioProfessorFindAllResult,
  DiarioProfessorFindOneByIdInput,
  DiarioProfessorFindOneResult,
  DiarioProfessorUpdate,
} from './diario-professor.declaration';

export const DiarioProfessorCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioProfessorCreate',
    description: 'Registra um vínculo entre diário e professor no sistema.',

    input: {
      strategy: 'dto',
      body: DiarioProfessorCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DiarioProfessorFindOneResult as any,
        description: 'Vínculo entre diário e professor criado.',
      },
    },
  } satisfies IOperation;
};

export const DiarioProfessorFindOneByIdOperator = OperatorFindOne({
  name: 'DiarioProfessorFindOneById',
  description: 'Realiza a consulta a um vínculo entre diário e professor por ID.',
  params: DiarioProfessorFindOneByIdInput as any,
  success: {
    dto: DiarioProfessorFindOneResult as any,
    description: 'Vínculo entre diário e professor encontrado.',
  },
});

export const DiarioProfessorDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioProfessorDelete',
    description: 'Realiza a remoção de um vínculo entre diário e professor por ID.',

    input: {
      strategy: 'dto',
      params: DiarioProfessorFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Vínculo entre diário e professor removido.',
      },
    },
  } satisfies IOperation;
};

export const DiarioProfessorUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioProfessorUpdate',
    description: 'Realiza a alteração de um vínculo entre diário e professor.',

    input: {
      strategy: 'dto',
      body: DiarioProfessorUpdate as any,
      params: DiarioProfessorFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DiarioProfessorFindOneResult as any,
        description: 'Vínculo entre diário e professor atualizado.',
      },
    },
  } satisfies IOperation;
};

export const DiarioProfessorFindAllOperator = OperatorFindAll({
  name: 'DiarioProfessorFindAll',
  description: 'Lista de todos os vínculos entre diário e professor cadastradas no sistema.',
  success: {
    dto: DiarioProfessorFindAllResult as any,
    description: 'Resultados da busca de vínculos entre diário e professor.',
  },
  filters: [], // Não há filtros adicionais para esta operação.
});
