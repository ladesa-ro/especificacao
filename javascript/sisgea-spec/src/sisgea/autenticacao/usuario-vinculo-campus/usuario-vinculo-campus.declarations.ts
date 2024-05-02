import { IDatedObject, IEntityDate, IObjectUuid, IPaginatedResultDto } from '../../../core';
import { ICampusFindOneResultDto, ICampusModel } from '../../ambientes';
import { IUsuarioFindOneResultDto, IUsuarioModel } from '../usuario/usuario.declarations';

export interface IUsuarioVinculoCampusModel extends IObjectUuid, IDatedObject {
  //
  id: string;
  //
  ativo: boolean;
  cargo: string;
  //
  campus: ICampusModel;
  usuario: IUsuarioModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}

export interface IUsuarioVinculoCampusFindAllResultDto extends IPaginatedResultDto<IUsuarioVinculoCampusFindOneResultDto> {}

export interface IUsuarioVinculoCampusFindOneByIdInputDto {
  id: IUsuarioVinculoCampusModel['id'];
}

export interface IUsuarioVinculoCampusFindOneResultDto {
  id: IUsuarioVinculoCampusModel['id'];
  ativo: IUsuarioVinculoCampusModel['ativo'];
  cargo: IUsuarioVinculoCampusModel['cargo'];
  usuario: IUsuarioFindOneResultDto;
  campus: ICampusFindOneResultDto;
}

export interface IUsuarioVinculoCampusListByUsuarioAndCampusInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;
}

export interface IUsuarioVinculoCampusSetVinculosInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;

  cargos: string[];
}
