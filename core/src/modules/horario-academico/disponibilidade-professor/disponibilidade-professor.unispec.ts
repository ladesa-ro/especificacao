import { Tokens } from '@/modules/tokens';
import { U } from '@unispec/core';

export const DisponibilidadeProfessorEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'DisponibilidadeProfessor',

  properties: {
    dataInicio: U.String({
      format: 'date',
      description: 'Data de início.',
    }),
    dataFim: U.String({
      format: 'date',
      nullable: true,
      description: 'Data de término.',
    }),
    //
    vinculoProfessor: U.Reference({
      description: 'Vínculo de professor.',
      targetsTo: Tokens.Vinculo.Entity,
    }),
  },
});

export const DisponibilidadeProfessorView = U.View({
  name: Tokens.DisponibilidadeProfessor.Entity,

  description: 'Disponibilidade do professor.',

  properties: {
    ...DisponibilidadeProfessorEntity.properties,

    vinculoProfessor: U.ReferenceExtends(DisponibilidadeProfessorEntity.properties.vinculoProfessor, {
      targetsTo: Tokens.Vinculo.Views.FindOneResult,
    }),
  },
});
