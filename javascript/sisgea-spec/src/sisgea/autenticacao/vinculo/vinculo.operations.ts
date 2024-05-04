import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
import { VinculoFindAllResult, VinculoFindOneByIdInput, VinculoFindOneResult, VinculoUpdateInput } from './vinculo.declaration';

export const VinculoFindOneByIdOperator = OperatorFindOne({
  name: 'VinculoFindOneById',
  description: 'Realiza a consulta a um vínculo de um usuário a um campus por ID.',
  params: VinculoFindOneByIdInput as any,
  success: {
    dto: VinculoFindOneResult as any,
    description: 'Vínculo de um usuário a um campus encontrado.',
  },
});

export const VinculoFindAllOperator = OperatorFindAll({
  name: 'VinculoFindAll',
  description: 'Lista de todos os vínculos dos usuários aos campi cadastrados no sistema.',
  success: {
    dto: VinculoFindAllResult as any,
    description: 'Resultados da busca de vínculos de um usuário aos campi.',
  },
  filters: [], // Não há filtros adicionais para esta operação.
});

export const VinculoUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'VinculoUpdate',
    description: 'Define os vínculos de um usuário a um campus.',

    input: {
      strategy: 'dto',
      body: VinculoUpdateInput as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: VinculoFindOneResult as any,
        description: 'Vínculo de usuário a um campus atualizado.',
      },
    },
  } satisfies IOperation;
};
