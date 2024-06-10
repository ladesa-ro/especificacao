import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

export const DiarioEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Diario",

  properties: {
    situacao: U.String({
      description: "Situação do diário.",
    }),

    ano: U.Integer({
      description: "Ano do diário.",
    }),

    etapa: U.String({
      nullable: true,
      description: "Etapa do diário.",
    }),

    //

    turma: U.Reference({
      description: "Turma vinculada ao diário.",
      targetsTo: Tokens.Turma.Entity,
    }),

    disciplina: U.Reference({
      targetsTo: Tokens.Disciplina.Entity,
      description: "Disciplina vinculada ao diário.",
    }),

    ambientePadrao: U.Reference({
      nullable: true,
      description: "Ambiente padrão.",
      targetsTo: Tokens.Ambiente.Entity,
    }),

    imagemCapa: CoverImage(),
  },
});

export const DiarioView = U.View({
  name: Tokens.Diario.Entity,

  default: "Visão completa de um Diario",

  type: U.ObjectTransformer.From(DiarioEntity)
    .Extends({
      properties: {
        turma: {
          targetsTo: Tokens.Turma.Views.FindOneResult,
        },

        disciplina: {
          targetsTo: Tokens.Disciplina.Views.FindOneResult,
        },

        ambientePadrao: {
          targetsTo: Tokens.Ambiente.Views.FindOneResult,
        },

        imagemCapa: CoverImageView(),
      },
    })
    .Node(),
});

export const DiarioFindOneInputView = U.View({
  name: Tokens.Diario.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Diario por ID.",
  type: U.ObjectTransformer.From(DiarioView.type).Pick({ id: true }).Node(),
});

export const DiarioFindOneResultView = U.View({
  name: Tokens.Diario.Views.FindOneResult,

  partialOf: Tokens.Diario.Entity,
  description: "Visão FindOne de um Diario.",

  type: U.ObjectTransformer.From(DiarioView.type)
    .Pick({
      id: true,
      //
      situacao: true,
      ano: true,
      etapa: true,
      //
      turma: true,
      disciplina: true,
      ambientePadrao: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const DiarioInputCreateView = U.View({
  name: Tokens.Diario.Views.InputCreate,
  description: "Dados de entrada para a criação de um Diario.",
  type: U.ObjectTransformer.From(DiarioView.type)
    .Pick({
      nome: true,
      nomeAbreviado: true,
      turma: true,
      disciplina: true,
      ambientePadrao: true,
    })
    .Extends({
      properties: {
        turma: {
          targetsTo: Tokens.Turma.Views.FindOneInput,
        },

        disciplina: {
          targetsTo: Tokens.Disciplina.Views.FindOneInput,
        },

        ambientePadrao: {
          targetsTo: Tokens.Ambiente.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const DiarioInputUpdateView = U.View({
  name: Tokens.Diario.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um Diario.",
  type: UniNodeTypeObjectPartial(DiarioInputCreateView.type),
});

export const DiarioFindAllResult = PaginatedResultView({
  name: Tokens.Diario.Views.FindAllResult,
  description: "Resultados da busca a Diários.",
  targetsTo: Tokens.Diario.Views.FindOneResult,
});

export const DiarioDeclarator = CompileOperations({
  entity: Tokens.Diario.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Diario.Operations.FindById,
        input: Tokens.Diario.Views.FindOneInput,
        output: Tokens.Diario.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Diario.Operations.DeleteById,
      },

      create: {
        name: Tokens.Diario.Operations.Create,
        input: Tokens.Diario.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Diario.Operations.UpdateById,
        input: Tokens.Diario.Views.InputUpdate,
      },

      list: {
        name: Tokens.Diario.Operations.List,
        view: Tokens.Diario.Views.FindAllResult,
        filters: [
          ["turma.id", ["$eq"]],
          ["disciplina.id", ["$eq"]],
          ["ambientePadrao.id", ["$eq"]],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const DiarioProvider = BuildModule({
  nodes: [
    DiarioEntity,
    DiarioView,
    DiarioFindOneInputView,
    DiarioFindOneResultView,
    DiarioInputCreateView,
    DiarioInputUpdateView,
    DiarioFindAllResult,
    DiarioDeclarator,
  ],
});
