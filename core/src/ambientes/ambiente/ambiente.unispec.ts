import { BuildModule, Build as U, UniNodeTypeObjectPartial } from "@unispec/ast-builder";
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

const AmbienteEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Ambiente",

  properties: {
    nome: U.String({
      description: "Nome do ambiente/sala.",
      constraints: { minLength: 1 },
    }),

    descricao: U.String({
      description: "Descrição do ambiente/sala.",
      constraints: { minLength: 1 },
    }),

    codigo: U.String({
      description: "Código do ambiente/sala.",
      constraints: { minLength: 1 },
    }),

    capacidade: U.Integer({
      description: "Capacidade do ambiente/sala.",
      nullable: true,
    }),

    tipo: U.String({
      description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      nullable: true,
      constraints: { minLength: 1 },
    }),

    bloco: U.Reference({
      targetsTo: Tokens.Bloco.Entity,
      description: "Bloco que o ambiente/sala pertence.",
    }),

    imagemCapa: CoverImage(),
  },
});

export const AmbienteView = U.View({
  name: Tokens.Ambiente.Entity,

  description: "Visão completa de um Ambiente.",

  type: U.ObjectTransformer.From(AmbienteEntity)
    .Extends({
      properties: {
        bloco: {
          targetsTo: Tokens.Bloco.Views.FindOneResult,
        },

        imagemCapa: CoverImageView(),
      },
    })
    .Node(),
});

export const AmbienteFindOneInputView = U.View({
  name: Tokens.Ambiente.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Ambiente por ID.",

  type: U.ObjectTransformer.From(AmbienteView.type)
    .Pick({
      id: true,
    })
    .Node(),
});

export const AmbienteFindOneResultView = U.View({
  name: Tokens.Ambiente.Views.FindOneResult,

  description: "Visão FindOne de um Ambiente.",

  type: U.ObjectTransformer.From(AmbienteView.type)
    .Extends({
      partialOf: Tokens.Ambiente.Entity,
    })
    .Pick({
      id: true,
      //
      nome: true,
      descricao: true,
      codigo: true,
      capacidade: true,
      tipo: true,
      //
      bloco: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const AmbienteInputCreateView = U.View({
  name: Tokens.Ambiente.Views.InputCreate,

  description: "Dados de entrada para a criação de um ambiente.",

  type: U.ObjectTransformer.From(AmbienteView.type)
    .Pick({
      nome: true,
      descricao: true,
      codigo: true,
      capacidade: true,
      tipo: true,
      //
      bloco: true,
    })
    .Extends({
      properties: {
        bloco: {
          targetsTo: Tokens.Bloco.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

export const AmbienteInputUpdateView = U.View({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: "Dados de entrada para a atualização de um ambiente.",
  type: UniNodeTypeObjectPartial(AmbienteInputCreateView.type),
});

export const AmbienteFindAllResult = PaginatedResultView({
  name: Tokens.Ambiente.Views.FindAllResult,
  description: "Resultados da busca a Ambientes.",
  targetsTo: Tokens.Ambiente.Views.FindOneResult,
});

export const AmbienteDeclarator = CompileOperations({
  entity: Tokens.Ambiente.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Ambiente.Operations.FindById,
        input: Tokens.Ambiente.Views.FindOneInput,
        output: Tokens.Ambiente.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Ambiente.Operations.DeleteById,
      },
      create: {
        name: Tokens.Ambiente.Operations.Create,
        input: Tokens.Ambiente.Views.InputCreate,
      },
      updateById: {
        name: Tokens.Ambiente.Operations.UpdateById,
        input: Tokens.Ambiente.Views.InputUpdate,
      },

      list: {
        name: Tokens.Ambiente.Operations.List,
        view: Tokens.Ambiente.Views.FindAllResult,

        filters: [
          ["bloco.id", ["$eq"]],
          ["bloco.campus.id", ["$eq"]],
        ],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const AmbienteProvider = BuildModule({
  nodes: [
    AmbienteEntity,
    AmbienteView,
    AmbienteFindOneInputView,
    AmbienteFindOneResultView,
    AmbienteInputCreateView,
    AmbienteInputUpdateView,
    AmbienteFindAllResult,
    AmbienteDeclarator,
  ],
});
