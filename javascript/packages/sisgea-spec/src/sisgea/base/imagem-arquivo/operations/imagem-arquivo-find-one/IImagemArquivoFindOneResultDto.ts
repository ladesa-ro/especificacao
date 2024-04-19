import * as Dto from '@/index';
import { IArquivoFindOneResultDto } from '../../../arquivo/operations';
import { IImagemArquivoModel } from '../../IImagemArquivoModel';

export interface IImagemArquivoFindOneResultDto extends Pick<IImagemArquivoModel, 'id' | 'largura' | 'altura' | 'formato' | 'mimeType'> {
  imagem: Dto.IObjectUuid;
  arquivo: IArquivoFindOneResultDto;
}