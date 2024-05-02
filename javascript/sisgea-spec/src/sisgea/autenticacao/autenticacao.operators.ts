import { IOperation } from '../../helpers';
import {
  AutenticacaoDefinirSenhaInput,
  AutenticacaoDefinirSenhaResult,
  AutenticacaoLoginInput,
  AutenticacaoLoginResult,
  AutenticacaoQuemSouEuResult,
  AutenticacaoRefreshInput,
} from './autenticacao.declaration';

export const AutenticacaoDefinirSenhaOperator = () => {
  return {
    gql: 'mutation',

    name: 'AutenticacaoDefinirSenha',
    description: 'Define a senha inicial do usuário no sistema.',

    input: {
      strategy: 'dto',
      body: AutenticacaoDefinirSenhaInput as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AutenticacaoDefinirSenhaResult as any,
        description: 'Resultado da definição inicial de senha.',
      },
    },
  } satisfies IOperation;
};

export const AutenticacaoLoginOperator = () => {
  return {
    gql: 'mutation',

    name: 'AutenticacaoLogin',
    description: 'Obtêm as credenciais de acesso.',

    input: {
      strategy: 'dto',
      body: AutenticacaoLoginInput as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AutenticacaoLoginResult as any,
        description: 'Credenciais de acesso do login.',
      },
    },
  } satisfies IOperation;
};

export const AutenticacaoQuemSouEuOperator = () => {
  return {
    gql: 'query',

    name: 'AutenticacaoQuemSouEu',
    description: 'Obtêm as informações do usuário autenticado.',

    output: {
      strategy: 'dto',
      success: {
        dto: AutenticacaoQuemSouEuResult as any,
        description: 'Informações sobre o usuário autenticado.',
      },
    },
  } satisfies IOperation;
};

export const AutenticacaoRefreshOperator = () => {
  return {
    gql: 'mutation',

    name: 'AutenticacaoRefresh',
    description: 'Obtêm as credenciais de acesso por meio de token refresh.',

    input: {
      strategy: 'dto',
      body: AutenticacaoRefreshInput as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AutenticacaoLoginResult as any,
        description: 'Credenciais de acesso do login.',
      },
    },
  } satisfies IOperation;
};
