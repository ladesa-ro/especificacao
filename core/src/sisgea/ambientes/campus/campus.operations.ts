import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
import { CampusCreate, CampusFindAllResult, CampusFindOneByIdInput, CampusFindOneResult, CampusUpdate } from './campus.declaration';

export const CampusCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CampusCreate',
    description: 'Registra um campus no sistema.',

    input: {
      strategy: 'dto',
      body: CampusCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CampusFindOneResult as any,
        description: 'Campus criado.',
      },
    },
  } satisfies IOperation;
};

export const CampusFindOneByIdOperator = OperatorFindOne({
  name: 'CampusFindOneById',
  description: 'Realiza a consulta a um campus por ID.',
  params: CampusFindOneByIdInput as any,
  success: {
    dto: CampusFindOneResult as any,
    description: 'Campus encontrado.',
  },
});

export const CampusDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'CampusDelete',
    description: 'Realiza a remoção de um campus por ID.',

    input: {
      strategy: 'dto',
      params: CampusFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
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
      body: CampusUpdate as any,
      params: CampusFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CampusFindOneResult as any,
        description: 'Campus atualizado.',
      },
    },
  } satisfies IOperation;
};

export const CampusFindAllOperator = OperatorFindAll({
  name: 'CampusFindAll',
  description: 'Lista de todos os campi cadastrados no sistema.',
  success: {
    dto: CampusFindAllResult as any,
    description: 'Resultados da busca de campi.',
  },
  filters: [
    { path: 'campus.id', description: 'Filtrar resultados por ID de Campus.' },
    { path: 'endereco.cidade.id', description: 'Filtrar resultados por ID de Cidade.' },
    { path: 'endereco.cidade.nome', description: 'Filtrar resultados por Nome de Cidade.' },
    { path: 'endereco.cidade.estado.id', description: 'Filtrar resultados por ID de Estado.' },
    { path: 'endereco.cidade.estado.nome', description: 'Filtrar resultados por Nome de Estado.' },
    { path: 'endereco.cidade.estado.sigla', description: 'Filtrar resultados por Sigla de Estado.' },
  ],
});
