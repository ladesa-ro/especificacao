import { U } from '@unispec/core';
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import { Tokens } from '../../tokens';

export const TurmaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Turma',

  properties: {
    periodo: U.String({
      constraints: { minLength: 1 },
      description: 'Período do Turma.',
    }),

    curso: U.Reference({
      targetsTo: Tokens.Curso.Entity,
      description: 'Curso da Turma.',
    }),

    ambientePadraoAula: U.Reference({
      nullable: true,
      required: false,
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente padrão da sala de aula.',
    }),

    imagemCapa: CoverImage(),
  },
});

export const TurmaView = U.View({
  name: Tokens.Turma.Entity,

  default: 'Visão completa de uma Turma',

  properties: {
    ...TurmaEntity.properties,

    curso: U.ReferenceExtends(TurmaEntity.properties.curso, {
      targetsTo: Tokens.Curso.Views.FindOneResult,
    }),

    ambientePadraoAula: U.ReferenceExtends(TurmaEntity.properties.ambientePadraoAula, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const TurmaFindOneInputView = U.View({
  name: Tokens.Turma.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Turma por ID.',
  properties: { ...U.ObjectPick(TurmaView, { id: true }) },
});

export const TurmaFindOneResultView = U.View({
  name: Tokens.Turma.Views.FindOneResult,

  partialOf: Tokens.Turma.Entity,
  description: 'Visão FindOne de uma Turma.',

  properties: {
    ...U.ObjectPick(TurmaView, {
      id: true,
      //
      periodo: true,
      //
      curso: true,
      ambientePadraoAula: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const TurmaInputCreateView = U.View({
  name: Tokens.Turma.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Turma.',
  properties: {
    ...U.ObjectPick(TurmaView, {
      periodo: true,
    }),

    curso: U.ReferenceExtends(TurmaEntity.properties.curso, {
      targetsTo: Tokens.Curso.Views.FindOneInput,
    }),

    ambientePadraoAula: U.ReferenceExtends(TurmaEntity.properties.ambientePadraoAula, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const TurmaInputUpdateView = U.View({
  name: Tokens.Turma.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Turma.',
  properties: {
    ...U.ObjectPartial(TurmaInputCreateView),
  },
});

export const TurmaFindAllResult = PaginatedResultView({
  name: Tokens.Turma.Views.FindAllResult,
  description: 'Realiza a busca a Turmas.',
  targetsTo: Tokens.Turma.Views.FindOneResult,
});

export const TurmaDeclarator = U.Declarator({
  entity: Tokens.Turma.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Turma.Views.FindOneInput,
        output: Tokens.Turma.Views.FindOneResult,
      },

      deleteById: Tokens.Turma.Views.FindOneInput,

      create: Tokens.Turma.Views.InputCreate,
      updateById: Tokens.Turma.Views.InputUpdate,

      list: {
        view: Tokens.Turma.Views.FindAllResult,
        filters: [
          ['ambientePadraoAula.nome', ['$eq']],
          ['ambientePadraoAula.codigo', ['$eq']],
          ['ambientePadraoAula.capacidade', ['$eq']],
          ['ambientePadraoAula.tipo', ['$eq']],
          ['curso.nome', ['$eq']],
          ['curso.nomeAbreviado', ['$eq']],
          ['curso.campus.id', ['$eq']],
          ['curso.modalidade.id', ['$eq']],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const TurmaProvider = U.Provider((ctx) => {
  ctx.Add(TurmaEntity);
  ctx.Add(TurmaView);
  ctx.Add(TurmaFindOneInputView);
  ctx.Add(TurmaFindOneResultView);
  ctx.Add(TurmaInputCreateView);
  ctx.Add(TurmaInputUpdateView);
  ctx.Add(TurmaFindAllResult);
  ctx.Add(TurmaDeclarator);
});
