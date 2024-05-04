import { IOperation, OperatorFindAll } from '@/helpers';
import { TurmaCreate, TurmaFindAllResult, TurmaFindOneByIdInput, TurmaFindOneResult, TurmaUpdate } from './turma.declaration';

export const TurmaCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'TurmaCreate',
    description: 'Registra um turma no sistema.',

    input: {
      strategy: 'dto',
      body: TurmaCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindOneResult as any,
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
        dto: TurmaFindOneResult as any,
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
        dto: null as any,
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
      body: TurmaUpdate as any,
      params: {
        id: TurmaFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: TurmaFindOneResult as any,
        description: 'Turma atualizado.',
      },
    },
  } satisfies IOperation;
};

export const TurmaFindAllOperator = OperatorFindAll({
  name: 'TurmaFindAll',
  description: 'Lista de todos os turmas cadastrados no sistema.',
  success: {
    dto: TurmaFindAllResult as any,
    description: 'Resultados da busca de turmas.',
  },
  filters: [
    { path: 'ambientePadraoAula.nome', description: 'Filtrar resultados por nome do ambiente padrão de aula.' },
    { path: 'ambientePadraoAula.codigo', description: 'Filtrar resultados por código do ambiente padrão de aula.' },
    { path: 'ambientePadraoAula.capacidade', description: 'Filtrar resultados por capacidade do ambiente padrão de aula.' },
    { path: 'ambientePadraoAula.tipo', description: 'Filtrar resultados por tipo do ambiente padrão de aula.' },
    { path: 'curso.nome', description: 'Filtrar resultados por nome do curso.' },
    { path: 'curso.nomeAbreviado', description: 'Filtrar resultados por nome abreviado do curso.' },
    { path: 'curso.campus.id', description: 'Filtrar resultados por ID do campus do curso.' },
    { path: 'curso.modalidade.id', description: 'Filtrar resultados por ID da modalidade do curso.' },
    { path: 'curso.modalidade.nome', description: 'Filtrar resultados por nome da modalidade do curso.' },
    { path: 'curso.modalidade.slug', description: 'Filtrar resultados por slug da modalidade do curso.' },
  ],
});

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

export const TurmaSetImagemCapaOperator = () => {
  return {
    gql: false,

    name: 'TurmaSetImagemCapa',
    description: 'Define a imagem de capa da turma.',

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
