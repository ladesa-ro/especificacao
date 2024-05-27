import { Tokens } from '@/modules/tokens';
import { U } from '@unispec/core';

export const HorarioGeradoAulaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'HorarioGeradoAula',

  properties: {
    diaSemanaIso: U.Integer({
      description: 'Dia da semana.',
    }),
    //
    intervaloDeTempo: U.Reference({
      description: 'Intervalo de tempo.',
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    diarioProfessor: U.Reference({
      description: 'Diário do professor.',
      targetsTo: Tokens.DiarioProfessor.Entity,
      nullable: true,
    }),
    horarioGerado: U.Reference({
      description: 'Horário gerado.',
      targetsTo: Tokens.HorarioGerado.Entity,
    }),
  },
});

export const HorarioGeradoAulaView = U.View({
  name: Tokens.HorarioGeradoAula.Entity,

  description: 'Horário gerado aula.',

  properties: {
    ...HorarioGeradoAulaEntity.properties,

    intervaloDeTempo: U.ReferenceExtends(HorarioGeradoAulaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),
    diarioProfessor: U.ReferenceExtends(HorarioGeradoAulaEntity.properties.diarioProfessor, {
      targetsTo: Tokens.DiarioProfessor.Views.FindOneResult,
    }),
    horarioGerado: U.ReferenceExtends(HorarioGeradoAulaEntity.properties.horarioGerado, {
      targetsTo: Tokens.HorarioGerado.Views.FindOneResult,
    }),
  },
});
