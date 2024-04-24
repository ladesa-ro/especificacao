import * as Dto from '@/index';
import { IAmbienteFindOneResultDto, IPaginatedResultDto } from '@/index';

export interface ITurmaModel {
  id: string;

  //

  // Período da turma.
  periodo: string;

  // Grupo da turma.
  grupo: string;

  // Nome da turma.
  nome: string;

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
}

export interface ITurmaDeleteOneByIdInputDto extends ITurmaFindOneByIdInputDto {
  id: string;
}

export interface ITurmaFindAllResultDto extends IPaginatedResultDto<ITurmaFindOneResultDto> {}

export interface ITurmaFindOneByIdInputDto extends Pick<ITurmaModel, 'id'> {
  id: string;
}

export interface ITurmaFindOneResultDto extends Pick<ITurmaModel, 'id' | 'periodo' | 'grupo' | 'nome'> {
  ambientePadraoAula: IAmbienteFindOneResultDto | null;
  curso: Dto.ICursoFindOneResultDto;
  imagemCapa: Dto.IImagemFindOneResultDto | null;
}

export interface ITurmaCreateDto extends ITurmaInputDto {}

export interface ITurmaInputDto extends Pick<ITurmaModel, 'periodo' | 'grupo' | 'nome'> {
  ambientePadraoAula: Dto.IObjectUuid | null;
  curso: Dto.IObjectUuid;
}

export interface ITurmaUpdateDto extends ITurmaFindOneByIdInputDto, Partial<Omit<ITurmaInputDto, 'id'>> {
  id: string;
  //
  // Período da turma.
  periodo?: string;

  // Grupo da turma.
  grupo?: string;

  // Nome da turma.
  nome?: string;

  // Ambiente padrão da sala de aula.
  ambientePadraoAula?: Dto.IObjectUuid | null;

  // Curso que a turma pertence.
  curso?: Dto.IObjectUuid;

  //
}