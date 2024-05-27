import { PaginatedResultView } from '@/modules/-shared';
import { Tokens } from '@/modules/tokens';
import { U } from '@unispec/core';

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

export const HorarioGeradoFindOneInputView = U.View({
  name: Tokens.HorarioGerado.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Horario Gerado por ID.',
  properties: { ...U.ObjectPick(HorarioGeradoView, { id: true }) },
});

export const HorarioGeradoFindOneResultView = U.View({
  name: Tokens.HorarioGerado.Views.FindOneResult,

  partialOf: Tokens.HorarioGerado.Entity,
  description: 'Visão FindOne de um Horario Gerado.',

  properties: {
    ...U.ObjectPick(HorarioGeradoView, {
      id: true,
      //
      status: true,
      tipo: true,
      dataGeracao: true,
      vigenciaInicio: true,
      vigenciaFim: true,
      //
      calendario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const HorarioGeradoInputCreateView = U.View({
  name: Tokens.HorarioGerado.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Horario Gerado.',
  properties: {
    ...U.ObjectPick(HorarioGeradoView, {
      status: true,
      tipo: true,
      dataGeracao: true,
      vigenciaInicio: true,
      vigenciaFim: true,
    }),

    calendario: U.ReferenceExtends(HorarioGeradoEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const HorarioGeradoInputUpdateView = U.View({
  name: Tokens.HorarioGerado.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Horario Gerado.',
  properties: {
    ...U.ObjectPartial(HorarioGeradoInputCreateView),
  },
});

export const HorarioGeradoFindAllResult = PaginatedResultView({
  name: Tokens.HorarioGerado.Views.FindAllResult,
  description: 'Realiza a busca a Horarios Gerados.',
  targetsTo: Tokens.HorarioGerado.Views.FindOneResult,
});

export const HorarioGeradoDeclarator = U.Declarator({
  entity: Tokens.HorarioGerado.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.HorarioGerado.Views.FindOneInput,
        output: Tokens.HorarioGerado.Views.FindOneResult,
      },

      deleteById: Tokens.HorarioGerado.Views.FindOneInput,

      create: Tokens.HorarioGerado.Views.InputCreate,
      updateById: Tokens.HorarioGerado.Views.InputUpdate,

      list: {
        view: Tokens.HorarioGerado.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const HorarioGeradoProvider = U.Provider((ctx) => {
  ctx.Add(HorarioGeradoEntity);
  ctx.Add(HorarioGeradoView);
  ctx.Add(HorarioGeradoFindOneInputView);
  ctx.Add(HorarioGeradoFindOneResultView);
  ctx.Add(HorarioGeradoInputCreateView);
  ctx.Add(HorarioGeradoInputUpdateView);
  ctx.Add(HorarioGeradoFindAllResult);
  ctx.Add(HorarioGeradoDeclarator);
});
