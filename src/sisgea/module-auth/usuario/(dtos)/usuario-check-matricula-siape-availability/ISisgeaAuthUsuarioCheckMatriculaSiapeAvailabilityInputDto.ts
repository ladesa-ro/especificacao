import { ISisgeaAuthUsuarioFindByIdInputDto } from '../usuario-find-by-id/ISisgeaAuthUsuarioFindByIdInputDto';

export interface ISisgeaAuthUsuarioCheckMatriculaSiapeAvailabilityInputDto {
  matriculaSiape: string;

  usuarioId: ISisgeaAuthUsuarioFindByIdInputDto['id'] | null;
}
