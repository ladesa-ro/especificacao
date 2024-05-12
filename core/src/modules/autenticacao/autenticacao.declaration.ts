import { Validator } from '../../legacy/core';
import { IDeclaration, PropertyTypes } from '../../legacy/helpers';
import { IUsuarioFindOneResultDto, UsuarioFindOneResult } from './usuario';

export type IAutenticacaoDefinirSenhaInputDto = {
  senha: string;
  confirmarSenha: string;
  matriculaSiape: string;
};

export type IAutenticacaoDefinirSenhaResultDto = {
  result: string;
};

export type IAutenticacaoLoginInputDto = {
  matriculaSiape: string;
  senha: string;
};

export type IAutenticacaoLoginResultDto = {
  access_token: string | null;
  token_type: string | null;
  id_token: string | null;
  refresh_token: string | null;
  expires_in: number | null;
  expires_at: number | null;
  session_state: string | null;
  scope: string | null;
};

export type IAutenticacaoQuemSouEuResultDto = {
  usuario: IUsuarioFindOneResultDto | null;
};

export type IAutenticacaoRefreshInputDto = {
  refreshToken: string;
};

export enum ISisgeaAuthValidationErrorCode {
  AUTH_PASSWORD_INVALID = 'auth.password.invalid',
}

// =================================================================

export const AutenticacaoDefinirSenhaInput = () => {
  return {
    name: 'AutenticacaoDefinirSenhaInput',
    properties: {
      senha: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Nova senha.',
        validator: Validator(({ yup }) => yup.string().required().nonNullable()),
      },
      confirmarSenha: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Confirmação da nova senha.',
        validator: Validator(({ yup }) =>
          yup
            .string()
            .required()
            .nonNullable()
            .oneOf([yup.ref('senha')], 'A confirmação de senha deve estar correta.'),
        ),
      },
      matriculaSiape: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Matrícula do usuário.',
        validator: Validator(({ yup }) => yup.string().required().nonNullable()),
      },
    },
  } as IDeclaration;
};

export const AutenticacaoDefinirSenhaResult = () => {
  return {
    name: 'AutenticacaoDefinirSenhaResult',
    properties: {
      result: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Resultado.',
      },
    },
  } as IDeclaration;
};

export const AutenticacaoLoginInput = () => {
  return {
    name: 'AutenticacaoLoginInput',
    properties: {
      matriculaSiape: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Matrícula SIAPE.',
      },
      senha: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Matrícula SIAPE.',
      },
    },
  } as IDeclaration;
};

export const AutenticacaoLoginResult = () => {
  return {
    name: 'AutenticacaoLoginResult',
    properties: {
      access_token: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Token de acesso.',
      },
      token_type: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Tipo do token.',
      },
      id_token: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Token de identificação.',
      },
      refresh_token: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Token de refresh.',
      },
      expires_in: {
        nullable: true,
        type: PropertyTypes.INTEGER,
        description: 'Tempo de expiração do token.',
      },
      expires_at: {
        nullable: true,
        type: PropertyTypes.INTEGER,
        description: 'Tempo de expiração do token.',
      },
      session_state: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Estado da sessão.',
      },

      scope: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Escopo da autenticação.',
      },
    },
  } as IDeclaration;
};

export const AutenticacaoQuemSouEuResult = () => {
  return {
    name: 'AutenticacaoQuemSouEuResult',
    properties: {
      usuario: {
        nullable: true,
        type: UsuarioFindOneResult as any,
        description: 'Usuário autenticado.',
      },
    },
  } satisfies IDeclaration;
};

export const AutenticacaoRefreshInput = () => {
  return {
    name: 'AutenticacaoRefreshInput',
    properties: {
      refreshToken: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Token de refresh.',
      },
    },
  } satisfies IDeclaration;
};
