import { IModalidadeFindByIdInput } from '../sisgea-sisgha-modalidade-dtos';
import { ICursoFindByIdInput } from './ICursoFindByIdInput';

export type ICursoUpdateInput = {
  id: ICursoFindByIdInput['id'];

  nome?: string;
  nomeAbreviado?: string;

  modalidadeId?: IModalidadeFindByIdInput['id'];
};
