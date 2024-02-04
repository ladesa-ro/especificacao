import { ISisgeaSisghaModalidadeFindByIdInputDto } from '../../../modalidade';

export type ISisgeaSisghaCursoCreateInputDto = {
  nome: string;
  nomeAbreviado: string;

  modalidadeId: ISisgeaSisghaModalidadeFindByIdInputDto['id'];
};
