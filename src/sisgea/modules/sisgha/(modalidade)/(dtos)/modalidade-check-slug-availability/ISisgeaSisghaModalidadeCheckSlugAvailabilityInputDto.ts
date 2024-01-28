import { ISisgeaSisghaModalidadeFindByIdInputDto } from '../modalidade-find-by-id/ISisgeaSisghaModalidadeFindByIdInputDto';

export interface ISisgeaSisghaModalidadeCheckSlugAvailabilityInputDto {
  slug: string;

  modalidadeId: ISisgeaSisghaModalidadeFindByIdInputDto['id'] | null;
}
