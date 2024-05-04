import { OperatorFindOne } from '../../../helpers';
import { EnderecoFindOneByIdInput, EnderecoFindOneResult } from './endereco.declaration';

export const EnderecoFindOneByIdOperator = OperatorFindOne({
  name: 'EnderecoFindOneById',
  description: 'Realiza a consulta a um endereco por ID.',
  params: EnderecoFindOneByIdInput as any,
  success: {
    dto: EnderecoFindOneResult as any,
    description: 'Endereco encontrado.',
  },
});
