import { IModalidadeFindByIdInput } from '../sisgea-sisgha-modalidade-dtos';

export type ICursoCreateInput = {
  nome: string;
  nomeAbreviado: string;

  modalidadeId: IModalidadeFindByIdInput['id'];
};
