import { IOperation, PropertyTypes } from '@/helpers';
import { PaginatedInput } from '../../../core';
import { CursoCreate, CursoFindAllResult, CursoFindOneByIdInput, CursoFindOneResult, CursoUpdate } from './curso.declaration';

export const CursoCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CursoCreate',
    description: 'Registra um curso no sistema.',

    input: {
      strategy: 'dto',
      body: CursoCreate,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindOneResult,
        description: 'Curso criado.',
      },
    },
  } satisfies IOperation;
};

export const CursoFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'CursoFindOneById',
    description: 'Realiza a consulta a um curso por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CursoFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindOneResult,
        description: 'Curso encontrado.',
      },
    },
  } satisfies IOperation;
};

export const CursoDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'CursoDelete',
    description: 'Realiza a remoção de um curso por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CursoFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Curso removido.',
      },
    },
  } satisfies IOperation;
};

export const CursoUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CursoUpdate',
    description: 'Realiza a alteração de um curso.',

    input: {
      strategy: 'dto',
      body: CursoUpdate,
      params: {
        id: CursoFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindOneResult,
        description: 'Curso atualizado.',
      },
    },
  } satisfies IOperation;
};

export const CursoFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'CursoFindAll',
    description: 'Lista de todos os cursos cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
        'filter.campus.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Campus.',
        },
        'filter.campus.cnpj': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por CNPJ de Campus.',
        },
        'filter.campus.razaoSocial': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Razão Social de Campus.',
        },
        'filter.campus.nomeFantasia': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por Nome Fantasia de Campus.',
        },
        'filter.modalidade.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados por ID de Modalidade.',
        },
        'filter.modalidade.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.STRING,
          description: 'Filtrar resultados por Nome de Modalidade.',
        },
        'filter.modalidade.slug': {
          nullable: true,
          required: false,
          type: PropertyTypes.STRING,
          description: 'Filtrar resultados por Slug de Modalidade.',
        },
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindAllResult,
        description: 'Resultados da busca de cursos.',
      },
    },
  } satisfies IOperation;
};

export const CursoGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'CursoGetImagemCapa',
    description: 'Obtêm a imagem de capa do curso.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...CursoFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do curso.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const CursoSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'CursoSetImagemCapa',
    description: 'Define a imagem de capa do curso.',

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
