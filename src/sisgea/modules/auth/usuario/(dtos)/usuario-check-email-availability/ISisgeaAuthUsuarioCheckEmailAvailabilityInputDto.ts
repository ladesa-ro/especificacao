import { ISisgeaAuthUsuarioFindByIdInputDto } from '../usuario-find-by-id/ISisgeaAuthUsuarioFindByIdInputDto';

export interface ISisgeaAuthUsuarioCheckEmailAvailabilityInputDto {
  email: string;

  usuarioId: ISisgeaAuthUsuarioFindByIdInputDto['id'] | null;
}
