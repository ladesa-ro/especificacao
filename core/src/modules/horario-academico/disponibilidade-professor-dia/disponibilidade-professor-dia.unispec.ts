import { Tokens } from "@/modules/tokens";
import { U } from "@unispec/core";

export const DisponibilidadeProfessorDiaEntity = U.ObjectEntity({
    id: 'uuid',
    dated: true,

    description: 'DisponibilidadeProfessorDia',

    properties: {
        diaSemanaIso: U.Integer({
            description: 'Dia da semana.',
        }),
        //
        intervaloDeTempo: U.Reference({
            description: 'Intervalo de tempo.',
            targetsTo: Tokens.IntervaloDeTempo.Entity,
        }),
        disponibilidade: U.Reference({
            description: 'Disponibilidade do professor.',
            targetsTo: Tokens.DisponibilidadeProfessor.Entity,
        }),
    },
});

export const DisponibilidadeProfessorDiaView = U.View({
    name: Tokens.DisponibilidadeProfessorDia.Entity,

    description: 'Disponibilidade dia do professor.',

    properties: {
        ...DisponibilidadeProfessorDiaEntity.properties,

        intervaloDeTempo: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.intervaloDeTempo, {
            targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        }),

        disponibilidade: U.ReferenceExtends(DisponibilidadeProfessorDiaEntity.properties.disponibilidade, {
            targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
        }),
    },
});
