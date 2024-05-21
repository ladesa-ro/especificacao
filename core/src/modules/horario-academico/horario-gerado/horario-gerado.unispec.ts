import { Tokens } from "@/modules/tokens";
import { U } from "@unispec/core";

export const HorarioGeradoEntity = U.ObjectEntity({
    id: 'uuid',
    dated: true,

    description: 'HorarioGerado',

    properties: {
        status: U.String({
            description: 'Status do horário gerado.',
            nullable: true,
        }),
        tipo: U.String({
            description: 'Tipo do horário gerado.',
            nullable: true,
        }),
        dataGeracao: U.String({
            format: 'date-time',
            description: 'Data em que o horário foi gerado.',
            nullable: true,
        }),
        vigenciaInicio: U.String({
            format: 'date',
            description: 'Início da vigência da preferência de agendamento.',
            nullable: true,
        }),
        vigenciaFim: U.String({
            format: 'date',
            description: 'Fim da vigência da preferência de agendamento.',
            nullable: true,
        }),
        //
        calendario: U.Reference({
            description: 'calendário.',
            targetsTo: Tokens.CalendarioLetivo.Entity,
        }),
    },
});

export const HorarioGeradoView = U.View({
    name: Tokens.HorarioGerado.Entity,

    description: 'Horário gerado.',

    properties: {
        ...HorarioGeradoEntity.properties,

        calendario: U.ReferenceExtends(HorarioGeradoEntity.properties.calendario, {
            targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
        }),
    },
});
