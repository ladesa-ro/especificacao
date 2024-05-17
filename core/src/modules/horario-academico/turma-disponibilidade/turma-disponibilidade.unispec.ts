import { PaginatedResultView } from '../../-shared';
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

export const TurmaDisponibilidadeEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'TurmaDisponibilidade',

  properties: {
    dataInicio: UniTypeString({
      format: 'date',
      description: 'Data de início.',
    }),
    dataFim: UniTypeString({
      format: 'date',
      nullable: true,
      description: 'Data de término.',
    }),
    //
    turma: UniTypeReference({
      nullable: true,
      description: 'Turma.',
      targetsTo: Tokens.Turma.Entity,
    }),
  },
});

export const TurmaDisponibilidadeView = UniView({
  name: Tokens.TurmaDisponibilidade.Entity,

  default: 'Visão completa de uma TurmaDisponibilidade',

  properties: {
    ...TurmaDisponibilidadeEntity.properties,

    turma: UniTypeReferenceExtends(TurmaDisponibilidadeEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneResult,
    }),
  },
});

export const TurmaDisponibilidadeFindOneInputView = UniView({
  name: Tokens.TurmaDisponibilidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma TurmaDisponibilidade por ID.',
  properties: { ...UniTypePick(TurmaDisponibilidadeView, { id: true }) },
});

export const TurmaDisponibilidadeFindOneResultView = UniView({
  name: Tokens.TurmaDisponibilidade.Views.FindOneResult,

  partialOf: Tokens.TurmaDisponibilidade.Entity,
  description: 'Visão FindOne de uma TurmaDisponibilidade.',

  properties: {
    ...UniTypePick(TurmaDisponibilidadeView, {
      id: true,
      //
      dataInicio: true,
      dataFim: true,
      //
      turma: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const TurmaDisponibilidadeInputCreateView = UniView({
  name: Tokens.TurmaDisponibilidade.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma TurmaDisponibilidade.',
  properties: {
    ...UniTypePick(TurmaDisponibilidadeView, {
      dataInicio: true,
      dataFim: true,
    }),

    turma: UniTypeReferenceExtends(TurmaDisponibilidadeEntity.properties.turma, {
      targetsTo: Tokens.Turma.Views.FindOneInput,
    }),
  },
});

export const TurmaDisponibilidadeInputUpdateView = UniView({
  name: Tokens.TurmaDisponibilidade.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma TurmaDisponibilidade.',
  properties: {
    ...UniTypePartial(TurmaDisponibilidadeInputCreateView),
  },
});

export const TurmaDisponibilidadeFindAllResult = PaginatedResultView({
  name: Tokens.TurmaDisponibilidade.Views.FindAllResult,
  description: 'Realiza a busca a TurmaDisponibilidades.',
  targetsTo: Tokens.TurmaDisponibilidade.Views.FindOneResult,
});

export const TurmaDisponibilidadeDeclarator = UniDeclarator({
  entity: Tokens.TurmaDisponibilidade.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.TurmaDisponibilidade.Views.FindOneInput,
        output: Tokens.TurmaDisponibilidade.Views.FindOneResult,
      },

      deleteById: Tokens.TurmaDisponibilidade.Views.FindOneInput,

      create: Tokens.TurmaDisponibilidade.Views.InputCreate,
      updateById: Tokens.TurmaDisponibilidade.Views.InputUpdate,

      list: {
        view: Tokens.TurmaDisponibilidade.Views.FindAllResult,
        filters: [['turma.id', ['$eq']]],
      },
    },
  },
});

export const TurmaDisponibilidadeProvider = UniProvider((ctx) => {
  ctx.Add(TurmaDisponibilidadeEntity);
  ctx.Add(TurmaDisponibilidadeView);
  ctx.Add(TurmaDisponibilidadeFindOneInputView);
  ctx.Add(TurmaDisponibilidadeFindOneResultView);
  ctx.Add(TurmaDisponibilidadeInputCreateView);
  ctx.Add(TurmaDisponibilidadeInputUpdateView);
  ctx.Add(TurmaDisponibilidadeFindAllResult);
  ctx.Add(TurmaDisponibilidadeDeclarator);
});
