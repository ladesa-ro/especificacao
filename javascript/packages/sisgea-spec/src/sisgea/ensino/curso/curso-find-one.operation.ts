import { ICampusFindOneResultDto } from '@/sisgea/ambientes';
import { IImagemFindOneResultDto } from '@/sisgea/base';
import { IModalidadeFindOneResultDto } from '../modalidade';
import { ICursoModel } from './curso.declaration';

export interface ICursoFindOneByIdInputDto extends Pick<ICursoModel, 'id'> {
  id: string;
}

export interface ICursoFindOneResultDto extends Pick<ICursoModel, 'id' | 'nome' | 'nomeAbreviado'> {
  campus: ICampusFindOneResultDto;
  modalidade: IModalidadeFindOneResultDto;
  imagemCapa: IImagemFindOneResultDto | null;
}
