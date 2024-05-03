import { IOperation, OperatorFindAll } from '@/helpers';
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
        dto: EstadoFindOneResult as any,
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
        dto: EstadoFindOneResult as any,
        description: 'Estado encontrado.',
      },
    },
  } satisfies IOperation;
};

export const EstadoFindAllOperator = OperatorFindAll({
  name: 'EstadoFindAll',
  description: 'Lista de todos os estados cadastrados no sistema.',
  success: {
    dto: EstadoFindAllResult as any,
    description: 'Resultados da busca de estados.',
  },
});
