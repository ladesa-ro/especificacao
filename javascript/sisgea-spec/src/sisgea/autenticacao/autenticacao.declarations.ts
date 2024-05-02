import { IUsuarioFindOneResultDto } from './usuario';

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
