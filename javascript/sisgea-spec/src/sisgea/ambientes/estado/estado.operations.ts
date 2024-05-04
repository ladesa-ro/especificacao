import { OperationFindOne, OperatorFindAll } from '@/helpers';
import { EstadoFindAllResult, EstadoFindOneByIdInput, EstadoFindOneByUfInput, EstadoFindOneResult } from './estado.declaration';

export const EstadoFindOneByUfOperator = OperationFindOne({
  name: 'EstadoFindOneByUf',
  description: 'Realiza a consulta a um estado por sigla da UF.',
  params: EstadoFindOneByUfInput,
  success: {
    dto: EstadoFindOneResult as any,
    description: 'Estado encontrado.',
  },
});

export const EstadoFindOneByIdOperator = OperationFindOne({
  name: 'EstadoFindOneById',
  params: EstadoFindOneByIdInput,
  description: 'Realiza a consulta a um estado por ID.',
  success: {
    dto: EstadoFindOneResult as any,
    description: 'Estado encontrado.',
  },
});

export const EstadoFindAllOperator = OperatorFindAll({
  name: 'EstadoFindAll',
  description: 'Lista de todos os estados cadastrados no sistema.',
  success: {
    dto: EstadoFindAllResult as any,
    description: 'Resultados da busca de estados.',
  },
});
