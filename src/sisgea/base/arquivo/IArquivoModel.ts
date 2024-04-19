import * as Dto from '@/index';

export interface IArquivoModel extends Dto.IObjectUuid, Dto.IDatedObject {
  id: string;

  //

  nome: string | null;
  mimeType: string | null;
  sizeBytes: number | null;
  storageType: string | null;

  //

  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
}
