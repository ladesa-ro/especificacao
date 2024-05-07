import { IEntityDate } from "@/core";
import { ICalendarioLetivoModel } from "../calendario-letivo";

export interface IDiaCalendarioModel {
    //
    id: string;
    //
    data: string;
    diaLetivo: boolean;
    feriado: boolean;
    //
    calendario: ICalendarioLetivoModel;
    //
    dateCreated: IEntityDate;
    dateUpdated: IEntityDate;
    dateDeleted: null | IEntityDate;
    //
  }