import { U } from '@unispec/core';
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import { Tokens } from '../../tokens';

export const DiarioEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Diario',

  properties: {
    situacao: U.Boolean({
      description: 'Situação do diário.',
    }),

    ano: U.Integer({
      description: 'Ano do diário.',
    }),

    etapa: U.String({
      nullable: true,
      description: 'Etapa do diário.',
    }),

    //

    turma: U.Reference({
      description: 'Turma vinculada ao diário.',
      targetsTo: Tokens.Turma.Entity,
    }),

    disciplina: U.Reference({
      targetsTo: Tokens.Disciplina.Entity,
      description: 'Disciplina vinculada ao diário.',
    }),

    ambientePadrao: U.Reference({
      nullable: true,
      description: 'Ambiente padrão.',
      targetsTo: Tokens.Ambiente.Entity,
    }),

    imagemCapa: CoverImage(),
  },
});

export const DiarioView = U.View({
  name: Tokens.Diario.Entity,

  default: 'Visão completa de um Diario',

  properties: {
    ...DiarioEntity.properties,

    turma: U.ReferenceExtends(DiarioEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneResult,
    }),

    disciplina: U.ReferenceExtends(DiarioEntity.properties.disciplina, {
      targetsTo: Tokens.Disciplina.Views.FindOneResult,
    }),

    ambientePadrao: U.ReferenceExtends(DiarioEntity.properties.ambientePadrao, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const DiarioFindOneInputView = U.View({
  name: Tokens.Diario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Diario por ID.',
  properties: { ...U.ObjectPick(DiarioView, { id: true }) },
});

export const DiarioFindOneResultView = U.View({
  name: Tokens.Diario.Views.FindOneResult,

  partialOf: Tokens.Diario.Entity,
  description: 'Visão FindOne de um Diario.',

  properties: {
    ...U.ObjectPick(DiarioView, {
      id: true,
      //
      situacao: true,
      ano: true,
      etapa: true,
      //
      turma: true,
      disciplina: true,
      ambientePadrao: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DiarioInputCreateView = U.View({
  name: Tokens.Diario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Diario.',
  properties: {
    ...U.ObjectPick(DiarioView, {
      nome: true,
      nomeAbreviado: true,
    }),

    turma: U.ReferenceExtends(DiarioEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneInput,
    }),

    disciplina: U.ReferenceExtends(DiarioEntity.properties.disciplina, {
      targetsTo: Tokens.Disciplina.Views.FindOneInput,
    }),

    ambientePadrao: U.ReferenceExtends(DiarioEntity.properties.ambientePadrao, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const DiarioInputUpdateView = U.View({
  name: Tokens.Diario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Diario.',
  properties: {
    ...U.ObjectPartial(DiarioInputCreateView),
  },
});

export const DiarioFindAllResult = PaginatedResultView({
  name: Tokens.Diario.Views.FindAllResult,
  description: 'Realiza a busca a Diários.',
  targetsTo: Tokens.Diario.Views.FindOneResult,
});

export const DiarioDeclarator = U.Declarator({
  entity: Tokens.Diario.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Diario.Views.FindOneInput,
        output: Tokens.Diario.Views.FindOneResult,
      },

      deleteById: Tokens.Diario.Views.FindOneInput,

      create: Tokens.Diario.Views.InputCreate,
      updateById: Tokens.Diario.Views.InputUpdate,

      list: {
        view: Tokens.Diario.Views.FindAllResult,
        filters: [
          ['turma.id', ['$eq']],
          ['disciplina.id', ['$eq']],
          ['ambientePadrao.id', ['$eq']],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const DiarioProvider = U.Provider((ctx) => {
  ctx.Add(DiarioEntity);
  ctx.Add(DiarioView);
  ctx.Add(DiarioFindOneInputView);
  ctx.Add(DiarioFindOneResultView);
  ctx.Add(DiarioInputCreateView);
  ctx.Add(DiarioInputUpdateView);
  ctx.Add(DiarioFindAllResult);
  ctx.Add(DiarioDeclarator);
});
