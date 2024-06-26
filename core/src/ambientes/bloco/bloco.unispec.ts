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

const BlocoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Bloco",

  properties: {
    nome: U.String({
      constraints: { minLength: 1 },
      description: "Nome do Bloco.",
    }),

    codigo: U.String({
      constraints: { minLength: 1 },
      description: "Código do Bloco.",
    }),

    //

    campus: U.Reference({
      description: "Campus.",
      targetsTo: Tokens.Campus.Entity,
    }),

    imagemCapa: BuildCoverImageType(),

    ambientes: U.Array({
      description: "Ambientes.",

      items: U.Reference({
        description: "Ambiente.",
        targetsTo: Tokens.Ambiente.Entity,
      }),
    }),
  },
});

export const BlocoView = () =>
  U.View({
    name: Tokens.Bloco.Entity,

    description: "Visão completa de um Bloco.",

    type: U.ObjectTransformer.From(BlocoEntity)
      .Extends({
        properties: {
          campus: {
            targetsTo: Tokens.Campus.Views.FindOneResult,
          },

          imagemCapa: BuildCoverImageFindOneResultType(),

          ambientes: {
            items: {
              targetsTo: Tokens.Ambiente.Views.FindOneResult,
            },
          },
        },
      })
      .Node(),
  });

export const BlocoFindOneInputView = () =>
  U.View({
    name: Tokens.Bloco.Views.FindOneInput,
    description: "Dados de entrada para encontrar um Bloco por ID.",
    type: U.ObjectTransformer.From(BlocoView().type).Pick({ id: true }).Node(),
  });

export const BlocoFindOneResultView = () =>
  U.View({
    name: Tokens.Bloco.Views.FindOneResult,

    description: "Visão FindOne de um Bloco.",

    type: U.ObjectTransformer.From(BlocoView().type)
      .Extends({
        partialOf: Tokens.Bloco.Entity,
      })
      .Pick({
        id: true,
        //
        nome: true,
        codigo: true,
        //
        campus: true,
        imagemCapa: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const BlocoInputCreateView = () =>
  U.View({
    name: Tokens.Bloco.Views.InputCreate,

    description: "Dados de entrada para a criação de um Bloco.",

    type: U.ObjectTransformer.From(BlocoView().type)
      .Pick({
        nome: true,
        codigo: true,
        campus: true,
      })
      .Extends({
        properties: {
          campus: {
            targetsTo: Tokens.Campus.Views.FindOneInput,
          },
        },
      })
      .Node(),
  });

export const BlocoInputUpdateView = () =>
  U.View({
    name: Tokens.Bloco.Views.InputUpdate,
    description: "Dados de entrada para a atualização de um Bloco.",
    type: UniNodeTypeObjectPartial(BlocoInputCreateView().type),
  });

export const BlocoFindAllResult = () =>
  PaginatedResultView({
    name: Tokens.Bloco.Views.FindAllResult,
    description: "Resultados da busca a Blocos.",
    targetsTo: Tokens.Bloco.Views.FindOneResult,
  });

// =======================================

export const BlocoDeclarator = () =>
  CompileOperations({
    entity: Tokens.Bloco.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.Bloco.Operations.FindById,
          input: Tokens.Bloco.Views.FindOneInput,
          output: Tokens.Bloco.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.Bloco.Operations.DeleteById,
        },

        create: {
          name: Tokens.Bloco.Operations.Create,
          input: Tokens.Bloco.Views.InputCreate,
        },

        updateById: {
          name: Tokens.Bloco.Operations.UpdateById,
          input: Tokens.Bloco.Views.InputUpdate,
        },

        list: {
          name: Tokens.Bloco.Operations.List,
          view: Tokens.Bloco.Views.FindAllResult,
          filters: [["campus.id", ["$eq"]]],
        },
      },
      extra: {
        getCoverImage: BuildGetCoverImageOperation(Tokens.Bloco.Operations.GetCoverImage, Tokens.Bloco.Views.FindOneInput),
        setCoverImage: BuildSetCoverImageOperation(Tokens.Bloco.Operations.SetCoverImage, Tokens.Bloco.Views.FindOneInput),
      },
    },
  });

export const BlocoProvider = LazyModule({
  nodes: [
    BlocoEntity,
    BlocoView,
    BlocoFindOneInputView,
    BlocoFindOneResultView,
    BlocoInputCreateView,
    BlocoInputUpdateView,
    BlocoFindAllResult,
    BlocoDeclarator,
  ],
});
