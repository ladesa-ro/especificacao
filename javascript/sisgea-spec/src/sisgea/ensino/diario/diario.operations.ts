import { IOperation, OperatorFindAll, OperatorFindOne } from '@/helpers';
import { DiarioCreate, DiarioFindAllResult, DiarioFindOneByIdInput, DiarioFindOneResult, DiarioUpdate } from './diario.declaration';

export const DiarioCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioCreate',
    description: 'Registra um diario no sistema.',

    input: {
      strategy: 'dto',
      body: DiarioCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DiarioFindOneResult as any,
        description: 'Diario criado.',
      },
    },
  } satisfies IOperation;
};

export const DiarioFindOneByIdOperator = OperatorFindOne({
  name: 'DiarioFindOneById',
  description: 'Realiza a consulta a um diario por ID.',
  params: DiarioFindOneByIdInput as any,
  success: {
    dto: DiarioFindOneResult as any,
    description: 'Diario encontrado.',
  },
});

export const DiarioDeleteOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioDelete',
    description: 'Realiza a remoção de um diario por ID.',

    input: {
      strategy: 'dto',
      params: DiarioFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: null as any,
        description: 'Diario removido.',
      },
    },
  } satisfies IOperation;
};

export const DiarioUpdateOperator = () => {
  return {
    gql: 'mutation',

    name: 'DiarioUpdate',
    description: 'Realiza a alteração de um diario.',

    input: {
      strategy: 'dto',
      body: DiarioUpdate as any,
      params: DiarioFindOneByIdOperator().input.params,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: DiarioFindOneResult as any,
        description: 'Diario atualizado.',
      },
    },
  } satisfies IOperation;
};

export const DiarioFindAllOperator = OperatorFindAll({
  name: 'DiarioFindAll',
  description: 'Lista de todos os diários cadastrados no sistema.',
  success: {
    dto: DiarioFindAllResult as any,
    description: 'Resultados da busca de diários.',
  },
  filters: [
    { path: 'turma.id', description: 'Filtrar resultados por ID de Turma.' },
    { path: 'disciplina.id', description: 'Filtrar resultados por ID de Disciplina.' },
    { path: 'ambientePadrao.id', description: 'Filtrar resultados por ID de Ambiente Padrão.' },
  ],
});

export const DiarioGetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'DiarioGetImagemCapa',
    description: 'Obtêm a imagem de capa do diário.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...DiarioFindOneByIdInput().properties.id,
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário da imagem do diário.',
      mimeTypes: ['image/jpeg'],
    },
  } satisfies IOperation;
};

export const DiarioSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'DiarioSetImagemCapa',
    description: 'Define a imagem de capa do diário.',

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
