import { IOperation } from '@/helpers';
import { EnderecoFindOneByIdInput, EnderecoFindOneResult } from './endereco.declaration';

export const EnderecoFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'EnderecoFindOneById',
    description: 'Realiza a consulta a um endereco por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: EnderecoFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: EnderecoFindOneResult,
        description: 'Endereco encontrado.',
      },
    },
  } satisfies IOperation;
};
