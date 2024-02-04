import { ISisgeaSisghaModalidadeFindByIdInputDto } from '../../../modalidade';
import { ISisgeaSisghaCursoFindByIdInputDto } from '../curso-find-by-id';

export type ISisgeaSisghaCursoUpdateInputDto = {
  id: ISisgeaSisghaCursoFindByIdInputDto['id'];

  nome?: string;
  nomeAbreviado?: string;

  modalidadeId?: ISisgeaSisghaModalidadeFindByIdInputDto['id'];
};
