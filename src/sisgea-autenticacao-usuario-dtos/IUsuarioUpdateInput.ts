import { IUsuarioFindByIdInput } from './IUsuarioFindByIdInput';

export type IUsuarioUpdateInput = {
  id: IUsuarioFindByIdInput['id'];

  nome?: string;
  email?: string;
  matriculaSiape?: string;
};
