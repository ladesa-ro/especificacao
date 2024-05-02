import { IOperation, PropertyTypes } from '@/helpers';
import { PaginatedInput } from '../../../core';
import {
  AmbienteCreate,
  AmbienteFindAllResult,
  AmbienteFindOneByIdInput,
  AmbienteFindOneResult,
  AmbienteUpdate,
} from './ambiente.declaration';

export const AmbienteCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'AmbienteCreate',
    description: 'Registra um ambiente no sistema.',

    input: {
      strategy: 'dto',
      body: AmbienteCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AmbienteFindOneResult as any,
        description: 'Ambiente criado.',
      },
    },
  } satisfies IOperation;
};

export const AmbienteFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'AmbienteFindOneById',
    description: 'Realiza a consulta a um ambiente por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: AmbienteFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AmbienteFindOneResult as any,
        description: 'Ambiente encontrado.',
      },
    },
  } satisfies IOperation;
};

export const AmbienteDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'AmbienteDelete',
    description: 'Realiza a remoção de um ambiente por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: AmbienteFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Ambiente removido.',
      },
    },
  } satisfies IOperation;
};

export const AmbienteUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'AmbienteUpdate',
    description: 'Realiza a alteração de um ambiente.',

    input: {
      strategy: 'dto',
      body: AmbienteUpdate as any,
      params: {
        id: AmbienteFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AmbienteFindOneResult as any,
        description: 'Ambiente atualizado.',
      },
    },
  } satisfies IOperation;
};

export const AmbienteFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'AmbienteFindAll',
    description: 'Lista de todos os ambientes cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
        'filter.bloco.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Bloco.',
        },
        'filter.bloco.campus.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Campus.',
        },
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: AmbienteFindAllResult as any,
        description: 'Resultados da busca de ambientes.',
      },
    },
  } satisfies IOperation;
};

export const AmbienteGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'AmbienteGetImagemCapa',
    description: 'Obtêm a imagem de capa do ambiente.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...AmbienteFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do ambiente.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const AmbienteSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'AmbienteSetImagemCapa',
    description: 'Define a imagem de capa do ambiente.',

    input: {
      strategy: 'file',
      mimeTypes: ['image/jpeg', 'image/png'],
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Imagem de capa definida.',
      },
    },
  } satisfies IOperation;
};
