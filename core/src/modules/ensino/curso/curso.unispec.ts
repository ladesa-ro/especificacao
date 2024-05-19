import { U } from '@unispec/core';
import { CoverImage, CoverImageView, PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const CursoEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Curso',

  properties: {
    nome: U.String({
      description: 'Nome do curso.',
      constraints: { minLength: 1 },
    }),

    nomeAbreviado: U.String({
      description: 'Nome abreviado do curso.',
      constraints: { minLength: 1 },
    }),

    //

    campus: U.Reference({
      targetsTo: Tokens.Campus.Entity,
      description: 'Campus que o curso pertence.',
    }),

    modalidade: U.Reference({
      targetsTo: Tokens.Modalidade.Entity,
      description: 'Modalidade a que o curso pertence.',
    }),

    imagemCapa: CoverImage(),
  },
});

export const CursoView = U.View({
  name: Tokens.Curso.Entity,
  default: 'Visão completa de um Curso',
  properties: {
    ...CursoEntity.properties,

    campus: U.ReferenceExtends(CursoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    modalidade: U.ReferenceExtends(CursoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const CursoFindOneInputView = U.View({
  name: Tokens.Curso.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Curso por ID.',
  properties: { ...U.ObjectPick(CursoView, { id: true }) },
});

export const CursoFindOneResultView = U.View({
  name: Tokens.Curso.Views.FindOneResult,

  partialOf: Tokens.Curso.Entity,
  description: 'Visão FindOne de um Curso.',

  properties: {
    ...U.ObjectPick(CursoView, {
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

export const CursoInputCreateView = U.View({
  name: Tokens.Curso.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Curso.',
  properties: {
    ...U.ObjectPick(CursoView, {
      nome: true,
      nomeAbreviado: true,
    }),

    campus: U.ReferenceExtends(CursoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneInput,
    }),

    modalidade: U.ReferenceExtends(CursoEntity.properties.modalidade, {
      targetsTo: Tokens.Modalidade.Views.FindOneInput,
    }),
  },
});

export const CursoInputUpdateView = U.View({
  name: Tokens.Curso.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Curso.',
  properties: {
    ...U.ObjectPartial(CursoInputCreateView),
  },
});

export const CursoFindAllResult = PaginatedResultView({
  name: Tokens.Curso.Views.FindAllResult,
  description: 'Realiza a busca a Cursos.',
  targetsTo: Tokens.Curso.Views.FindOneResult,
});

export const CursoDeclarator = U.Declarator({
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

export const CursoProvider = U.Provider((ctx) => {
  ctx.Add(CursoEntity);
  ctx.Add(CursoView);
  ctx.Add(CursoFindOneInputView);
  ctx.Add(CursoFindOneResultView);
  ctx.Add(CursoInputCreateView);
  ctx.Add(CursoInputUpdateView);
  ctx.Add(CursoFindAllResult);
  ctx.Add(CursoDeclarator);
});
