using Unispec.JsonSchema;

namespace Ladesa.Schemas;

/** Dados de entrada para autenticação. */
@entity(Tokens.Auth_LoginInput_View)
model AuthLoginInputView {
  /** Matrícula SIAPE. */
  matriculaSiape: string;

  /** Senha do usuário. */
  senha: string;
}

/** Operação de login. */
model AuthLoginOperation
  is GenericOperation<
    Tokens.Auth_Operations_Login,
    #{ meta: #{ gql: #{ kind: "mutation" } } },
    {
      input: {
        body: AuthLoginInputView;
      };
      output: {
        success: AuthSessionCredentialsView;
      };
    }
  >;

/** Dados de entrada para refresh de autenticação. */
@entity(Tokens.Auth_RefreshInput_View)
model AuthRefreshInputView {
  /** Token de refresh. */
  refreshToken: string;
}

/** Obtêm as credenciais de sessão por meio do envio do token de refresh. */
model AuthRefreshOperation
  is GenericOperation<
    Tokens.Auth_Operations_Refresh,
    #{ meta: #{ gql: #{ kind: "mutation" } } },
    {
      input: {
        body: AuthRefreshInputView;
      };
      output: {
        success: AuthSessionCredentialsView;
      };
    }
  >;

/** Informações sobre o ator.. */
@entity(Tokens.Auth_WhoAmIResult_View)
model AuthWhoAmIResultView {
  /** Usuário autenticado. */
  usuario: UsuarioFindOneResultView | null;

  /** Vínculos do usuário logado. */
  perfisAtivos: PerfilFindOneResultView[];
}

/** Obtêm informações sobre o estado de autenticação do ator. */
model AuthWhoAmIOperation
  is GenericOperation<
    Tokens.Auth_Operations_WhoAmI,
    #{ meta: #{ gql: #{ kind: "query" } } },
    {
      output: {
        success: AuthWhoAmIResultView;
      };
    }
  >;

/** Credenciais de sessão. */
@entity(Tokens.Auth_SessionCredentials_View)
model AuthSessionCredentialsView {
  /** Token de acesso. */
  access_token: string | null;

  /** Tipo do token. */
  token_type: string | null;

  /** Token de identificação. */
  id_token: string | null;

  /** Token de refresh. */
  refresh_token: string | null;

  /** Tempo de expiração do token. */
  expires_in: integer | null;

  /** Tempo de expiração do token. */
  expires_at: integer | null;

  /** Estado da sessão. */
  session_state: string | null;

  /** Escopo da autenticação. */
  scope: string | null;
}

/** Dados de entrada para definir a senha inicial. */
@entity(Tokens.Auth_SetInitialPasswordInput_View)
model AuthCredentialsSetInitialPasswordInputView {
  /** Matrícula SIAPE. */
  matriculaSiape: string;

  /** Nova senha. */
  senha: string;
}

/** Operação para definir a senha inicial. */
model AuthCredentialsSetInitialPasswordOperation
  is GenericOperation<
    Tokens.Auth_Operations_SetInitialPassword,
    #{ meta: #{ gql: #{ kind: "mutation" } } },
    {
      input: {
        body: AuthCredentialsSetInitialPasswordInputView;
      };
      output: {
        success: boolean;
      };
    }
  >;
