import { IOperation } from '../../../legacy/helpers';
import { IntervaloDeTempoFindOneByIdResult, IntervaloDeTempoInput } from './intervalo-de-tempo.declaration';

export const IntervaloDeTempoInputOperator = () =>
  ({
    gql: 'mutation',
    name: 'IntervaloDeTempoInput',
    description: 'Entrada de dados de um intervalo de tempo.',

    input: {
      strategy: 'dto',
      dto: IntervaloDeTempoInput,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: IntervaloDeTempoFindOneByIdResult,
        description: 'Resultado de uma busca por um intervalo de tempo.',
      },
    },
  }) satisfies IOperation;
