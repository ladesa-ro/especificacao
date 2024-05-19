import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const EventoEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Evento',

  properties: {
    nome: U.String({
      nullable: true,
      description: 'Nome do evento.',
    }),
    dataInicio: U.String({
      format: 'date',
      description: 'Data de início.',
    }),
    dataTermino: U.String({
      format: 'date',
      description: 'Data de término.',
    }),
    cor: U.String({
      nullable: true,
      description: 'Cor da Evento.',
    }),
    //
    calendario: U.Reference({
      nullable: true,
      targetsTo: Tokens.CalendarioLetivo.Entity,
      description: 'Calendario.',
    }),
  },
});

export const EventoView = U.View({
  name: Tokens.Evento.Entity,
  description: 'Visão completa de um Evento.',
  properties: {
    ...EventoEntity.properties,

    calendario: U.ReferenceExtends(EventoEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const EventoFindOneInputView = U.View({
  name: Tokens.Evento.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Evento por ID.',
  properties: { ...U.ObjectPick(EventoView, { id: true }) },
});

export const EventoFindOneResultView = U.View({
  name: Tokens.Evento.Views.FindOneResult,

  partialOf: Tokens.Evento.Entity,
  description: 'Visão FindOne de um Evento.',

  properties: {
    ...U.ObjectPick(EventoView, {
      id: true,
      //
      nome: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
      //
      calendario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const EventoInputCreateView = U.View({
  name: Tokens.Evento.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Evento.',
  properties: {
    ...U.ObjectPick(EventoView, {
      nome: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
    }),

    calendario: U.ReferenceExtends(EventoEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const EventoInputUpdateView = U.View({
  name: Tokens.Evento.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Evento.',
  properties: {
    ...U.ObjectPartial(EventoInputCreateView),
  },
});

export const EventoFindAllResult = PaginatedResultView({
  name: Tokens.Evento.Views.FindAllResult,
  description: 'Realiza a busca a Eventos.',
  targetsTo: Tokens.Evento.Views.FindOneResult,
});

export const EventoDeclarator = U.Declarator({
  entity: Tokens.Evento.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Evento.Views.FindOneInput,
        output: Tokens.Evento.Views.FindOneResult,
      },

      deleteById: Tokens.Evento.Views.FindOneInput,

      create: Tokens.Evento.Views.InputCreate,
      updateById: Tokens.Evento.Views.InputUpdate,

      list: {
        view: Tokens.Evento.Views.FindAllResult,
        filters: [['calendario.id', ['$eq']]],
      },
    },
  },
});

export const EventoProvider = U.Provider((ctx) => {
  ctx.Add(EventoEntity);
  ctx.Add(EventoView);
  ctx.Add(EventoFindOneInputView);
  ctx.Add(EventoFindOneResultView);
  ctx.Add(EventoInputCreateView);
  ctx.Add(EventoInputUpdateView);
  ctx.Add(EventoFindAllResult);
  ctx.Add(EventoDeclarator);
});
