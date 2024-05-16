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
import {
  UniDeclarator,
  UniProvider,
  UniTypeArray,
  UniTypeArrayExtends,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const UsuarioEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Usuario',

  properties: {
    nome: UniTypeString({
      description: 'Nome do usuário.',
      constraints: { minLength: 1 },
    }),

    matriculaSiape: UniTypeString({
      description: 'Matrícula Siape do usuário.',
      constraints: { minLength: 1 },
    }),

    email: UniTypeString({
      format: 'e-mail',
      description: 'E-mail do usuário.',
    }),

    isSuperUser: UniTypeBoolean({
      description: 'Indentifica é um super usuário.',
    }),

    imagemCapa: CoverImage(),
    imagemPerfil: ProfileImage(),

    vinculosAtivos: UniTypeArray({
      description: 'Vínculos ativos do Usuário.',

      of: UniTypeReference({
        description: 'Vínculos ativos do Usuário.',
        targetsTo: Tokens.Vinculo.Entity,
      }),
    }),
  },
});

export const UsuarioView = UniView({
  name: Tokens.Usuario.Entity,

  description: 'Visão completa de um Usuário.',

  properties: {
    ...UsuarioEntity.properties,

    imagemCapa: CoverImageView(),
    imagemPerfil: ProfileImageView(),

    vinculosAtivos: UniTypeArrayExtends(UsuarioEntity.properties.vinculosAtivos, {
      of: {
        targetsTo: Tokens.Vinculo.Views.FindOneResult,
      },
    }),
  },
});

export const UsuarioFindOneInputView = UniView({
  name: Tokens.Usuario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Usuario por ID.',
  properties: { ...UniTypePick(UsuarioEntity, { id: true }) },
});

export const UsuarioFindOneResultView = UniView({
  name: Tokens.Usuario.Views.FindOneResult,

  partialOf: Tokens.Usuario.Entity,
  description: 'Visão FindOne de um Usuário.',

  properties: {
    ...UniTypePick(UsuarioEntity, {
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

export const UsuarioInputCreateView = UniView({
  name: Tokens.Usuario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Usuario.',
  properties: {
    ...UniTypePick(UsuarioView, {
      nome: true,
      matriculaSiape: true,
      email: true,
    }),
  },
});

export const UsuarioInputUpdateView = UniView({
  name: Tokens.Usuario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Usuario.',
  properties: {
    ...UniTypePartial(UsuarioInputCreateView),
  },
});

export const UsuarioDeclarator = UniDeclarator({
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

export const UsuarioProvider = UniProvider((ctx) => {
  ctx.Add(UsuarioEntity);
  ctx.Add(UsuarioView);
  ctx.Add(UsuarioFindOneInputView);
  ctx.Add(UsuarioFindOneResultView);
  ctx.Add(UsuarioInputCreateView);
  ctx.Add(UsuarioInputUpdateView);
  ctx.Add(UsuarioDeclarator);
});
