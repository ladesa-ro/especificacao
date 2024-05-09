import { IIntervaloDeTempoModel } from "@/sisgea/calendario/intervalo-de-tempo/intervalo-de-tempo.declaration";
import { ITurmaDisponibilidadeModel } from "../turma-disponibilidade/turma-disponibilidade.declaration";

export interface ITurmaDisponibilidadeDiaModel {
    //
    id: string;
    //
    diaSemanaIso: number;
    //
    intervaloDeTempo: IIntervaloDeTempoModel;
    turmaDisponibilidade: ITurmaDisponibilidadeModel
    //
}