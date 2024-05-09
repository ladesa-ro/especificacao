import { IEntityDate } from "@/core";
import { ICalendarioLetivoModel } from "../calendario-letivo";

export interface IEtapaModel {
    //
    id: string;
    //
    numero: number;
    dataInicio: string;
    dataTermino: string;
    cor: string;
    //
    calendario: ICalendarioLetivoModel;
    //
    dateCreated: IEntityDate;
    dateUpdated: IEntityDate;
    dateDeleted: null | IEntityDate;
    //
  }