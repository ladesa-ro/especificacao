import { Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import {
  BuildCoverImageFindOneResultType,
  BuildCoverImageType,
  BuildGetCoverImageOperation,
  BuildSetCoverImageOperation,
  PaginatedResultView,
} from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export const DisciplinaEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Disciplina",

  properties: {
    nome: U.String({
      constraints: { minLength: 1 },
      description: "Nome da disciplina.",
    }),

    nomeAbreviado: U.String({
      constraints: { minLength: 1 },
      description: "Nome abreviado da disciplina.",
    }),

    cargaHoraria: U.Integer({
      description: "Carga horária da disciplina.",
      constraints: {
        min: 1,
        integer: true,
      },
    }),

    imagemCapa: BuildCoverImageType(),
  },
});

export const DisciplinaView = () =>
  U.View({
    name: Tokens.Disciplina.Entity,
    description: "Visão completa de uma Disciplina",
    type: U.ObjectTransformer.From(DisciplinaEntity)
      .Extends({
        properties: {
          imagemCapa: BuildCoverImageFindOneResultType(),
        },
      })
      .Node(),
  });

export const DisciplinaFindOneInputView = () =>
  U.View({
    name: Tokens.Disciplina.Views.FindOneInput,
    description: "Dados de entrada para encontrar uma Disciplina por ID.",
    type: U.ObjectTransformer.From(DisciplinaView().type).Pick({ id: true }).Node(),
  });

export const DisciplinaFindOneResultView = () =>
  U.View({
    name: Tokens.Disciplina.Views.FindOneResult,

    partialOf: Tokens.Disciplina.Entity,
    description: "Visão FindOne de uma Disciplina.",

    type: U.ObjectTransformer.From(DisciplinaView().type)
      .Pick({
        id: true,
        //
        nome: true,
        nomeAbreviado: true,
        cargaHoraria: true,
        //
        imagemCapa: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const DisciplinaInputCreateView = () =>
  U.View({
    name: Tokens.Disciplina.Views.InputCreate,
    description: "Dados de entrada para a criação de uma Disciplina.",
    type: U.ObjectTransformer.From(DisciplinaView().type)
      .Pick({
        nome: true,
        nomeAbreviado: true,
        cargaHoraria: true,
      })
      .Node(),
  });

export const DisciplinaInputUpdateView = () =>
  U.View({
    name: Tokens.Disciplina.Views.InputUpdate,
    description: "Dados de entrada para a atualização de uma Disciplina.",
    type: UniNodeTypeObjectPartial(DisciplinaInputCreateView().type),
  });

export const DisciplinaFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.Disciplina.Views.FindAllResult,
    description: "Resultados da busca a Disciplinas.",
    targetsTo: Tokens.Disciplina.Views.FindOneResult,
  });

export const DisciplinaDeclarator = () =>
  CompileOperations({
    entity: Tokens.Disciplina.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.Disciplina.Operations.FindById,
          input: Tokens.Disciplina.Views.FindOneInput,
          output: Tokens.Disciplina.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.Disciplina.Operations.DeleteById,
        },

        create: {
          name: Tokens.Disciplina.Operations.Create,
          input: Tokens.Disciplina.Views.InputCreate,
        },
        updateById: {
          name: Tokens.Disciplina.Operations.UpdateById,
          input: Tokens.Disciplina.Views.InputUpdate,
        },

        list: {
          name: Tokens.Disciplina.Operations.List,
          view: Tokens.Disciplina.Views.FindAllResult,
          filters: [],
        },
      },
      extra: {
        getCoverImage: BuildGetCoverImageOperation(Tokens.Disciplina.Operations.GetCoverImage, Tokens.Disciplina.Views.FindOneInput),
        setCoverImage: BuildSetCoverImageOperation(Tokens.Disciplina.Operations.SetCoverImage, Tokens.Disciplina.Views.FindOneInput),
      },
    },
  });

export const DisciplinaProvider = LazyModule({
  nodes: [
    DisciplinaEntity,
    DisciplinaView,
    DisciplinaFindOneInputView,
    DisciplinaFindOneResultView,
    DisciplinaInputCreateView,
    DisciplinaInputUpdateView,
    DisciplinaFindAllResult,
    DisciplinaDeclarator,
  ],
});
