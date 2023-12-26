import { IUsuarioFindByIdInput } from './IUsuarioFindByIdInput';

export interface IUsuarioCheckMatriculaSiapeAvailabilityInput {
  matriculaSiape: string;

  usuarioId: IUsuarioFindByIdInput['id'] | null;
}
