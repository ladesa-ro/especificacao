import { OperationFindOne, OperatorFindAll } from '@/helpers';
import { CidadeFindAllResult, CidadeFindOneByIdInput, CidadeFindOneResult } from './cidade.declaration';

export const CidadeFindOneByIdOperator = OperationFindOne({
  name: 'CidadeFindOneById',
  params: CidadeFindOneByIdInput,
  description: 'Realiza a consulta a uma cidade por ID.',
  success: {
    dto: CidadeFindOneResult as any,
    description: 'Cidade encontrada.',
  },
});

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
