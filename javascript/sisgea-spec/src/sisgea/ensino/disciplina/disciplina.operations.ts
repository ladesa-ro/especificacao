import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
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
      body: DisciplinaCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindOneResult as any,
        description: 'Disciplina criado.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaFindOneByIdOperator = OperatorFindOne({
  name: 'DisciplinaFindOneById',
  description: 'Realiza a consulta a uma disciplina por ID.',
  params: DisciplinaFindOneByIdInput,
  success: {
    dto: DisciplinaFindOneResult as any,
    description: 'Disciplina encontrado.',
  },
});

export const DisciplinaDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'DisciplinaDelete',
    description: 'Realiza a remoção de uma disciplina por ID.',

    input: {
      strategy: 'dto',
      params: DisciplinaFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
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
      body: DisciplinaUpdate as any,
      params: DisciplinaFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DisciplinaFindOneResult as any,
        description: 'Disciplina atualizado.',
      },
    },
  } satisfies IOperation;
};

export const DisciplinaFindAllOperator = OperatorFindAll({
  name: 'DisciplinaFindAll',
  description: 'Lista de todos os disciplinas cadastrados no sistema.',
  success: {
    dto: DisciplinaFindAllResult as any,
    description: 'Resultados da busca de disciplinas.',
  },
  filters: [], // Não há filtros adicionais para esta operação.
});

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

export const DisciplinaSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'DisciplinaSetImagemCapa',
    description: 'Define a imagem de capa da disciplina.',

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
