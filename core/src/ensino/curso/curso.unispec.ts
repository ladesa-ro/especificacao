import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import {
  BuildCoverImageFindOneResultType,
  BuildCoverImageType,
  BuildGetCoverImageOperation,
  BuildSetCoverImageOperation,
  PaginatedResultView,
} from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

export const CursoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Curso",

  properties: {
    nome: U.String({
      description: "Nome do curso.",
      constraints: { minLength: 1 },
    }),

    nomeAbreviado: U.String({
      description: "Nome abreviado do curso.",
      constraints: { minLength: 1 },
    }),

    //

    campus: U.Reference({
      targetsTo: Tokens.Campus.Entity,
      description: "Campus que o curso pertence.",
    }),

    modalidade: U.Reference({
      targetsTo: Tokens.Modalidade.Entity,
      description: "Modalidade a que o curso pertence.",
    }),

    imagemCapa: BuildCoverImageType(),
  },
});

export const CursoView = U.View({
  name: Tokens.Curso.Entity,
  default: "Visão completa de um Curso",

  type: U.ObjectTransformer.From(CursoEntity)
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneResult,
        },

        modalidade: {
          targetsTo: Tokens.Modalidade.Views.FindOneResult,
        },

        imagemCapa: BuildCoverImageFindOneResultType(),
      },
    })
    .Node(),
});

export const CursoFindOneInputView = U.View({
  name: Tokens.Curso.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Curso por ID.",
  type: U.ObjectTransformer.From(CursoView.type).Pick({ id: true }).Node(),
});

export const CursoFindOneResultView = U.View({
  name: Tokens.Curso.Views.FindOneResult,

  description: "Visão FindOne de um Curso.",

  type: U.ObjectTransformer.From(CursoView.type)
    .Extends({ partialOf: Tokens.Curso.Entity })
    .Pick({
      id: true,
      //
      nome: true,
      nomeAbreviado: true,
      //
      campus: true,
      modalidade: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const CursoInputCreateView = U.View({
  name: Tokens.Curso.Views.InputCreate,
  description: "Dados de entrada para a criação de um Curso.",

  type: U.ObjectTransformer.From(CursoView.type)
    .Pick({
      nome: true,
      nomeAbreviado: true,
      campus: true,
      modalidade: true,
    })
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneInput,
        },

        modalidade: {
          targetsTo: Tokens.Modalidade.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const CursoInputUpdateView = U.View({
  name: Tokens.Curso.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um Curso.",
  type: UniNodeTypeObjectPartial(CursoInputCreateView.type),
});

export const CursoFindAllResult = PaginatedResultView({
  name: Tokens.Curso.Views.FindAllResult,
  description: "Resultados da busca a Cursos.",
  targetsTo: Tokens.Curso.Views.FindOneResult,
});

export const CursoDeclarator = CompileOperations({
  entity: Tokens.Curso.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Curso.Operations.FindById,
        input: Tokens.Curso.Views.FindOneInput,
        output: Tokens.Curso.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Curso.Operations.DeleteById,
      },
      create: {
        name: Tokens.Curso.Operations.Create,
        input: Tokens.Curso.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Curso.Operations.UpdateById,
        input: Tokens.Curso.Views.InputUpdate,
      },

      list: {
        name: Tokens.Curso.Operations.List,
        view: Tokens.Curso.Views.FindAllResult,
        filters: [
          ["campus.id", ["$eq"]],
          ["modalidade.id", ["$eq"]],
        ],
      },
    },

    extra: {
      getCoverImage: BuildGetCoverImageOperation(Tokens.Curso.Operations.GetCoverImage, Tokens.Curso.Views.FindOneInput),
      setCoverImage: BuildSetCoverImageOperation(Tokens.Curso.Operations.SetCoverImage, Tokens.Curso.Views.FindOneInput),
    },
  },
});

export const CursoProvider = BuildModule({
  nodes: [
    CursoEntity,
    CursoView,
    CursoFindOneInputView,
    CursoFindOneResultView,
    CursoInputCreateView,
    CursoInputUpdateView,
    CursoFindAllResult,
    CursoDeclarator,
  ],
});
