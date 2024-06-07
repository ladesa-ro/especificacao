import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common-entity";
import { Tokens } from "../../tokens";

export const HorarioGeradoAulaEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "HorarioGeradoAula",

  properties: {
    diaSemanaIso: U.Integer({
      description: "Dia da semana.",
    }),
    //
    intervaloDeTempo: U.Reference({
      description: "Intervalo de tempo.",
      targetsTo: Tokens.IntervaloDeTempo.Entity,
    }),
    diarioProfessor: U.Reference({
      description: "Diário do professor.",
      targetsTo: Tokens.DiarioProfessor.Entity,
      nullable: true,
    }),
    horarioGerado: U.Reference({
      description: "Horário gerado.",
      targetsTo: Tokens.HorarioGerado.Entity,
    }),
  },
});

export const HorarioGeradoAulaView = U.View({
  name: Tokens.HorarioGeradoAula.Entity,

  description: "Horário gerado aula.",

  type: U.ObjectTransformer.From(HorarioGeradoAulaEntity)
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
        },
        diarioProfessor: {
          targetsTo: Tokens.DiarioProfessor.Views.FindOneResult,
        },
        horarioGerado: {
          targetsTo: Tokens.HorarioGerado.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const HorarioGeradoAulaFindOneInputView = U.View({
  name: Tokens.HorarioGeradoAula.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Horario Gerado Aula por ID.",
  type: U.ObjectTransformer.From(HorarioGeradoAulaView.type).Pick({ id: true }).Node(),
});

export const HorarioGeradoAulaFindOneResultView = U.View({
  name: Tokens.HorarioGeradoAula.Views.FindOneResult,

  partialOf: Tokens.HorarioGeradoAula.Entity,
  description: "Visão FindOne de um Horario Gerado Aula.",

  type: U.ObjectTransformer.From(HorarioGeradoAulaView.type)
    .Pick({
      id: true,
      //
      diaSemanaIso: true,
      //
      intervaloDeTempo: true,
      diarioProfessor: true,
      horarioGerado: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const HorarioGeradoAulaInputCreateView = U.View({
  name: Tokens.HorarioGeradoAula.Views.InputCreate,
  description: "Dados de entrada para a criação de um Horario Gerado Aula.",
  type: U.ObjectTransformer.From(HorarioGeradoAulaView.type)
    .Pick({
      diaSemanaIso: true,
      intervaloDeTempo: true,
      diarioProfessor: true,
      horarioGerado: true,
    })
    .Extends({
      properties: {
        intervaloDeTempo: {
          targetsTo: Tokens.IntervaloDeTempo.Views.Input,
        },
        diarioProfessor: {
          targetsTo: Tokens.DiarioProfessor.Views.FindOneInput,
        },
        horarioGerado: {
          targetsTo: Tokens.HorarioGerado.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const HorarioGeradoAulaInputUpdateView = U.View({
  name: Tokens.HorarioGeradoAula.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um Horario Gerado Aula.",
  type: UniNodeTypeObjectPartial(HorarioGeradoAulaInputCreateView.type),
});

export const HorarioGeradoAulaFindAllResult = PaginatedResultView({
  name: Tokens.HorarioGeradoAula.Views.FindAllResult,
  description: "Resultados da busca a Horarios Gerados Aula.",
  targetsTo: Tokens.HorarioGeradoAula.Views.FindOneResult,
});

export const HorarioGeradoAulaDeclarator = CompileOperations({
  entity: Tokens.HorarioGeradoAula.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.HorarioGeradoAula.Operations.FindById,
        input: Tokens.HorarioGeradoAula.Views.FindOneInput,
        output: Tokens.HorarioGeradoAula.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.HorarioGeradoAula.Operations.DeleteById,
      },

      create: {
        name: Tokens.HorarioGeradoAula.Operations.Create,
        input: Tokens.HorarioGeradoAula.Views.InputCreate,
      },
      updateById: {
        name: Tokens.HorarioGeradoAula.Operations.UpdateById,
        input: Tokens.HorarioGeradoAula.Views.InputUpdate,
      },

      list: {
        name: Tokens.HorarioGeradoAula.Operations.List,
        view: Tokens.HorarioGeradoAula.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const HorarioGeradoAulaProvider = BuildModule({
  nodes: [
    HorarioGeradoAulaEntity,
    HorarioGeradoAulaView,
    HorarioGeradoAulaFindOneInputView,
    HorarioGeradoAulaFindOneResultView,
    HorarioGeradoAulaInputCreateView,
    HorarioGeradoAulaInputUpdateView,
    HorarioGeradoAulaFindAllResult,
    HorarioGeradoAulaDeclarator,
  ],
});
