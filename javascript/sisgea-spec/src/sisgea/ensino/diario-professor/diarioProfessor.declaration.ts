import {
  IDiarioFindOneResultDto,
  IDiarioModel,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  IUsuarioVinculoCampusFindOneResultDto,
  IUsuarioVinculoCampusModel,
} from '@/index';

export interface IDiarioProfessorModel {
  id: string;

  //

  // Situação do vínculo.
  situacao: boolean;

  // Diário do vínculo.
  diario: IDiarioModel;

  // Vínculo de usuário-professor.
  vinculoProfessor: IUsuarioVinculoCampusModel;

  //

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
}

export interface IDiarioProfessorDeleteOneByIdInputDto extends IDiarioProfessorFindOneByIdInputDto {
  id: string;
}

export interface IDiarioProfessorFindAllResultDto extends IPaginatedResultDto<IDiarioProfessorFindOneResultDto> {}

export interface IDiarioProfessorFindOneByIdInputDto extends Pick<IDiarioProfessorModel, 'id'> {
  id: string;
}

export interface IDiarioProfessorFindOneResultDto extends Pick<IDiarioProfessorModel, 'id' | 'situacao'> {
  diario: IDiarioFindOneResultDto;
  vinculoProfessor: IUsuarioVinculoCampusFindOneResultDto;
}

export interface IDiarioProfessorCreateDto extends IDiarioProfessorInputDto {}

export interface IDiarioProfessorInputDto extends Pick<IDiarioProfessorModel, 'situacao'> {
  diario: IObjectUuid;
  vinculoProfessor: IObjectUuid;
}

export interface IDiarioProfessorUpdateDto extends IDiarioProfessorFindOneByIdInputDto, Partial<Omit<IDiarioProfessorInputDto, 'id'>> {
  id: string;

  //

  // Situação do vínculo.
  situacao?: boolean;

  // Diário do vínculo.
  diario?: IObjectUuid;

  // Vínculo de usuário-professor.
  vinculoProfessor?: IObjectUuid;

  //
}
