import { IUsuarioFindByIdInput } from './IUsuarioFindByIdInput';

export interface IUsuarioCheckEmailAvailabilityInput {
  email: string;

  usuarioId: IUsuarioFindByIdInput['id'] | null;
}
