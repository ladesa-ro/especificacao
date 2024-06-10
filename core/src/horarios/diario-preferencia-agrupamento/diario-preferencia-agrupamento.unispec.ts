import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { CommonEntity } from "../../-shared/common/CommonEntity";
import { Tokens } from "../../tokens";
import { PaginatedResultView, CompileOperations } from "../../-shared";

export const DiarioPreferenciaAgrupamentoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "DiarioPreferenciaAgrupamento",

  properties: {
    diaSemanaIso: U.Integer({
      description: "Dia da semana.",
    }),
    aulasSeguidas: U.Integer({
      description: "Quantidade de aulas seguidas.",
    }),
    dataInicio: U.String({
      format: "date",
      description: "Início da vigência da preferência de agendamento.",
    }),
    dataFim: U.String({
      format: "date",
      nullable: true,
      description: "Fim da vigência da preferência de agendamento.",
    }),
    //
    intervaloDeTempo: U.Reference({
      description: "Intervalo de tempo.",
      targetsTo: Tokens.IntervaloDeTempo.Entity,
      nullable: true,
    }),
    diario: U.Reference({
      description: "Diário vinculado.",
      targetsTo: Tokens.Diario.Entity,
    }),
  },
});

export const DiarioPreferenciaAgrupamentoView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Entity,

  description: "Diário preferência agrupamento.",

  type: U.ObjectTransformer.From(DiarioPreferenciaAgrupamentoEntity)
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        },

        diario: {
          targetsTo: Tokens.Diario.Views.FindOneResult,
        },
      },
    })
    .Node(),
});
export const DiarioPreferenciaAgrupamentoFindOneInputView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Diario Preferencia Agrupamento por ID.",
  type: U.ObjectTransformer.From(DiarioPreferenciaAgrupamentoView.type).Pick({ id: true }).Node(),
});

export const DiarioPreferenciaAgrupamentoFindOneResultView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Views.FindOneResult,

  partialOf: Tokens.DiarioPreferenciaAgrupamento.Entity,
  description: "Visão FindOne de uma Diario Preferencia Agrupamento.",

  type: U.ObjectTransformer.From(DiarioPreferenciaAgrupamentoView.type)
    .Pick({
      id: true,
      //
      diaSemanaIso: true,
      aulasSeguidas: true,
      dataInicio: true,
      dataFim: true,
      //
      intervaloDeTempo: true,
      diario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const DiarioPreferenciaAgrupamentoInputCreateView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Views.InputCreate,
  description: "Dados de entrada para a criação de um Diario Preferencia Agrupamento.",
  type: U.ObjectTransformer.From(DiarioPreferenciaAgrupamentoView.type)
    .Pick({
      diaSemanaIso: true,
      aulasSeguidas: true,
      dataInicio: true,
      dataFim: true,
    })
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.Input,
        },
        diario: {
          targetsTo: Tokens.Diario.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const DiarioPreferenciaAgrupamentoInputUpdateView = U.View({
  name: Tokens.DiarioPreferenciaAgrupamento.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um Diario Preferencia Agrupamento.",
  type: UniNodeTypeObjectPartial(DiarioPreferenciaAgrupamentoInputCreateView.type),
});

export const DiarioPreferenciaAgrupamentoFindAllResult = PaginatedResultView({
  name: Tokens.DiarioPreferenciaAgrupamento.Views.FindAllResult,
  description: "Resultados da busca o Diario Preferencia Agrupamento.",
  targetsTo: Tokens.DiarioPreferenciaAgrupamento.Views.FindOneResult,
});

export const DiarioPreferenciaAgrupamentoDeclarator = CompileOperations({
  entity: Tokens.DiarioPreferenciaAgrupamento.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.DiarioPreferenciaAgrupamento.Operations.FindById,
        input: Tokens.DiarioPreferenciaAgrupamento.Views.FindOneInput,
        output: Tokens.DiarioPreferenciaAgrupamento.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.DiarioPreferenciaAgrupamento.Operations.DeleteById,
      },

      create: {
        name: Tokens.DiarioPreferenciaAgrupamento.Operations.Create,
        input: Tokens.DiarioPreferenciaAgrupamento.Views.InputCreate,
      },
      updateById: {
        name: Tokens.DiarioPreferenciaAgrupamento.Operations.UpdateById,
        input: Tokens.DiarioPreferenciaAgrupamento.Views.InputUpdate,
      },

      list: {
        name: Tokens.DiarioPreferenciaAgrupamento.Operations.List,
        view: Tokens.DiarioPreferenciaAgrupamento.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const DiarioPreferenciaAgrupamentoProvider = BuildModule({
  nodes: [
    DiarioPreferenciaAgrupamentoEntity,
    DiarioPreferenciaAgrupamentoView,
    DiarioPreferenciaAgrupamentoFindOneInputView,
    DiarioPreferenciaAgrupamentoFindOneResultView,
    DiarioPreferenciaAgrupamentoInputCreateView,
    DiarioPreferenciaAgrupamentoInputUpdateView,
    DiarioPreferenciaAgrupamentoFindAllResult,
    DiarioPreferenciaAgrupamentoDeclarator,
  ],
});
