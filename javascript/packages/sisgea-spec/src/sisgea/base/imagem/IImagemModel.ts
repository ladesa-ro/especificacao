import * as Dto from '@/index';
import { IImagemArquivoModel } from '../imagem-arquivo';

export interface IImagemModel extends Dto.IObjectUuid, Dto.IDatedObject {
  id: string;

  //

  descricao: string | null;
  imagemArquivo: IImagemArquivoModel[];

  //

  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
}
