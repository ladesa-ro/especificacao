import * as Dto from '@/index';

export interface IDiarioModel {
  id: string;

  //

  // Situação do diário. Ativo ou inativo.
  situacao: string;

  // Ano do diário.
  ano: number;

  // Etapa/período do diário.
  etapa: string | null;

  // turma que o diario pertence.
  turma: Dto.ITurmaModel;

  // disciplina a qual o diario pertence.
  disciplina: Dto.IDisciplinaModel;

  // Ambiente Padrao do diario.
  ambientePadrao: Dto.IAmbienteModel | null;

  //

  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
}

export interface IDiarioDeleteOneByIdInputDto extends IDiarioFindOneByIdInputDto {
  id: string;
}

export interface IDiarioFindAllResultDto extends Dto.IPaginatedResultDto<IDiarioFindOneResultDto> {}

export interface IDiarioFindOneByIdInputDto extends Pick<IDiarioModel, 'id'> {
  id: string;
}

export interface IDiarioFindOneResultDto extends Pick<IDiarioModel, 'id' | 'situacao' | 'ano' | 'etapa'> {
  turma: Dto.ITurmaFindOneResultDto;
  disciplina: Dto.IDisciplinaFindOneResultDto;
  ambientePadrao: Dto.IAmbienteFindOneResultDto | null;
}

export interface IDiarioCreateDto extends IDiarioInputDto {}

export interface IDiarioInputDto extends Pick<IDiarioModel, 'situacao' | 'ano' | 'etapa'> {
  turma: Dto.IObjectUuid;
  disciplina: Dto.IObjectUuid;
  ambientePadrao: Dto.IObjectUuid | null;
}

export interface IDiarioUpdateDto extends IDiarioFindOneByIdInputDto, Partial<Omit<IDiarioInputDto, 'id'>> {
  id: string;

  //

  // Situação do diário. Ativo ou inativo.
  situacao?: string;

  // Ano do diário.
  ano?: number;

  // Etapa/período do diário.
  etapa?: string | null;

  // turma que o diario pertence
  turma?: Dto.IObjectUuid;

  // disciplina a qual o diario pertence
  disciplina?: Dto.IObjectUuid;

  // Ambiente Padrao do diario
  ambientePadrao?: Dto.IObjectUuid | null;

  //
}
