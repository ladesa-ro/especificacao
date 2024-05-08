import { IEntityDate } from "@/core";
import { ITurmaModel } from "@/sisgea/ensino";

export interface ITurmaDisponibilidadeMode {
    //
    id: string;
    dataInicio: string;
    dataFim: null | string;
    //
    turma: ITurmaModel;
    //
    dateCreated: IEntityDate;
    dateUpdated: IEntityDate;
    dateDeleted: null | IEntityDate;
    //
}