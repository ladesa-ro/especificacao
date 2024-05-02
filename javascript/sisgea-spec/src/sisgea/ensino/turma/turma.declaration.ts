import * as Dto from '@/index';
import { IAmbienteFindOneResultDto, IPaginatedResultDto } from '@/index';

export interface ITurmaModel {
  //
  id: string;
  //

  // Período da turma.
  periodo: string;
  // Ambiente padrão da sala de aula.
  ambientePadraoAula: Dto.IAmbienteModel | null;
  // Curso que a turma pertence.
  curso: Dto.ICursoModel;
  // Imagem de capa da turma.
  imagemCapa: Dto.IImagemModel | null;

  //
  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
  //
}

export interface ITurmaDeleteOneByIdInputDto extends ITurmaFindOneByIdInputDto {
  id: ITurmaModel['id'];
}

export interface ITurmaFindAllResultDto extends IPaginatedResultDto<ITurmaFindOneResultDto> {}

export interface ITurmaFindOneByIdInputDto {
  id: ITurmaModel['id'];
}

export interface ITurmaFindOneResultDto {
  id: ITurmaModel['id'];

  periodo: ITurmaModel['periodo'];

  ambientePadraoAula: IAmbienteFindOneResultDto | null;
  curso: Dto.ICursoFindOneResultDto;
  imagemCapa: Dto.IImagemFindOneResultDto | null;
}

export interface ITurmaCreateDto extends ITurmaInputDto {}

export interface ITurmaInputDto {
  periodo: ITurmaModel['periodo'];

  ambientePadraoAula: Dto.IObjectUuid | null;
  curso: Dto.IObjectUuid;
}

export interface ITurmaUpdateDto {
  id: ITurmaModel['id'];
  //
  curso: ITurmaModel['curso'] | undefined;
  periodo: ITurmaModel['periodo'] | undefined;
  ambientePadraoAula: ITurmaModel['ambientePadraoAula'] | undefined;
  //
}
