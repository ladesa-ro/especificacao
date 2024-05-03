import { IOperation } from '@/helpers';
import { PaginatedInput } from '../../../core';
import {
  CalendarioLetivoCreate,
  CalendarioLetivoFindAllResult,
  CalendarioLetivoFindOneByIdInput,
  CalendarioLetivoFindOneResult,
  CalendarioLetivoUpdate,
} from './calendario-letivo.declaration';

export const CalendarioLetivoCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CalendarioLetivoCreate',
    description: 'Registra um calendário letivo no sistema.',

    input: {
      strategy: 'dto',
      body: CalendarioLetivoCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CalendarioLetivoFindOneResult as any,
        description: 'Calendário letivo criado.',
      },
    },
  } satisfies IOperation;
};

export const CalendarioLetivoFindOneByIdOperator = () => {
  return {
    gql: 'query',

    name: 'CalendarioLetivoFindOneById',
    description: 'Realiza a consulta a um calendário letivo por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CalendarioLetivoFindOneByIdInput().properties.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CalendarioLetivoFindOneResult as any,
        description: 'Calendário letivo encontrado.',
      },
    },
  } satisfies IOperation;
};

export const CalendarioLetivoDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'CalendarioLetivoDelete',
    description: 'Realiza a remoção de um calendário letivo por ID.',

    input: {
      strategy: 'dto',
      params: {
        id: CalendarioLetivoFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Calendário letivo removida.',
      },
    },
  } satisfies IOperation;
};

export const CalendarioLetivoUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CalendarioLetivoUpdate',
    description: 'Realiza a alteração de um calendário letivo.',

    input: {
      strategy: 'dto',
      body: CalendarioLetivoUpdate as any,
      params: {
        id: CalendarioLetivoFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CalendarioLetivoFindOneResult as any,
        description: 'Calendário letivo atualizado.',
      },
    },
  } satisfies IOperation;
};

export const CalendarioLetivoFindAllOperator = () => {
  return {
    gql: 'query',

    name: 'CalendarioLetivoFindAll',
    description: 'Lista de todos os calendários letivos cadastradas no sistema.',

    input: {
      strategy: 'dto',
      query: {
        ...PaginatedInput().properties,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CalendarioLetivoFindAllResult as any,
        description: 'Resultados da busca de calendários letivos.',
      },
    },
  } satisfies IOperation;
};