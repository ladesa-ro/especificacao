import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

const ReservaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  properties: {
    situacao: U.String({
      constraints: { minLength: 1 },
      description: 'Situação da reserva.',
    }),

    motivo: U.String({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Motivo da reserva.',
    }),

    tipo: U.String({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Definir tipo da reserva.',
    }),

    dataInicio: U.String({
      nullable: false,
      format: 'date-time',
      description: 'Data e hora de início da reserva.',
    }),

    dataTermino: U.String({
      nullable: true,
      format: 'date',
      description: 'Data e hora de término da reserva.',
    }),

    //

    usuario: U.Reference({
      targetsTo: Tokens.Usuario.Entity,
      description: 'Usuário que fez a reserva.',
    }),

    ambiente: U.Reference({
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente que foi reservado.',
    }),
  },
});

export const ReservaView = U.View({
  name: Tokens.Reserva.Entity,
  description: 'Visão completa de uma Reserva.',
  properties: {
    ...ReservaEntity.properties,

    usuario: U.ReferenceExtends(ReservaEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneResult,
    }),

    ambiente: U.ReferenceExtends(ReservaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),
  },
});

export const ReservaFindOneInputView = U.View({
  name: Tokens.Reserva.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Reserva por ID.',
  properties: { ...U.ObjectPick(ReservaView, { id: true }) },
});

export const ReservaFindOneResultView = U.View({
  name: Tokens.Reserva.Views.FindOneResult,

  partialOf: Tokens.Reserva.Entity,
  description: 'Visão FindOne de um Reserva.',

  properties: {
    ...U.ObjectPick(ReservaView, {
      id: true,
      //
      situacao: true,
      motivo: true,
      tipo: true,
      dataInicio: true,
      dataTermino: true,
      //
      usuario: true,
      ambiente: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ReservaInputCreateView = U.View({
  name: Tokens.Reserva.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Reserva.',
  properties: {
    ...U.ObjectPick(ReservaView, {
      situacao: true,
      motivo: true,
      tipo: true,
      dataInicio: true,
      dataTermino: true,
    }),

    usuario: U.ReferenceExtends(ReservaEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneInput,
    }),

    ambiente: U.ReferenceExtends(ReservaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const ReservaInputUpdateView = U.View({
  name: Tokens.Reserva.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Reserva.',
  properties: {
    ...U.ObjectPartial(ReservaInputCreateView),
  },
});

export const ReservaFindAllResult = PaginatedResultView({
  name: Tokens.Reserva.Views.FindAllResult,
  description: 'Realiza a busca a Reservas.',
  targetsTo: Tokens.Reserva.Views.FindOneResult,
});

export const ReservaDeclarator = U.Declarator({
  entity: Tokens.Reserva.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Reserva.Views.FindOneInput,
        output: Tokens.Reserva.Views.FindOneResult,
      },

      deleteById: Tokens.Reserva.Views.FindOneInput,

      create: Tokens.Reserva.Views.InputCreate,
      updateById: Tokens.Reserva.Views.InputUpdate,

      list: {
        view: Tokens.Reserva.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const ReservaProvider = U.Provider((ctx) => {
  ctx.Add(ReservaEntity);
  ctx.Add(ReservaView);
  ctx.Add(ReservaFindOneInputView);
  ctx.Add(ReservaFindOneResultView);
  ctx.Add(ReservaInputCreateView);
  ctx.Add(ReservaInputUpdateView);
  ctx.Add(ReservaFindAllResult);
  ctx.Add(ReservaDeclarator);
});
