import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { CompileOperations, PaginatedResultView } from "../../-shared";
import { CommonEntity } from "../../-shared/common/CommonEntity";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const DisponibilidadeProfessorEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "DisponibilidadeProfessor",

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
    vinculoProfessor: U.Reference({
      description: "Vínculo de professor.",
      targetsTo: Tokens.Vinculo.Entity,
    }),
  },
});

export const DisponibilidadeProfessorView = () =>
  U.View({
    name: Tokens.DisponibilidadeProfessor.Entity,

    description: "Disponibilidade do professor.", 

    type: U.ObjectTransformer.From(DisponibilidadeProfessorEntity)
      .Extends({
        properties: {
          vinculoProfessor: {
            targetsTo: Tokens.Vinculo.Views.FindOneResult,
          },
        },
      })
      .Node(),
  });
export const DisponibilidadeProfessorFindOneInputView = () =>
  U.View({
    name: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
    description: "Dados de entrada para encontrar um Disponibilidade Professor por ID.",
    type: U.ObjectTransformer.From(DisponibilidadeProfessorView().type).Pick({ id: true }).Node(),
  });

export const DisponibilidadeProfessorFindOneResultView = () =>
  U.View({
    name: Tokens.DisponibilidadeProfessor.Views.FindOneResult,

    partialOf: Tokens.DisponibilidadeProfessor.Entity,
    description: "Visão FindOne de uma Disponibilidade Professor.",

    type: U.ObjectTransformer.From(DisponibilidadeProfessorView().type)
      .Pick({
        id: true,
        //
        dataInicio: true,
        dataFim: true,
        //
        vinculoProfessor: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const DisponibilidadeProfessorInputCreateView = () =>
  U.View({
    name: Tokens.DisponibilidadeProfessor.Views.InputCreate,
    description: "Dados de entrada para a criação de uma Disponibilidade Professor.",
    type: U.ObjectTransformer.From(DisponibilidadeProfessorView().type)
      .Pick({
        dataInicio: true,
        dataFim: true,
      })
      .Extends({
        properties: {
          vinculoProfessor: {
            targetsTo: Tokens.Vinculo.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const DisponibilidadeProfessorInputUpdateView = () =>
  U.View({
    name: Tokens.DisponibilidadeProfessor.Views.InputUpdate,
    description: "Dados de entrada para a atualização de uma Disponibilidade Professor.",
    type: UniNodeTypeObjectPartial(DisponibilidadeProfessorInputCreateView().type),
  });

export const DisponibilidadeProfessorFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.DisponibilidadeProfessor.Views.FindAllResult,
    description: "Resultados da busca a Disponibilidade Professor.",
    targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
  });

export const DisponibilidadeProfessorDeclarator = () =>
  CompileOperations({
    entity: Tokens.DisponibilidadeProfessor.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.DisponibilidadeProfessor.Operations.FindById,
          input: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
          output: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.DisponibilidadeProfessor.Operations.DeleteById,
        },

        create: {
          name: Tokens.DisponibilidadeProfessor.Operations.Create,
          input: Tokens.DisponibilidadeProfessor.Views.InputCreate,
        },
        updateById: {
          name: Tokens.DisponibilidadeProfessor.Operations.UpdateById,
          input: Tokens.DisponibilidadeProfessor.Views.InputUpdate,
        },

        list: {
          name: Tokens.DisponibilidadeProfessor.Operations.List,
          view: Tokens.DisponibilidadeProfessor.Views.FindAllResult,
          filters: [],
        },
      },
    },
  });

export const DisponibilidadeProfessorProvider = LazyModule({
  nodes: [
    DisponibilidadeProfessorEntity,
    DisponibilidadeProfessorView,
    DisponibilidadeProfessorFindOneInputView,
    DisponibilidadeProfessorFindOneResultView,
    DisponibilidadeProfessorInputCreateView,
    DisponibilidadeProfessorInputUpdateView,
    DisponibilidadeProfessorFindAllResult,
    DisponibilidadeProfessorDeclarator,
  ],
});
