import { IOperation, OperatorFindAll } from '@/helpers';
import { CursoCreate, CursoFindAllResult, CursoFindOneByIdInput, CursoFindOneResult, CursoUpdate } from './curso.declaration';

export const CursoCreateOperator = () => {
  return {
    gql: 'mutation',

    name: 'CursoCreate',
    description: 'Registra um curso no sistema.',

    input: {
      strategy: 'dto',
      body: CursoCreate as any,
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindOneResult as any,
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
        dto: CursoFindOneResult as any,
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
        dto: null as any,
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
      body: CursoUpdate as any,
      params: {
        id: CursoFindOneByIdOperator().input.params.id,
      },
    },

    output: {
      strategy: 'dto',
      success: {
        dto: CursoFindOneResult as any,
        description: 'Curso atualizado.',
      },
    },
  } satisfies IOperation;
};

export const CursoFindAllOperator = OperatorFindAll({
  name: 'CursoFindAll',
  description: 'Lista de todos os cursos cadastrados no sistema.',
  success: {
    dto: CursoFindAllResult as any,
    description: 'Resultados da busca de cursos.',
  },
  filters: [
    { path: 'campus.id', description: 'Filtrar resultados por ID de Campus.' },
    { path: 'campus.cnpj', description: 'Filtrar resultados por CNPJ de Campus.' },
    { path: 'campus.razaoSocial', description: 'Filtrar resultados por Razão Social de Campus.' },
    { path: 'campus.nomeFantasia', description: 'Filtrar resultados por Nome Fantasia de Campus.' },
    { path: 'modalidade.id', description: 'Filtrar resultados por ID de Modalidade.' },
    { path: 'modalidade.nome', description: 'Filtrar resultados por Nome de Modalidade.' },
    { path: 'modalidade.slug', description: 'Filtrar resultados por Slug de Modalidade.' },
  ],
});

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
        dto: null as any,
        description: 'Imagem de capa definida.',
      },
    },
  } satisfies IOperation;
};
