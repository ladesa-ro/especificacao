import { IOperation } from '@/helpers';
import { PaginatedInput } from '../../../core';
import {
  DisciplinaCreate,
  DisciplinaFindAllResult,
  DisciplinaFindOneByIdInput,
  DisciplinaFindOneResult,
  DisciplinaUpdate,
} from './disciplina.declaration';

export const DisciplinaCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DisciplinaCreate',
    description: 'Registra uma disciplina no sistema.',

    input: {
      strategy: 'dto',
      body: DisciplinaCreate,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindOneResult,
        description: 'Disciplina criado.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'DisciplinaFindOneById',
    description: 'Realiza a consulta a uma disciplina por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: DisciplinaFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindOneResult,
        description: 'Disciplina encontrado.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'DisciplinaDelete',
    description: 'Realiza a remoção de uma disciplina por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: DisciplinaFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null,
        description: 'Disciplina removido.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DisciplinaUpdate',
    description: 'Realiza a alteração de uma disciplina.',

    input: {
      strategy: 'dto',
      body: DisciplinaUpdate,
      params: {
        id: DisciplinaFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindOneResult,
        description: 'Disciplina atualizado.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'DisciplinaFindAll',
    description: 'Lista de todos os disciplinas cadastrados no sistema.',

    input: {
      strategy: 'dto',
      params: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindAllResult,
        description: 'Resultados da busca de disciplinas.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'DisciplinaGetImagemCapa',
    description: 'Obtêm a imagem de capa do disciplina.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...DisciplinaFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do disciplina.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};
