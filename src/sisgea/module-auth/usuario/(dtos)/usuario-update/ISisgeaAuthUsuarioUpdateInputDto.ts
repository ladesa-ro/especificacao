import { ISisgeaAuthUsuarioFindByIdInputDto } from '../usuario-find-by-id/ISisgeaAuthUsuarioFindByIdInputDto';

export type ISisgeaAuthUsuarioUpdateInputDto = {
  id: ISisgeaAuthUsuarioFindByIdInputDto['id'];

  nome?: string;
  email?: string;
  matriculaSiape?: string;
};
