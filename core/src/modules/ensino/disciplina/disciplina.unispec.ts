import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePartial,
  UniTypePick,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const DisciplinaEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Disciplina',

  properties: {
    nome: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome da disciplina.',
    }),

    nomeAbreviado: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome abreviado da disciplina.',
    }),

    cargaHoraria: UniTypeInteger({
      description: 'Carga horária da disciplina.',
      constraints: {
        min: 1,
        integer: true,
      },
    }),

    imagemCapa: CoverImage(),
  },
});

export const DisciplinaView = UniView({
  name: Tokens.Disciplina.Entity,
  default: 'Visão completa de uma Disciplina',
  properties: {
    ...DisciplinaEntity.properties,
    imagemCapa: CoverImageView(),
  },
});

export const DisciplinaFindOneInputView = UniView({
  name: Tokens.Disciplina.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Disciplina por ID.',
  properties: { ...UniTypePick(DisciplinaView, { id: true }) },
});

export const DisciplinaFindOneResultView = UniView({
  name: Tokens.Disciplina.Views.FindOneResult,

  partialOf: Tokens.Disciplina.Entity,
  description: 'Visão FindOne de uma Disciplina.',

  properties: {
    ...UniTypePick(DisciplinaView, {
      id: true,
      //
      nome: true,
      nomeAbreviado: true,
      cargaHoraria: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DisciplinaInputCreateView = UniView({
  name: Tokens.Disciplina.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Disciplina.',
  properties: {
    ...UniTypePick(DisciplinaView, {
      nome: true,
      nomeAbreviado: true,
      cargaHoraria: true,
    }),
  },
});

export const DisciplinaInputUpdateView = UniView({
  name: Tokens.Disciplina.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Disciplina.',
  properties: {
    ...UniTypePartial(DisciplinaInputCreateView),
  },
});

export const DisciplinaFindAllResult = PaginatedResultView({
  name: Tokens.Disciplina.Views.FindAllResult,
  description: 'Realiza a busca a Disciplinas.',
  targetsTo: Tokens.Disciplina.Views.FindOneResult,
});

export const DisciplinaDeclarator = UniDeclarator({
  entity: Tokens.Disciplina.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Disciplina.Views.FindOneInput,
        output: Tokens.Disciplina.Views.FindOneResult,
      },

      deleteById: Tokens.Disciplina.Views.FindOneInput,

      create: Tokens.Disciplina.Views.InputCreate,
      updateById: Tokens.Disciplina.Views.InputUpdate,

      list: {
        view: Tokens.Disciplina.Views.FindAllResult,
        filters: [],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const DisciplinaProvider = UniProvider((ctx) => {
  ctx.Add(DisciplinaEntity);
  ctx.Add(DisciplinaView);
  ctx.Add(DisciplinaFindOneInputView);
  ctx.Add(DisciplinaFindOneResultView);
  ctx.Add(DisciplinaInputCreateView);
  ctx.Add(DisciplinaInputUpdateView);
  ctx.Add(DisciplinaFindAllResult);
  ctx.Add(DisciplinaDeclarator);
});
