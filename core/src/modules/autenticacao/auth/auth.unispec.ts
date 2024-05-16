import { UniOperation, UniProvider, UniTypeBoolean, UniTypeInteger, UniTypeReference, UniTypeString, UniView } from '../../../common';
import { Tokens } from '../../tokens';

export enum IAuthValidationErrorCode {
  AUTH_PASSWORD_INVALID = 'auth.password.invalid',
}

export const AuthLoginInputView = UniView({
  name: Tokens.Auth.Views.LoginInput,

  properties: {
    matriculaSiape: UniTypeString({
      nullable: false,
      description: 'Matrícula SIAPE.',
    }),
    senha: UniTypeString({
      nullable: false,
      description: 'Senha do usuário.',
    }),
  },
});

export const AuthLoginOperation = UniOperation({
  name: Tokens.Auth.Operations.Login,

  description: 'Obtêm as credenciais de sessão por meio do envio das credenciais do usuário.',

  input: {
    body: AuthLoginInputView,
  },

  output: {
    success: Tokens.Auth.Views.SessionCredentials,
  },
});

export const AuthRefreshInputView = UniView({
  name: Tokens.Auth.Views.RefreshInput,

  description: 'Dados de entrada para obter as credenciais de sessão por meio de login refresh.',

  properties: {
    refreshToken: UniTypeString({
      nullable: false,
      description: 'Token de refresh.',
    }),
  },
});

export const AuthRefreshOperation = UniOperation({
  name: Tokens.Auth.Operations.Refresh,
  description: 'Obtêm as credenciais de sessão por meio do envio do token de refresh.',

  body: AuthRefreshInputView,

  output: {
    success: Tokens.Auth.Views.SessionCredentials,
  },
});

export const AuthWhoAmIResultView = UniView({
  name: Tokens.Auth.Views.WhoAmIResult,
  description: 'Informações sobre o ator.',

  properties: {
    usuario: UniTypeReference({
      nullable: true,
      description: 'Usuário autenticado.',
      targetsTo: Tokens.Usuario.Views.FindOneResult,
    }),
  },
});

export const AuthWhoAmIOperation = UniOperation({
  name: Tokens.Auth.Operations.WhoAmI,

  description: 'Obtêm informações sobre o estado de autenticação do ator.',

  output: {
    success: Tokens.Auth.Views.WhoAmIResult,
  },
});

export const AuthSessionCredentialsView = UniView({
  name: Tokens.Auth.Views.SessionCredentials,

  id: false,
  dated: false,

  properties: {
    access_token: UniTypeString({
      nullable: true,
      description: 'Token de acesso.',
    }),
    token_type: UniTypeString({
      nullable: true,
      description: 'Tipo do token.',
    }),
    id_token: UniTypeString({
      nullable: true,
      description: 'Token de identificação.',
    }),
    refresh_token: UniTypeString({
      nullable: true,
      description: 'Token de refresh.',
    }),
    expires_in: UniTypeInteger({
      nullable: true,
      description: 'Tempo de expiração do token.',
    }),
    expires_at: UniTypeInteger({
      nullable: true,
      description: 'Tempo de expiração do token.',
    }),
    session_state: UniTypeString({
      nullable: true,
      description: 'Estado da sessão.',
    }),
    scope: UniTypeString({
      nullable: true,
      description: 'Escopo da autenticação.',
    }),
  },
});

export const AuthCredentialsSetInitialPasswordInputView = UniView({
  name: Tokens.Auth.Views.SetInitialPasswordInput,

  description: 'Define a senha inicial do usuário.',

  properties: {
    matriculaSiape: UniTypeString({
      nullable: false,
      description: 'Matrícula SIAPE.',
    }),
    senha: UniTypeString({
      nullable: false,
      description: 'Nova senha.',
    }),
  },
});

export const AuthCredentialsSetInitialPasswordOperation = UniOperation({
  name: Tokens.Auth.Operations.SetInitialPassword,
  description: 'Define a senha inicial do usuário',

  input: {
    body: Tokens.Auth.Views.SetInitialPasswordInput,
  },
  output: {
    success: UniTypeBoolean({ nullable: false, description: 'Resultado.' }),
  },
});

export const AuthProvider = UniProvider((ctx) => {
  ctx.Add(AuthLoginInputView);
  ctx.Add(AuthLoginOperation);
  ctx.Add(AuthRefreshInputView);
  ctx.Add(AuthRefreshOperation);
  ctx.Add(AuthWhoAmIResultView);
  ctx.Add(AuthWhoAmIOperation);
  ctx.Add(AuthSessionCredentialsView);
  ctx.Add(AuthCredentialsSetInitialPasswordInputView);
  ctx.Add(AuthCredentialsSetInitialPasswordOperation);
});
