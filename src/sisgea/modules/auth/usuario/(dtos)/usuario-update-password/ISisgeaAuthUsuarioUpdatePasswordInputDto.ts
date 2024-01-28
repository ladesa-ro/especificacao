import { ISisgeaAuthUsuarioFindByIdInputDto } from '../usuario-find-by-id/ISisgeaAuthUsuarioFindByIdInputDto';

export type ISisgeaAuthUsuarioUpdatePasswordInputDto = {
  id: ISisgeaAuthUsuarioFindByIdInputDto['id'];

  currentPassword: string;

  newPassword: string;
  confirmNewPassword: string;
};
