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

  type: U.ObjectTransformer.From(ReservaEntity)
    .Extends({
      properties: {
        usuario: {
          targetsTo: Tokens.Usuario.Views.FindOneResult,
        },

        ambiente: {
          targetsTo: Tokens.Ambiente.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const ReservaFindOneInputView = U.View({
  name: Tokens.Reserva.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Reserva por ID.',
  type: U.ObjectTransformer.From(ReservaView.type).Pick({ id: true }).Node(),
});

export const ReservaFindOneResultView = U.View({
  name: Tokens.Reserva.Views.FindOneResult,

  description: 'Visão FindOne de um Reserva.',

  type: U.ObjectTransformer.From(ReservaView.type)
    .Extends({ partialOf: Tokens.Reserva.Entity })
    .Pick({
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
    })
    .Node(),
});

export const ReservaInputCreateView = U.View({
  name: Tokens.Reserva.Views.InputCreate,

  description: 'Dados de entrada para a criação de uma Reserva.',

  type: U.ObjectTransformer.From(ReservaView.type)
    .Pick({
      situacao: true,
      motivo: true,
      tipo: true,
      dataInicio: true,
      dataTermino: true,
      //
      usuario: true,
      ambiente: true,
    })
    .Extends({
      properties: {
        usuario: {
          targetsTo: Tokens.Usuario.Views.FindOneInput,
        },

        ambiente: {
          targetsTo: Tokens.Ambiente.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const ReservaInputUpdateView = U.View({
  name: Tokens.Reserva.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Reserva.',
  type: U.ObjectPartial(ReservaInputCreateView.type),
});

export const ReservaFindAllResult = PaginatedResultView({
  name: Tokens.Reserva.Views.FindAllResult,
  description: 'Resultados da busca a Reservas.',
  targetsTo: Tokens.Reserva.Views.FindOneResult,
});

export const ReservaDeclarator = U.Declarator({
  entity: Tokens.Reserva.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Reserva.Operations.FindById,
        input: Tokens.Reserva.Views.FindOneInput,
        output: Tokens.Reserva.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Reserva.Operations.FindById,
      },

      create: {
        name: Tokens.Reserva.Operations.Create,
        input: Tokens.Reserva.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Reserva.Operations.UpdateById,
        input: Tokens.Reserva.Views.InputUpdate,
      },

      list: {
        name: Tokens.Reserva.Operations.List,
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
