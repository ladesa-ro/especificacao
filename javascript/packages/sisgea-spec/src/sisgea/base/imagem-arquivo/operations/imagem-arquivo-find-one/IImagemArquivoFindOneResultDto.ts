import * as Dto from '@/index';

export interface IImagemArquivoFindOneResultDto
  extends Pick<Dto.IImagemArquivoModel, 'id' | 'largura' | 'altura' | 'formato' | 'mimeType'> {
  imagem: Dto.IObjectUuid;
  arquivo: Dto.IArquivoFindOneByIdResultDto;
}
