import { IOperation } from '@/helpers';
import { ObjectUuid, PaginatedInput } from '../../../core';
import { UsuarioCreate, UsuarioFindAllResult, UsuarioFindOneByIdInput, UsuarioFindOneResult, UsuarioUpdate } from './usuario.declaration';

export const UsuarioCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'UsuarioCreate',
    description: 'Registra um usuario no sistema.',

    input: {
      strategy: 'dto',
      body: UsuarioCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioFindOneResult as any,
        description: 'Usuario criado.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'UsuarioFindOneById',
    description: 'Realiza a consulta a um usuario por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: UsuarioFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioFindOneResult as any,
        description: 'Usuario encontrado.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'UsuarioDelete',
    description: 'Realiza a remoção de um usuario por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Usuario removido.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'UsuarioUpdate',
    description: 'Realiza a alteração de um usuario.',

    input: {
      strategy: 'dto',
      body: UsuarioUpdate as any,
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioFindOneResult as any,
        description: 'Usuario atualizado.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'UsuarioFindAll',
    description: 'Lista de todos os usuarios cadastrados no sistema.',

    input: {
      strategy: 'dto',
      query: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: UsuarioFindAllResult as any,
        description: 'Resultados da busca de usuarios.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'UsuarioGetImagemCapa',
    description: 'Obtêm a imagem de capa do usuario.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...UsuarioFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem de capa do usuario.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const UsuarioSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'UsuarioSetImagemCapa',
    description: 'Define a imagem de capa do usuario.',

    input: {
      strategy: 'file',
      mimeTypes: ['image/jpeg', 'image/png'],
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Imagem de capa definida.',
      },
    },
  } satisfies IOperation;
};

export const UsuarioGetImagemPerfilOperator = () => {
  return {
    gql: false,

    name: 'UsuarioGetImagemPerfil',
    description: 'Obtêm a imagem de perfil do usuario.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...UsuarioFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem de perfil do usuario.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const UsuarioSetImagemPerfilOperator = () => {
  return {
    gql: false,

    name: 'UsuarioSetImagemPerfil',
    description: 'Define a imagem de perfil do usuario.',

    input: {
      strategy: 'file',
      mimeTypes: ['image/jpeg', 'image/png'],
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Imagem de perfil definida.',
      },
    },
  } satisfies IOperation;
};
