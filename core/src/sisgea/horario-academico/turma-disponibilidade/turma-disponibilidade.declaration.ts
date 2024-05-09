import { IEntityDate, IEntityDateNullable } from '@/core';
import { ITurmaModel } from '@/sisgea/ensino';

export interface ITurmaDisponibilidadeModel {
  //
  id: string;
  dataInicio: string;
  dataFim: null | string;
  //
  turma: ITurmaModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
  //
}
