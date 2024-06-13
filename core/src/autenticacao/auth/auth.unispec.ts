import { Build as U } from "@unispec/ast-builder";
import { LazyModule } from "../../-shared/common/LazyModule";
import { Tokens } from "../../tokens";

export enum IAuthValidationErrorCode {
  AUTH_PASSWORD_INVALID = "auth.password.invalid",
}

export const AuthLoginInputView = () =>
  U.View({
    name: Tokens.Auth.Views.LoginInput,

    type: U.Object({
      properties: {
        matriculaSiape: U.String({
          nullable: false,
          description: "Matrícula SIAPE.",
        }),
        senha: U.String({
          nullable: false,
          description: "Senha do usuário.",
        }),
      },
    }),
  });

export const AuthLoginOperation = () =>
  U.Operation({
    name: Tokens.Auth.Operations.Login,

    description: "Obtêm as credenciais de sessão por meio do envio das credenciais do usuário.",

    input: {
      body: Tokens.Auth.Views.LoginInput,
    },

    output: {
      success: Tokens.Auth.Views.SessionCredentials,
    },
  });

export const AuthRefreshInputView = () =>
  U.View({
    name: Tokens.Auth.Views.RefreshInput,

    description: "Dados de entrada para obter as credenciais de sessão por meio de login refresh.",

    type: U.Object({
      properties: {
        refreshToken: U.String({
          nullable: false,
          description: "Token de refresh.",
        }),
      },
    }),
  });

export const AuthRefreshOperation = () =>
  U.Operation({
    name: Tokens.Auth.Operations.Refresh,
    description: "Obtêm as credenciais de sessão por meio do envio do token de refresh.",

    body: AuthRefreshInputView,

    output: {
      success: Tokens.Auth.Views.SessionCredentials,
    },
  });

export const AuthWhoAmIResultView = () =>
  U.View({
    name: Tokens.Auth.Views.WhoAmIResult,
    description: "Informações sobre o ator.",

    type: U.Object({
      properties: {
        usuario: U.Reference({
          nullable: true,
          description: "Usuário autenticado.",
          targetsTo: Tokens.Usuario.Views.FindOneResult,
        }),
      },
    }),
  });

export const AuthWhoAmIOperation = () =>
  U.Operation({
    name: Tokens.Auth.Operations.WhoAmI,

    description: "Obtêm informações sobre o estado de autenticação do ator.",

    output: {
      success: Tokens.Auth.Views.WhoAmIResult,
    },
  });

export const AuthSessionCredentialsView = () =>
  U.View({
    name: Tokens.Auth.Views.SessionCredentials,

    id: false,
    dated: false,

    type: U.Object({
      properties: {
        access_token: U.String({
          nullable: true,
          description: "Token de acesso.",
        }),
        token_type: U.String({
          nullable: true,
          description: "Tipo do token.",
        }),
        id_token: U.String({
          nullable: true,
          description: "Token de identificação.",
        }),
        refresh_token: U.String({
          nullable: true,
          description: "Token de refresh.",
        }),
        expires_in: U.Integer({
          nullable: true,
          description: "Tempo de expiração do token.",
        }),
        expires_at: U.Integer({
          nullable: true,
          description: "Tempo de expiração do token.",
        }),
        session_state: U.String({
          nullable: true,
          description: "Estado da sessão.",
        }),
        scope: U.String({
          nullable: true,
          description: "Escopo da autenticação.",
        }),
      },
    }),
  });

export const AuthCredentialsSetInitialPasswordInputView = () =>
  U.View({
    name: Tokens.Auth.Views.SetInitialPasswordInput,

    description: "Define a senha inicial do usuário.",

    type: U.Object({
      properties: {
        matriculaSiape: U.String({
          nullable: false,
          description: "Matrícula SIAPE.",
        }),
        senha: U.String({
          nullable: false,
          description: "Nova senha.",
        }),
      },
    }),
  });

export const AuthCredentialsSetInitialPasswordOperation = () =>
  U.Operation({
    name: Tokens.Auth.Operations.SetInitialPassword,
    description: "Define a senha inicial do usuário",

    input: {
      body: Tokens.Auth.Views.SetInitialPasswordInput,
    },
    output: {
      success: U.Boolean({
        nullable: false,
        description: "Resultado.",
      }),
    },
  });

export const AuthProvider = LazyModule({
  nodes: [
    AuthLoginInputView,
    AuthLoginOperation,
    AuthRefreshInputView,
    AuthRefreshOperation,
    AuthWhoAmIResultView,
    AuthWhoAmIOperation,
    AuthSessionCredentialsView,
    AuthCredentialsSetInitialPasswordInputView,
    AuthCredentialsSetInitialPasswordOperation,
  ],
});
