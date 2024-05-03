import { IOperation, OperatorFindAll } from '@/helpers';
import { CidadeFindAllResult, CidadeFindOneByIdInput, CidadeFindOneResult } from './cidade.declaration';

export const CidadeFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'CidadeFindOneById',
    description: 'Realiza a consulta a uma cidade por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CidadeFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CidadeFindOneResult as any,
        description: 'Cidade encontrado.',
      },
    },
  } satisfies IOperation;
};

export const CidadeFindAllOperator = OperatorFindAll({
  name: 'CidadeFindAll',
  description: 'Lista de todos as cidades cadastradas no sistema.',

  success: {
    dto: CidadeFindAllResult as any,
    description: 'Resultados da busca de cidades.',
  },

  filters: [
    { path: 'estado.id', description: 'Filtrar resultados por ID de Estado.' },
    { path: 'estado.nome', description: 'Filtrar resultados por Nome de Estado.' },
    { path: 'estado.sigla', description: 'Filtrar resultados por Sigla de Estado.' },
  ],
});
