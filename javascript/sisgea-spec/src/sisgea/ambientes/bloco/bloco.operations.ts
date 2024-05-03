import { IOperation, PropertyTypes } from '@/helpers';
import { ObjectUuid, PaginatedInput } from '../../../core';
import { BlocoCreate, BlocoFindAllResult, BlocoFindOneByIdInput, BlocoFindOneResult, BlocoUpdate } from './bloco.declaration';

export const BlocoCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'BlocoCreate',
    description: 'Registra um bloco no sistema.',

    input: {
      strategy: 'dto',
      body: BlocoCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: BlocoFindOneResult as any,
        description: 'Bloco criado.',
      },
    },
  } satisfies IOperation;
};

export const BlocoFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'BlocoFindOneById',
    description: 'Realiza a consulta a um bloco por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: BlocoFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: BlocoFindOneResult as any,
        description: 'Bloco encontrado.',
      },
    },
  } satisfies IOperation;
};

export const BlocoDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'BlocoDelete',
    description: 'Realiza a remoção de um bloco por ID.',

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
        description: 'Bloco removido.',
      },
    },
  } satisfies IOperation;
};

export const BlocoUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'BlocoUpdate',
    description: 'Realiza a alteração de um bloco.',

    input: {
      strategy: 'dto',
      body: BlocoUpdate as any,
      params: {
        id: ObjectUuid().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: BlocoFindOneResult as any,
        description: 'Bloco atualizado.',
      },
    },
  } satisfies IOperation;
};

export const BlocoFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'BlocoFindAll',
    description: 'Lista de todos os blocos cadastrados no sistema.',

    input: {
      strategy: 'dto',
      query: {
        ...PaginatedInput().properties,
        'filter.campus.id': {
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
        dto: BlocoFindAllResult as any,
        description: 'Resultados da busca de blocos.',
      },
    },
  } satisfies IOperation;
};

export const BlocoGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'BlocoGetImagemCapa',
    description: 'Obtêm a imagem de capa do bloco.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...BlocoFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do bloco.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const BlocoSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'BlocoSetImagemCapa',
    description: 'Define a imagem de capa do bloco.',

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
