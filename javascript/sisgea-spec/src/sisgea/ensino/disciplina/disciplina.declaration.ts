import * as Dto from '@/index';
import { IPaginatedResultDto } from '@/index';

export interface IDisciplinaModel {
  id: string;

  //

  // Nome da disciplina.
  nome: string;

  // Carga horária da disciplina.
  cargaHoraria: number;

  // Imagem de capa do diário.
  imagemCapa: Dto.IImagemModel | null;

  //

  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
}

export interface IDisciplinaDeleteOneByIdInputDto extends Dto.IDisciplinaFindOneByIdInputDto {
  id: string;
}

export interface IDisciplinaFindAllResultDto extends IPaginatedResultDto<IDisciplinaFindOneResultDto> {}

export interface IDisciplinaFindOneByIdInputDto extends Pick<IDisciplinaModel, 'id'> {
  id: string;
}

export interface IDisciplinaFindOneResultDto extends Pick<IDisciplinaModel, 'id' | 'nome' | 'cargaHoraria'> {
  imagemCapa: Dto.IImagemFindOneResultDto | null;
}

export interface IDisciplinaCreateDto extends Dto.IDisciplinaInputDto {}

export interface IDisciplinaInputDto extends Pick<IDisciplinaModel, 'nome' | 'cargaHoraria'> {}

export interface IDisciplinaUpdateDto extends IDisciplinaFindOneByIdInputDto, Partial<Omit<IDisciplinaInputDto, 'id'>> {
  id: string;

  //

  // Nome da disciplina.
  nome?: string;

  // Carga horária da disciplina.
  cargaHoraria?: number;

  //
}
