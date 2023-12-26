import { IUsuarioFindByIdInput } from './IUsuarioFindByIdInput';

export type IUsuarioUpdatePasswordInput = {
  id: IUsuarioFindByIdInput['id'];

  currentPassword: string;

  newPassword: string;
  confirmNewPassword: string;
};
