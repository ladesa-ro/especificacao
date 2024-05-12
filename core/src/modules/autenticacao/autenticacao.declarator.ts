import { createDeclarator } from '../../types';
import { Usuario } from './usuario';

export enum ISisgeaAuthValidationErrorCode {
  AUTH_PASSWORD_INVALID = 'auth.password.invalid',
}

export const SessionCredentials = createDeclarator(() => ({
  name: 'SessionCredentials',

  id: false,
  dated: false,

  properties: {
    access_token: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Token de acesso.',
    },
    token_type: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Tipo do token.',
    },
    id_token: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Token de identificação.',
    },
    refresh_token: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Token de refresh.',
    },
    expires_in: {
      required: true,
      nullable: true,
      type: 'integer',
      description: 'Tempo de expiração do token.',
    },
    expires_at: {
      required: true,
      nullable: true,
      type: 'integer',
      description: 'Tempo de expiração do token.',
    },
    session_state: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Estado da sessão.',
    },
    scope: {
      required: true,
      nullable: true,
      type: 'string',
      description: 'Escopo da autenticação.',
    },
  },

  views: {
    default: ['access_token', 'token_type', 'id_token', 'refresh_token', 'expires_in', 'expires_at', 'session_state', 'scope'],
  },

  operations: {
    extra: {
      login: {
        description: 'Obtêm as credenciais de sessão por meio do envio das credenciais do usuário.',
        body: {
          matriculaSiape: {
            type: 'string',
            nullable: false,
            required: true,
            description: 'Matrícula SIAPE.',
          },
          senha: {
            type: 'string',
            nullable: false,
            required: true,
            description: 'Senha do usuário.',
          },
        },
        outputs: {
          success: { view: 'default' },
        },
      },
      refresh: {
        description: 'Obtêm as credenciais de sessão por meio do envio do token de refresh.',
        body: {
          refreshToken: {
            type: 'string',
            nullable: false,
            required: true,
            description: 'Token de refresh.',
          },
        },
        outputs: {
          success: { view: 'default' },
        },
      },

      whoAmI: {
        description: 'Obtêm informações sobre o usuário logado ou não.',
        outputs: {
          success: {
            usuario: {
              type: 'reference',
              nullable: true,
              required: true,
              description: 'Usuário autenticado.',
              references: 'declarator',
              declarator: () => Usuario,
            },
          },
        },
      },
    },
  },
}));

export const Credentials = createDeclarator(() => ({
  name: 'Credenciais os usuários',

  properties: {},
  views: {
    default: [],
  },

  operations: {
    extra: {
      setPassword: {
        description: 'Define a senha inicial do usuário',
        body: {
          matriculaSiape: {
            type: 'string',
            nullable: false,
            required: true,
            description: 'Matrícula SIAPE.',
          },
          senha: {
            type: 'string',
            nullable: false,
            required: true,
            description: 'Nova senha.',
          },
        },
        outputs: {
          success: {
            result: {
              type: 'string',
              nullable: false,
              required: true,
              description: 'Resultado.',
            },
          },
        },
      },
    },
  },
}));
