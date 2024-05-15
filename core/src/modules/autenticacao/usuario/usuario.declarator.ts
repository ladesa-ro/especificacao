import {
  UniDeclarator,
  UniTypeArray,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeString,
  UniTypeView,
} from '../../../common/unispec/types';
import { GetImagemCapa, GetImagemPerfil, ImagemCapa, ImagemPerfil, SetImagemCapa, SetImagemPerfil } from '../../../generic';
import { Tokens } from '../../tokens';

const UsuarioEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Usuario',

  properties: {
    nome: UniTypeString({
      type: 'string',
      description: 'Nome do usuário.',
      constraints: { minLength: 1 },
    }),

    matriculaSiape: UniTypeString({
      type: 'string',
      description: 'Matrícula Siape do usuário.',
      constraints: { minLength: 1 },
    }),

    email: UniTypeString({
      type: 'string',
      format: 'e-mail',
      description: 'E-mail do usuário.',
    }),

    imagemCapa: ImagemCapa(),

    imagemPerfil: ImagemPerfil(),

    isSuperUser: UniTypeBoolean({
      description: 'Indentifica é um super usuário.',
    }),

    vinculosAtivos: UniTypeArray({
      description: 'Vínculos ativos do usuário.',

      of: UniTypeReference({
        description: 'Vínculos ativos do usuário.',
        targetsTo: Tokens.Vinculo.Entity,
      }),
    }),
  },
});

export const UsuarioView = UniTypeView({
  name: Tokens.Usuario.Entity,
  description: 'Visão completa de um Usuario.',
  properties: UsuarioEntity.properties,
});

export const UsuarioFindOneInputView = UniTypeView({
  name: Tokens.Usuario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Usuario por ID.',
  properties: { ...UniTypePick(UsuarioEntity, { id: true }) },
});

export const UsuarioFindOneResultView = UniTypeView({
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
      imagemPerfil: true,
      vinculosAtivos: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const UsuarioInputCreateView = UniTypeView({
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

export const UsuarioInputUpdateView = UniTypeView({
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
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
      getImagemPerfil: GetImagemPerfil(),
      setImagemPerfil: SetImagemPerfil(),
    },
  },
});
