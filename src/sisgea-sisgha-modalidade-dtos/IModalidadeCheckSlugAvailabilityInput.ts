import { IModalidadeFindByIdInput } from './IModalidadeFindByIdInput';

export interface IModalidadeCheckSlugAvailabilityInput {
  slug: string;

  modalidadeId: IModalidadeFindByIdInput['id'] | null;
}
