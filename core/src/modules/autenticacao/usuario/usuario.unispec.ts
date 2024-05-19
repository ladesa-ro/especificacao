import { U } from '@unispec/core';
import {
  CoverImage,
  CoverImageView,
  GetCoverImage,
  GetProfileImage,
  ProfileImage,
  ProfileImageView,
  SetCoverImage,
  SetProfileImage,
} from '../../-shared';
import { Tokens } from '../../tokens';

const UsuarioEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Usuario',

  properties: {
    nome: U.String({
      description: 'Nome do usuário.',
      constraints: { minLength: 1 },
    }),

    matriculaSiape: U.String({
      description: 'Matrícula Siape do usuário.',
      constraints: { minLength: 1 },
    }),

    email: U.String({
      format: 'e-mail',
      description: 'E-mail do usuário.',
    }),

    isSuperUser: U.Boolean({
      description: 'Indentifica é um super usuário.',
    }),

    imagemCapa: CoverImage(),
    imagemPerfil: ProfileImage(),

    vinculosAtivos: U.Array({
      description: 'Vínculos ativos do Usuário.',

      items: U.Reference({
        description: 'Vínculos ativos do Usuário.',
        targetsTo: Tokens.Vinculo.Entity,
      }),
    }),
  },
});

export const UsuarioView = U.View({
  name: Tokens.Usuario.Entity,

  description: 'Visão completa de um Usuário.',

  properties: {
    ...UsuarioEntity.properties,

    imagemCapa: CoverImageView(),
    imagemPerfil: ProfileImageView(),

    vinculosAtivos: U.ArrayExtends(UsuarioEntity.properties.vinculosAtivos, {
      items: {
        targetsTo: Tokens.Vinculo.Views.FindOneResult,
      },
    }),
  },
});

export const UsuarioFindOneInputView = U.View({
  name: Tokens.Usuario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Usuario por ID.',
  properties: { ...U.ObjectPick(UsuarioEntity, { id: true }) },
});

export const UsuarioFindOneResultView = U.View({
  name: Tokens.Usuario.Views.FindOneResult,

  partialOf: Tokens.Usuario.Entity,
  description: 'Visão FindOne de um Usuário.',

  properties: {
    ...U.ObjectPick(UsuarioEntity, {
      id: true,
      //
      nome: true,
      matriculaSiape: true,
      email: true,
      isSuperUser: true,
      //
      imagemCapa: true,
      ProfileImage: true,
      vinculosAtivos: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const UsuarioInputCreateView = U.View({
  name: Tokens.Usuario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Usuario.',
  properties: {
    ...U.ObjectPick(UsuarioView, {
      nome: true,
      matriculaSiape: true,
      email: true,
    }),
  },
});

export const UsuarioInputUpdateView = U.View({
  name: Tokens.Usuario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Usuario.',
  properties: {
    ...U.ObjectPartial(UsuarioInputCreateView),
  },
});

export const UsuarioDeclarator = U.Declarator({
  entity: Tokens.Usuario.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Usuario.Views.FindOneInput,
        output: Tokens.Usuario.Views.FindOneResult,
      },

      deleteById: Tokens.Usuario.Views.FindOneInput,

      create: Tokens.Usuario.Views.InputCreate,
      updateById: Tokens.Usuario.Views.InputUpdate,

      list: {
        view: Tokens.Usuario.Views.FindOneResult,
        filters: [],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
      getProfileImage: GetProfileImage(),
      setProfileImage: SetProfileImage(),
    },
  },
});

export const UsuarioProvider = U.Provider((ctx) => {
  ctx.Add(UsuarioEntity);
  ctx.Add(UsuarioView);
  ctx.Add(UsuarioFindOneInputView);
  ctx.Add(UsuarioFindOneResultView);
  ctx.Add(UsuarioInputCreateView);
  ctx.Add(UsuarioInputUpdateView);
  ctx.Add(UsuarioDeclarator);
});
