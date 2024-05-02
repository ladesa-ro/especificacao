import { IOperation } from '@/helpers';
import { PaginatedInput } from '../../../core';
import {
  UsuarioCampusSetVinculosInput,
  UsuarioVinculoCampusFindAllResult,
  UsuarioVinculoCampusFindOneByIdInput,
  UsuarioVinculoCampusFindOneResult,
} from './usuario-vinculo-campus.declaration';

export const UsuarioVinculoCampusFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'UsuarioVinculoCampusFindOneById',
    description: 'Realiza a consulta a um vínculo de um usuário a um campus por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: UsuarioVinculoCampusFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioVinculoCampusFindOneResult,
        description: 'Vínculo de um usuário a um campus encontrado.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioVinculoCampusFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'UsuarioVinculoCampusFindAll',
    description: 'Lista de todos os vínculos dos usuários aos campi cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioVinculoCampusFindAllResult,
        description: 'Resultados da busca de vínculos de um usuário aos campi.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioCampusSetVinculosOperator = () => {
  return {
    gql: 'mutation',

    name: 'UsuarioCampusSetVinculos',
    description: 'Define os vínculos de um usuário a um campus.',

    input: {
      strategy: 'dto',
      body: UsuarioCampusSetVinculosInput,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioVinculoCampusFindOneResult,
        description: 'Vínculo de usuário a um campus atualizado.',
      },
    },
  } satisfies IOperation;
};
