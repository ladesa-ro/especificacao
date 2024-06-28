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

export const TurmaEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Turma",

  properties: {
    periodo: U.String({
      constraints: { minLength: 1 },
      description: "Período do Turma.",
    }),

    curso: U.Reference({
      targetsTo: Tokens.Curso.Entity,
      description: "Curso da Turma.",
    }),

    ambientePadraoAula: U.Reference({
      nullable: true,
      required: false,
      targetsTo: Tokens.Ambiente.Entity,
      description: "Ambiente padrão da sala de aula.",
    }),

    imagemCapa: BuildCoverImageType(),
  },
});

export const TurmaView = () =>
  U.View({
    name: Tokens.Turma.Entity,

    description: "Visão completa de uma Turma",

    type: U.ObjectTransformer.From(TurmaEntity)
      .Extends({
        properties: {
          curso: {
            targetsTo: Tokens.Curso.Views.FindOneResult,
          },

          ambientePadraoAula: {
            targetsTo: Tokens.Ambiente.Views.FindOneResult,
          },

          imagemCapa: BuildCoverImageFindOneResultType(),
        },
      })
      .Node(),
  });

export const TurmaFindOneInputView = () =>
  U.View({
    name: Tokens.Turma.Views.FindOneInput,
    description: "Dados de entrada para encontrar uma Turma por ID.",
    type: U.ObjectTransformer.From(TurmaView().type).Pick({ id: true }).Node(),
  });

export const TurmaFindOneResultView = () =>
  U.View({
    name: Tokens.Turma.Views.FindOneResult,

    partialOf: Tokens.Turma.Entity,
    description: "Visão FindOne de uma Turma.",

    type: U.ObjectTransformer.From(TurmaView().type)
      .Pick({
        id: true,
        //
        periodo: true,
        //
        curso: true,
        ambientePadraoAula: true,
        imagemCapa: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const TurmaInputCreateView = () =>
  U.View({
    name: Tokens.Turma.Views.InputCreate,
    description: "Dados de entrada para a criação de uma Turma.",
    type: U.ObjectTransformer.From(TurmaView().type)
      .Pick({
        periodo: true,
        curso: true,
        ambientePadraoAula: true,
      })
      .Extends({
        properties: {
          curso: {
            targetsTo: Tokens.Curso.Views.FindOneInput,
          },

          ambientePadraoAula: {
            targetsTo: Tokens.Ambiente.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const TurmaInputUpdateView = () =>
  U.View({
    name: Tokens.Turma.Views.InputUpdate,
    description: "Dados de entrada para a atualização de uma Turma.",
    type: UniNodeTypeObjectPartial(TurmaInputCreateView().type),
  });

export const TurmaFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.Turma.Views.FindAllResult,
    description: "Resultados da busca a Turmas.",
    targetsTo: Tokens.Turma.Views.FindOneResult,
  });

export const TurmaDeclarator = () =>
  CompileOperations({
    entity: Tokens.Turma.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.Turma.Operations.FindById,
          input: Tokens.Turma.Views.FindOneInput,
          output: Tokens.Turma.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.Turma.Operations.DeleteById,
        },

        create: {
          name: Tokens.Turma.Operations.Create,
          input: Tokens.Turma.Views.InputCreate,
        },
        updateById: {
          name: Tokens.Turma.Operations.UpdateById,
          input: Tokens.Turma.Views.InputUpdate,
        },

        list: {
          name: Tokens.Turma.Operations.List,
          view: Tokens.Turma.Views.FindAllResult,
          filters: [
            ["ambientePadraoAula.nome", ["$eq"]],
            ["ambientePadraoAula.codigo", ["$eq"]],
            ["ambientePadraoAula.capacidade", ["$eq"]],
            ["ambientePadraoAula.tipo", ["$eq"]],
            ["curso.nome", ["$eq"]],
            ["curso.nomeAbreviado", ["$eq"]],
            ["curso.campus.id", ["$eq"]],
            ["curso.modalidade.id", ["$eq"]],
          ],
        },
      },

      extra: {
        getCoverImage: BuildGetCoverImageOperation(Tokens.Turma.Operations.GetCoverImage, Tokens.Turma.Views.FindOneInput),

        setCoverImage: BuildSetCoverImageOperation(Tokens.Turma.Operations.SetCoverImage, Tokens.Turma.Views.FindOneInput),
      },
    },
  });

export const TurmaProvider = LazyModule({
  nodes: [
    TurmaEntity,
    TurmaView,
    TurmaFindOneInputView,
    TurmaFindOneResultView,
    TurmaInputCreateView,
    TurmaInputUpdateView,
    TurmaFindAllResult,
    TurmaDeclarator,
  ],
});
