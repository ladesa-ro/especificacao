import * as Dto from '@/core';
import { ICampusModel } from '../../ambientes';
import { IImagemFindOneResultDto, IImagemModel } from '../../base';
import { IUsuarioVinculoCampusModel } from '../usuario-vinculo-campus';

export interface IUsuarioModel extends Dto.IObjectUuid, Dto.IDatedObject {
  //
  id: string;
  //
  nome: string;
  matriculaSiape: string;
  email: string;
  //
  isSuperUser: boolean;
  //
  imagemCapa: IImagemModel | null;
  imagemPerfil: IImagemModel | null;
  //
  vinculosAtivos: IUsuarioVinculoCampusModel[];
  //
  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;
  //
}

export interface IUsuarioFindOneByIdInputDto {
  id: IUsuarioModel['id'];
}

export interface IUsuarioDeleteOneByIdInputDto extends IUsuarioFindOneByIdInputDto {}

export interface IUsuarioFindAllResultDto extends Dto.IPaginatedResultDto<IUsuarioFindOneResultDto> {}

export interface IUsuarioFindOneResultDtoVinculoAtivoCampus extends Pick<ICampusModel, 'id' | 'razaoSocial' | 'nomeFantasia'> {}

export interface IUsuarioFindOneResultDtoVinculoAtivo extends Pick<IUsuarioVinculoCampusModel, 'id' | 'cargo' | 'ativo'> {
  campus: IUsuarioFindOneResultDtoVinculoAtivoCampus;
}

export interface IUsuarioFindOneResultDto {
  //
  id: IUsuarioModel['id'];
  //
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
  //
  imagemCapa: IImagemFindOneResultDto | null;
  imagemPerfil: IImagemFindOneResultDto | null;
  //
  vinculosAtivos: IUsuarioFindOneResultDtoVinculoAtivo[];
  //
}

export interface IUsuarioInputDto {
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
}

export interface IUsuarioCreateDto extends IUsuarioInputDto {}

export interface IUsuarioUpdateDto extends IUsuarioFindOneByIdInputDto, Partial<Omit<IUsuarioInputDto, never>> {
  id: IUsuarioModel['id'];
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
}

export enum ISisgeaSisghaValidationErrorCodeUsuario {
  USUARIO_EMAIL_ALREADY_IN_USE = 'usuario.email.already_in_use',
  USUARIO_MATRICULA_SIAPE_ALREADY_IN_USE = 'usuario.matriculaSiape.already_in_use',
}
