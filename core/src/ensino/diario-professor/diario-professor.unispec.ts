import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { PaginatedResultView } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const DiarioProfessorEntity = CommonEntity({
  id: "uuid",

  description: "DiarioProfessor",

  properties: {
    situacao: U.Boolean({
      description: "Situação do vínculo.",
    }),

    vinculo: U.Reference({
      description: "Vínculo do usuário ao campus.",
      targetsTo: Tokens.Vinculo.Entity,
    }),

    diario: U.Reference({
      description: "Diário vinculado.",
      targetsTo: Tokens.Diario.Entity,
    }),
  },
});

export const DiarioProfessorView = () =>
  U.View({
    name: Tokens.DiarioProfessor.Entity,

    default: "Visão completa de um DiarioProfessor",

    type: U.ObjectTransformer.From(DiarioProfessorEntity)
      .Extends({
        properties: {
          vinculo: {
            targetsTo: Tokens.Vinculo.Views.FindOneResult,
          },

          diario: {
            targetsTo: Tokens.Diario.Views.FindOneResult,
          },
        },
      })
      .Node(),
  });

export const DiarioProfessorFindOneInputView = () =>
  U.View({
    name: Tokens.DiarioProfessor.Views.FindOneInput,
    description: "Dados de entrada para encontrar um DiarioProfessor por ID.",
    type: U.ObjectTransformer.From(DiarioProfessorView().type).Pick({ id: true }).Node(),
  });

export const DiarioProfessorFindOneResultView = () =>
  U.View({
    name: Tokens.DiarioProfessor.Views.FindOneResult,

    partialOf: Tokens.DiarioProfessor.Entity,
    description: "Visão FindOne de um DiarioProfessor.",

    type: U.ObjectTransformer.From(DiarioProfessorView().type)
      .Pick({
        id: true,
        //
        situacao: true,
        vinculo: true,
        diario: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const DiarioProfessorInputCreateView = () =>
  U.View({
    name: Tokens.DiarioProfessor.Views.InputCreate,
    description: "Dados de entrada para a criação de um DiarioProfessor.",
    type: U.ObjectTransformer.From(DiarioProfessorView().type)
      .Pick({
        situacao: true,
        vinculo: true,
        diario: true,
      })
      .Extends({
        properties: {
          vinculo: {
            targetsTo: Tokens.Vinculo.Views.FindOneInput,
          },

          diario: {
            targetsTo: Tokens.Diario.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const DiarioProfessorInputUpdateView = () =>
  U.View({
    name: Tokens.DiarioProfessor.Views.InputUpdate,
    description: "Dados de entrada para a atualização de um DiarioProfessor.",
    type: UniNodeTypeObjectPartial(DiarioProfessorInputCreateView().type),
  });

export const DiarioProfessorFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.DiarioProfessor.Views.FindAllResult,
    description: "Resultados da busca a Diários.",
    targetsTo: Tokens.DiarioProfessor.Views.FindOneResult,
  });

export const DiarioProfessorDeclarator = () =>
  CompileOperations({
    entity: Tokens.DiarioProfessor.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.DiarioProfessor.Operations.FindById,
          input: Tokens.DiarioProfessor.Views.FindOneInput,
          output: Tokens.DiarioProfessor.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.DiarioProfessor.Operations.DeleteById,
        },

        create: {
          name: Tokens.DiarioProfessor.Operations.Create,
          input: Tokens.DiarioProfessor.Views.InputCreate,
        },
        updateById: {
          name: Tokens.DiarioProfessor.Operations.UpdateById,
          input: Tokens.DiarioProfessor.Views.InputUpdate,
        },

        list: {
          name: Tokens.DiarioProfessor.Operations.List,
          view: Tokens.DiarioProfessor.Views.FindAllResult,
          filters: [
            ["vinculo.id", ["$eq"]],
            ["diario.id", ["$eq"]],
          ],
        },
      },
    },
  });

export const DiarioProfessorProvider = LazyModule({
  nodes: [
    DiarioProfessorEntity,
    DiarioProfessorView,
    DiarioProfessorFindOneInputView,
    DiarioProfessorFindOneResultView,
    DiarioProfessorInputCreateView,
    DiarioProfessorInputUpdateView,
    DiarioProfessorFindAllResult,
    DiarioProfessorDeclarator,
  ],
});
