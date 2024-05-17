import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const DiarioEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Diario',

  properties: {
    situacao: UniTypeBoolean({
      description: 'Situação do diário.',
    }),

    ano: UniTypeInteger({
      description: 'Ano do diário.',
    }),

    etapa: UniTypeString({
      nullable: true,
      description: 'Etapa do diário.',
    }),

    //

    turma: UniTypeReference({
      description: 'Turma vinculada ao diário.',
      targetsTo: Tokens.Turma.Entity,
    }),

    disciplina: UniTypeReference({
      targetsTo: Tokens.Disciplina.Entity,
      description: 'Disciplina vinculada ao diário.',
    }),

    ambientePadrao: UniTypeReference({
      nullable: true,
      description: 'Ambiente padrão.',
      targetsTo: Tokens.Ambiente.Entity,
    }),

    imagemCapa: CoverImage(),
  },
});

export const DiarioView = UniView({
  name: Tokens.Diario.Entity,

  default: 'Visão completa de um Diario',

  properties: {
    ...DiarioEntity.properties,

    turma: UniTypeReferenceExtends(DiarioEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneResult,
    }),

    disciplina: UniTypeReferenceExtends(DiarioEntity.properties.disciplina, {
      targetsTo: Tokens.Disciplina.Views.FindOneResult,
    }),

    ambientePadrao: UniTypeReferenceExtends(DiarioEntity.properties.ambientePadrao, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const DiarioFindOneInputView = UniView({
  name: Tokens.Diario.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Diario por ID.',
  properties: { ...UniTypePick(DiarioView, { id: true }) },
});

export const DiarioFindOneResultView = UniView({
  name: Tokens.Diario.Views.FindOneResult,

  partialOf: Tokens.Diario.Entity,
  description: 'Visão FindOne de um Diario.',

  properties: {
    ...UniTypePick(DiarioView, {
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

export const DiarioInputCreateView = UniView({
  name: Tokens.Diario.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Diario.',
  properties: {
    ...UniTypePick(DiarioView, {
      nome: true,
      nomeAbreviado: true,
    }),

    turma: UniTypeReferenceExtends(DiarioEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneInput,
    }),

    disciplina: UniTypeReferenceExtends(DiarioEntity.properties.disciplina, {
      targetsTo: Tokens.Disciplina.Views.FindOneInput,
    }),

    ambientePadrao: UniTypeReferenceExtends(DiarioEntity.properties.ambientePadrao, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const DiarioInputUpdateView = UniView({
  name: Tokens.Diario.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Diario.',
  properties: {
    ...UniTypePartial(DiarioInputCreateView),
  },
});

export const DiarioFindAllResult = PaginatedResultView({
  name: Tokens.Diario.Views.FindAllResult,
  description: 'Realiza a busca a Diários.',
  targetsTo: Tokens.Diario.Views.FindOneResult,
});

export const DiarioDeclarator = UniDeclarator({
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

export const DiarioProvider = UniProvider((ctx) => {
  ctx.Add(DiarioEntity);
  ctx.Add(DiarioView);
  ctx.Add(DiarioFindOneInputView);
  ctx.Add(DiarioFindOneResultView);
  ctx.Add(DiarioInputCreateView);
  ctx.Add(DiarioInputUpdateView);
  ctx.Add(DiarioFindAllResult);
  ctx.Add(DiarioDeclarator);
});
