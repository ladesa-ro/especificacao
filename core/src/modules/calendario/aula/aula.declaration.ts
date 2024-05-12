import { IEntityDate, IEntityDateNullable } from '@/core';
import { IAmbienteModel } from '@/sisgea/ambientes';
import { IDiarioModel } from '@/sisgea/ensino';
import { IIntervaloDeTempoModel } from '../intervalo-de-tempo/intervalo-de-tempo.declaration';

export interface IAulaModel {
  //
  id: string;
  //
  formato: null | string;
  data: string;
  //
  intervaloDeTempo: null | IIntervaloDeTempoModel;
  diario: IDiarioModel;
  ambientePadrao: null | IAmbienteModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
  //
}
