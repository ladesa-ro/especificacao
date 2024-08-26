import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const TurmaDisponibilidadeEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "TurmaDisponibilidade",

  properties: {
    dataInicio: U.String({
      format: "date",
      description: "Data de início.",
    }),
    dataFim: U.String({
      format: "date",
      nullable: true,
      description: "Data de término.",
    }),
    //
    turma: U.Reference({
      nullable: true,
      description: "Turma.",
      targetsTo: Tokens.Turma.Entity,
    }),
  },
});

export const TurmaDisponibilidadeView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidade.Entity,

    description: "Visão completa de uma TurmaDisponibilidade",

    type: U.ObjectTransformer.From(TurmaDisponibilidadeEntity)
      .Extends({
        properties: {
          turma: {
            targetsTo: Tokens.Turma.Views.FindOneResult,
          },
        },
      })
      .Node(),
  });

export const TurmaDisponibilidadeFindOneInputView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidade.Views.FindOneInput,
    description: "Dados de entrada para encontrar uma TurmaDisponibilidade por ID.",
    type: U.ObjectTransformer.From(TurmaDisponibilidadeView().type).Pick({ id: true }).Node(),
  });

export const TurmaDisponibilidadeFindOneResultView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidade.Views.FindOneResult,

    partialOf: Tokens.TurmaDisponibilidade.Entity,
    description: "Visão FindOne de uma TurmaDisponibilidade.",

    type: U.ObjectTransformer.From(TurmaDisponibilidadeView().type)
      .Pick({
        id: true,
        //
        dataInicio: true,
        dataFim: true,
        //
        turma: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const TurmaDisponibilidadeInputCreateView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidade.Views.InputCreate,
    description: "Dados de entrada para a criação de uma TurmaDisponibilidade.",
    type: U.ObjectTransformer.From(TurmaDisponibilidadeView().type)
      .Pick({
        dataInicio: true,
        dataFim: true,
        turma: true,
      })
      .Extends({
        properties: {
          turma: {
            targetsTo: Tokens.Turma.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const TurmaDisponibilidadeInputUpdateView = () =>
  U.View({
    name: Tokens.TurmaDisponibilidade.Views.InputUpdate,
    description: "Dados de entrada para a atualização de uma TurmaDisponibilidade.",
    type: UniNodeTypeObjectPartial(TurmaDisponibilidadeInputCreateView().type),
  });

export const TurmaDisponibilidadeFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.TurmaDisponibilidade.Views.FindAllResult,
    description: "Resultados da busca a TurmaDisponibilidades.",
    targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
  });

export const TurmaDisponibilidadeDeclarator = () =>
  CompileOperations({
    entity: Tokens.TurmaDisponibilidade.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.TurmaDisponibilidade.Operations.FindById,
          input: Tokens.TurmaDisponibilidade.Views.FindOneInput,
          output: Tokens.TurmaDisponibilidade.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.TurmaDisponibilidade.Operations.DeleteById,
        },

        create: {
          name: Tokens.TurmaDisponibilidade.Operations.Create,
          input: Tokens.TurmaDisponibilidade.Views.InputCreate,
        },
        updateById: {
          name: Tokens.TurmaDisponibilidade.Operations.UpdateById,
          input: Tokens.TurmaDisponibilidade.Views.InputUpdate,
        },

        list: {
          name: Tokens.TurmaDisponibilidade.Operations.List,
          view: Tokens.TurmaDisponibilidade.Views.FindAllResult,
          filters: [["turma.id", ["$eq"]]],
        },
      },
    },
  });

export const TurmaDisponibilidadeProvider = LazyModule({
  nodes: [
    TurmaDisponibilidadeEntity,
    TurmaDisponibilidadeView,
    TurmaDisponibilidadeFindOneInputView,
    TurmaDisponibilidadeFindOneResultView,
    TurmaDisponibilidadeInputCreateView,
    TurmaDisponibilidadeInputUpdateView,
    TurmaDisponibilidadeFindAllResult,
    TurmaDisponibilidadeDeclarator,
  ],
});
