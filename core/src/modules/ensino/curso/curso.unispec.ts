import { CoverImage, CoverImageView, PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const CursoEntity = UniTypeEntity({
  name: 'Curso',

  id: 'uuid',
  dated: true,

  properties: {
    nome: UniTypeString({
      description: 'Nome do curso.',
      constraints: { minLength: 1 },
    }),

    nomeAbreviado: UniTypeString({
      description: 'Nome abreviado do curso.',
      constraints: { minLength: 1 },
    }),

    //

    campus: UniTypeReference({
      targetsTo: Tokens.Campus.Entity,
      description: 'Campus que o curso pertence.',
    }),

    modalidade: UniTypeReference({
      targetsTo: Tokens.Modalidade.Entity,
      description: 'Modalidade a que o curso pertence.',
    }),

    imagemCapa: CoverImage(),
  },
});

export const CursoView = UniView({
  name: Tokens.Curso.Entity,
  default: 'Visão completa de um Curso',
  properties: {
    ...CursoEntity.properties,

    campus: UniTypeReferenceExtends(CursoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    modalidade: UniTypeReferenceExtends(CursoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const CursoFindOneInputView = UniView({
  name: Tokens.Curso.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Curso por ID.',
  properties: { ...UniTypePick(CursoView, { id: true }) },
});

export const CursoFindOneResultView = UniView({
  name: Tokens.Curso.Views.FindOneResult,

  partialOf: Tokens.Curso.Entity,
  description: 'Visão FindOne de um Curso.',

  properties: {
    ...UniTypePick(CursoView, {
      id: true,
      //
      nome: true,
      nomeAbreviado: true,
      //
      campus: true,
      modalidade: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const CursoInputCreateView = UniView({
  name: Tokens.Curso.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Curso.',
  properties: {
    ...UniTypePick(CursoView, {
      nome: true,
      nomeAbreviado: true,
    }),

    campus: UniTypeReferenceExtends(CursoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),

    modalidade: UniTypeReferenceExtends(CursoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneInput,
    }),
  },
});

export const CursoInputUpdateView = UniView({
  name: Tokens.Curso.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Curso.',
  properties: {
    ...UniTypePartial(CursoInputCreateView),
  },
});

export const CursoFindAllResult = PaginatedResultView({
  name: Tokens.Curso.Views.FindAllResult,
  description: 'Realiza a busca a Cursos.',
  targetsTo: Tokens.Curso.Views.FindOneResult,
});

export const CursoDeclarator = UniDeclarator({
  entity: Tokens.Curso.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Curso.Views.FindOneInput,
        output: Tokens.Curso.Views.FindOneResult,
      },

      deleteById: Tokens.Curso.Views.FindOneInput,

      create: Tokens.Curso.Views.InputCreate,
      updateById: Tokens.Curso.Views.InputUpdate,

      list: {
        view: Tokens.Curso.Views.FindAllResult,
        filters: [
          ['campus.id', ['$eq']],
          ['modalidade.id', ['$eq']],
        ],
      },
    },
  },
});

export const CursoProvider = UniProvider((ctx) => {
  ctx.Add(CursoEntity);
  ctx.Add(CursoView);
  ctx.Add(CursoFindOneInputView);
  ctx.Add(CursoFindOneResultView);
  ctx.Add(CursoInputCreateView);
  ctx.Add(CursoInputUpdateView);
  ctx.Add(CursoFindAllResult);
  ctx.Add(CursoDeclarator);
});
