import { IEntityDate, IObjectUuid, IPaginatedResultDto } from '@/core';
import { IUsuarioFindOneResultDto, IUsuarioModel } from '@/sisgea/autenticacao';
import { IAmbienteFindOneResultDto, IAmbienteModel } from '../ambiente';

export interface IReservaModel {
  id: string;

  //

  // Situação da reserva.
  situacao: string;

  // Motivo da reserva.
  motivo: string | null;

  // Definir tipo da reserva.
  tipo: string | null;

  // Data e hora de início da reserva.
  dataInicio: IEntityDate;

  // Data e hora de término da reserva.
  dataTermino: IEntityDate | null;

  // Ambiente que foi reservado.
  ambiente: IAmbienteModel;

  // Usuário que fez a reserva.
  usuario: IUsuarioModel;

  //

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
}

export interface IReservaUpdateDto extends IReservaFindOneByIdInputDto, Partial<Omit<IReservaInputDto, 'id'>> {
  id: string;

  //

  // Situação da reserva.
  situacao?: string;

  // Motivo da reserva.
  motivo?: string | null;

  // Definir tipo da reserva.
  tipo?: string | null;

  // Data e hora de início da reserva.
  dataInicio?: IEntityDate;

  // Data e hora de término da reserva.
  dataTermino?: IEntityDate | null | null;

  // Ambiente que foi reservado.
  ambiente?: IObjectUuid;

  // Usuário que fez a reserva.
  usuario?: IObjectUuid;

  //
}

export interface IReservaCreateDto extends IReservaInputDto {}

export interface IReservaFindOneByIdInputDto extends Pick<IReservaModel, 'id'> {
  id: string;
}

export interface IReservaFindOneResultDto
  extends Pick<IReservaModel, 'id' | 'situacao' | 'motivo' | 'tipo' | 'dataInicio' | 'dataTermino'> {
  usuario: IUsuarioFindOneResultDto;
  ambiente: IAmbienteFindOneResultDto;
}

export interface IReservaFindAllResultDto extends IPaginatedResultDto<IReservaFindOneResultDto> {}

export interface IReservaDeleteOneByIdInputDto extends IReservaFindOneByIdInputDto {
  id: string;
}

export interface IReservaInputDto extends Pick<IReservaModel, 'situacao' | 'motivo' | 'tipo' | 'dataInicio' | 'dataTermino'> {
  ambiente: IObjectUuid;
  usuario: IObjectUuid;
}
