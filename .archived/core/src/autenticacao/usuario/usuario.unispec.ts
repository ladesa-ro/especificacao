import { Build as U } from "@unispec/ast-builder";
import {
  BuildCoverImageFindOneResultType,
  BuildCoverImageType,
  BuildGetCoverImageOperation,
  BuildGetProfileImageOperation,
  BuildSetCoverImageOperation,
  BuildSetProfileImageOperation,
  PaginatedResultView,
  ProfileImage,
  ProfileImageView,
} from "../../-shared";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

const UsuarioEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Usuario",

  properties: {
    nome: U.String({
      description: "Nome do usuário.",
      constraints: { minLength: 1 },
    }),

    matriculaSiape: U.String({
      description: "Matrícula Siape do usuário.",
      constraints: { minLength: 1 },
    }),

    email: U.String({
      format: "e-mail",
      description: "E-mail do usuário.",
    }),

    isSuperUser: U.Boolean({
      description: "Indentifica é um super usuário.",
    }),

    imagemCapa: BuildCoverImageType(),
    imagemPerfil: ProfileImage(),
  },
});

export const UsuarioView = () =>
  U.View({
    name: Tokens.Usuario.Entity,

    description: "Visão completa de um Usuário.",

    type: U.ObjectTransformer.From(UsuarioEntity)
      .Extends({
        properties: {
          imagemCapa: BuildCoverImageFindOneResultType(),
          imagemPerfil: ProfileImageView(),
        },
      })
      .Node(),
  });

export const UsuarioFindOneInputView = () =>
  U.View({
    name: Tokens.Usuario.Views.FindOneInput,
    description: "Dados de entrada para encontrar um Usuario por ID.",
    type: U.ObjectTransformer.From(UsuarioEntity).Pick({ id: true }).Node(),
  });

export const UsuarioFindOneResultView = () =>
  U.View({
    name: Tokens.Usuario.Views.FindOneResult,

    description: "Visão FindOne de um Usuário.",

    type: U.ObjectTransformer.From(UsuarioEntity)
      .Extends({
        partialOf: Tokens.Usuario.Entity,
      })
      .Pick({
        id: true,
        //
        nome: true,
        matriculaSiape: true,
        email: true,
        isSuperUser: true,
        //
        imagemCapa: true,
        imagemPerfil: true,
        //
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      })
      .Node(),
  });

export const UsuarioFindAllResultView = () =>
  PaginatedResultView({
    name: Tokens.Usuario.Views.FindAllResult,
    description: "Resultados da busca a Usuários.",
    targetsTo: Tokens.Usuario.Views.FindOneResult,
  });

export const UsuarioInputCreateView = () =>
  U.View({
    name: Tokens.Usuario.Views.InputCreate,
    description: "Dados de entrada para a criação de um Usuario.",

    type: U.ObjectTransformer.From(UsuarioView().type)
      .Pick({
        nome: true,
        matriculaSiape: true,
        email: true,
      })
      .Node(),
  });

export const UsuarioInputUpdateView = () =>
  U.View({
    name: Tokens.Usuario.Views.InputUpdate,
    description: "Dados de entrada para a atualização de um Usuario.",
    type: U.ObjectTransformer.From(UsuarioInputCreateView().type).Partial().Node(),
  });

export const UsuarioDeclarator = () =>
  CompileOperations({
    entity: Tokens.Usuario.Entity,

    operations: {
      crud: {
        findById: {
          name: Tokens.Usuario.Operations.FindById,
          input: Tokens.Usuario.Views.FindOneInput,
          output: Tokens.Usuario.Views.FindOneResult,
        },

        deleteById: {
          name: Tokens.Usuario.Operations.DeleteById,
        },
        create: {
          name: Tokens.Usuario.Operations.Create,
          input: Tokens.Usuario.Views.InputCreate,
        },
        updateById: {
          name: Tokens.Usuario.Operations.UpdateById,
          input: Tokens.Usuario.Views.InputUpdate,
        },

        list: {
          name: Tokens.Usuario.Operations.List,
          view: Tokens.Usuario.Views.FindAllResult,
          filters: [],
        },
      },
      extra: {
        //

        getCoverImage: BuildGetCoverImageOperation(Tokens.Usuario.Operations.GetCoverImage, Tokens.Usuario.Views.FindOneInput),
        setCoverImage: BuildSetCoverImageOperation(Tokens.Usuario.Operations.SetCoverImage, Tokens.Usuario.Views.FindOneInput),

        //

        getProfileImage: BuildGetProfileImageOperation(Tokens.Usuario.Operations.GetProfileImage, Tokens.Usuario.Views.FindOneInput),

        setProfileImage: BuildSetProfileImageOperation(Tokens.Usuario.Operations.SetProfileImage, Tokens.Usuario.Views.FindOneInput),
        //
      },
    },
  });

export const UsuarioProvider = LazyModule({
  nodes: [
    UsuarioEntity,
    UsuarioView,
    UsuarioFindAllResultView,
    UsuarioFindOneInputView,
    UsuarioFindOneResultView,
    UsuarioInputCreateView,
    UsuarioInputUpdateView,
    UsuarioDeclarator,
  ],
});
