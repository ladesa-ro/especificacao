import { U } from "@unispec/core";
import { PaginatedResultView } from "../../-shared";
import { Tokens } from "../../tokens";

export const EventoEntity = U.ObjectEntity({
  id: "uuid",
  dated: true,

  description: "Evento",

  properties: {
    nome: U.String({
      nullable: true,
      description: "Nome do evento.",
    }),
    dataInicio: U.String({
      format: "date",
      description: "Data de início.",
    }),
    dataTermino: U.String({
      format: "date",
      description: "Data de término.",
    }),
    cor: U.String({
      nullable: true,
      description: "Cor da Evento.",
    }),
    //
    calendario: U.Reference({
      nullable: true,
      targetsTo: Tokens.CalendarioLetivo.Entity,
      description: "Calendario.",
    }),
  },
});

export const EventoView = U.View({
  name: Tokens.Evento.Entity,

  description: "Visão completa de um Evento.",

  type: U.ObjectTransformer.From(EventoEntity)
    .Extends({
      properties: {
        calendario: {
          targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const EventoFindOneInputView = U.View({
  name: Tokens.Evento.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Evento por ID.",
  type: U.ObjectTransformer.From(EventoView.type).Pick({ id: true }).Node(),
});

export const EventoFindOneResultView = U.View({
  name: Tokens.Evento.Views.FindOneResult,

  partialOf: Tokens.Evento.Entity,
  description: "Visão FindOne de um Evento.",

  type: U.ObjectTransformer.From(EventoView.type)
    .Pick({
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
    })
    .Node(),
});

export const EventoInputCreateView = U.View({
  name: Tokens.Evento.Views.InputCreate,
  description: "Dados de entrada para a criação de um Evento.",

  type: U.ObjectTransformer.From(EventoView.type)
    .Pick({
      nome: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
      calendario: true,
    })
    .Extends({
      properties: {
        calendario: {
          targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const EventoInputUpdateView = U.View({
  name: Tokens.Evento.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um Evento.",
  type: U.ObjectPartial(EventoInputCreateView.type),
});

export const EventoFindAllResult = PaginatedResultView({
  name: Tokens.Evento.Views.FindAllResult,
  description: "Resultados da busca a Eventos.",
  targetsTo: Tokens.Evento.Views.FindOneResult,
});

export const EventoDeclarator = U.Declarator({
  entity: Tokens.Evento.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Evento.Operations.FindById,
        input: Tokens.Evento.Views.FindOneInput,
        output: Tokens.Evento.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Evento.Operations.DeleteById,
      },
      create: {
        name: Tokens.Evento.Operations.Create,
        input: Tokens.Evento.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Evento.Operations.UpdateById,
        input: Tokens.Evento.Views.InputUpdate,
      },

      list: {
        name: Tokens.Evento.Operations.List,
        view: Tokens.Evento.Views.FindAllResult,
        filters: [["calendario.id", ["$eq"]]],
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
