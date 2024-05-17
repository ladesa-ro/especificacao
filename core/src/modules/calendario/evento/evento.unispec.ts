import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const EventoEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Evento',

  properties: {
    nome: UniTypeString({
      nullable: true,
      description: 'Nome do evento.',
    }),
    dataInicio: UniTypeString({
      format: 'date',
      description: 'Data de início.',
    }),
    dataTermino: UniTypeString({
      format: 'date',
      description: 'Data de término.',
    }),
    cor: UniTypeString({
      nullable: true,
      description: 'Cor da Evento.',
    }),
    //
    calendario: UniTypeReference({
      nullable: true,
      targetsTo: Tokens.CalendarioLetivo.Entity,
      description: 'Calendario.',
    }),
  },
});

export const EventoView = UniView({
  name: Tokens.Evento.Entity,
  description: 'Visão completa de um Evento.',
  properties: {
    ...EventoEntity.properties,

    calendario: UniTypeReferenceExtends(EventoEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const EventoFindOneInputView = UniView({
  name: Tokens.Evento.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Evento por ID.',
  properties: { ...UniTypePick(EventoView, { id: true }) },
});

export const EventoFindOneResultView = UniView({
  name: Tokens.Evento.Views.FindOneResult,

  partialOf: Tokens.Evento.Entity,
  description: 'Visão FindOne de um Evento.',

  properties: {
    ...UniTypePick(EventoView, {
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

export const EventoInputCreateView = UniView({
  name: Tokens.Evento.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Evento.',
  properties: {
    ...UniTypePick(EventoView, {
      nome: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
    }),

    calendario: UniTypeReferenceExtends(EventoEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const EventoInputUpdateView = UniView({
  name: Tokens.Evento.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Evento.',
  properties: {
    ...UniTypePartial(EventoInputCreateView),
  },
});

export const EventoFindAllResult = PaginatedResultView({
  name: Tokens.Evento.Views.FindAllResult,
  description: 'Realiza a busca a Eventos.',
  targetsTo: Tokens.Evento.Views.FindOneResult,
});

export const EventoDeclarator = UniDeclarator({
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

export const EventoProvider = UniProvider((ctx) => {
  ctx.Add(EventoEntity);
  ctx.Add(EventoView);
  ctx.Add(EventoFindOneInputView);
  ctx.Add(EventoFindOneResultView);
  ctx.Add(EventoInputCreateView);
  ctx.Add(EventoInputUpdateView);
  ctx.Add(EventoFindAllResult);
  ctx.Add(EventoDeclarator);
});
