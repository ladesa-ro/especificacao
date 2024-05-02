import { IOperation, PropertyTypes } from '@/helpers';
import { PaginatedInput } from '../../../core';
import { TurmaCreate, TurmaFindAllResult, TurmaFindOneByIdInput, TurmaFindOneResult, TurmaUpdate } from './turma.declaration';

export const TurmaCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'TurmaCreate',
    description: 'Registra um turma no sistema.',

    input: {
      strategy: 'dto',
      body: TurmaCreate,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindOneResult,
        description: 'Turma criado.',
      },
    },
  } satisfies IOperation;
};

export const TurmaFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'TurmaFindOneById',
    description: 'Realiza a consulta a um turma por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: TurmaFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindOneResult,
        description: 'Turma encontrado.',
      },
    },
  } satisfies IOperation;
};

export const TurmaDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'TurmaDelete',
    description: 'Realiza a remoção de um turma por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: TurmaFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Turma removido.',
      },
    },
  } satisfies IOperation;
};

export const TurmaUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'TurmaUpdate',
    description: 'Realiza a alteração de um turma.',

    input: {
      strategy: 'dto',
      body: TurmaUpdate,
      params: {
        id: TurmaFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindOneResult,
        description: 'Turma atualizado.',
      },
    },
  } satisfies IOperation;
};

export const TurmaFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'TurmaFindAll',
    description: 'Lista de todos os turmas cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,

        'filter.ambientePadraoAula.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.ambientePadraoAula.codigo': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.ambientePadraoAula.capacidade': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.ambientePadraoAula.tipo': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.nomeAbreviado': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.campus.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.modalidade.id': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.modalidade.nome': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
        'filter.curso.modalidade.slug': {
          nullable: true,
          required: false,
          type: PropertyTypes.UUID,
          description: 'Filtrar resultados.',
        },
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindAllResult,
        description: 'Resultados da busca de turmas.',
      },
    },
  } satisfies IOperation;
};

export const TurmaGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'TurmaGetImagemCapa',
    description: 'Obtêm a imagem de capa do turma.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...TurmaFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do turma.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};
