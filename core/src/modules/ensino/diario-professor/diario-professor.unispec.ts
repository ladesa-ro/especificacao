import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const DiarioProfessorEntity = U.ObjectEntity({
  id: 'uuid',

  description: 'DiarioProfessor',

  properties: {
    situacao: U.Boolean({
      description: 'Situação do vínculo.',
    }),

    vinculo: U.Reference({
      description: 'Vínculo do usuário ao campus.',
      targetsTo: Tokens.Vinculo.Entity,
    }),

    diario: U.Reference({
      description: 'Diário vinculado.',
      targetsTo: Tokens.Diario.Entity,
    }),
  },
});

export const DiarioProfessorView = U.View({
  name: Tokens.DiarioProfessor.Entity,

  default: 'Visão completa de um DiarioProfessor',

  properties: {
    ...DiarioProfessorEntity.properties,

    vinculo: U.ReferenceExtends(DiarioProfessorEntity.properties.vinculo, {
      targetsTo: Tokens.Vinculo.Views.FindOneResult,
    }),

    diario: U.ReferenceExtends(DiarioProfessorEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneResult,
    }),
  },
});

export const DiarioProfessorFindOneInputView = U.View({
  name: Tokens.DiarioProfessor.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um DiarioProfessor por ID.',
  properties: { ...U.ObjectPick(DiarioProfessorView, { id: true }) },
});

export const DiarioProfessorFindOneResultView = U.View({
  name: Tokens.DiarioProfessor.Views.FindOneResult,

  partialOf: Tokens.DiarioProfessor.Entity,
  description: 'Visão FindOne de um DiarioProfessor.',

  properties: {
    ...U.ObjectPick(DiarioProfessorView, {
      id: true,
      //
      situacao: true,
      vinculo: true,
      diario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DiarioProfessorInputCreateView = U.View({
  name: Tokens.DiarioProfessor.Views.InputCreate,
  description: 'Dados de entrada para a criação de um DiarioProfessor.',
  properties: {
    ...U.ObjectPick(DiarioProfessorView, {
      situacao: true,
    }),

    vinculo: U.ReferenceExtends(DiarioProfessorEntity.properties.vinculo, {
      targetsTo: Tokens.Vinculo.Views.FindOneInput,
    }),

    diario: U.ReferenceExtends(DiarioProfessorEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneInput,
    }),
  },
});

export const DiarioProfessorInputUpdateView = U.View({
  name: Tokens.DiarioProfessor.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um DiarioProfessor.',
  properties: {
    ...U.ObjectPartial(DiarioProfessorInputCreateView),
  },
});

export const DiarioProfessorFindAllResult = PaginatedResultView({
  name: Tokens.DiarioProfessor.Views.FindAllResult,
  description: 'Realiza a busca a Diários.',
  targetsTo: Tokens.DiarioProfessor.Views.FindOneResult,
});

export const DiarioProfessorDeclarator = U.Declarator({
  entity: Tokens.DiarioProfessor.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.DiarioProfessor.Views.FindOneInput,
        output: Tokens.DiarioProfessor.Views.FindOneResult,
      },

      deleteById: Tokens.DiarioProfessor.Views.FindOneInput,

      create: Tokens.DiarioProfessor.Views.InputCreate,
      updateById: Tokens.DiarioProfessor.Views.InputUpdate,

      list: {
        view: Tokens.DiarioProfessor.Views.FindAllResult,
        filters: [
          ['vinculo.id', ['$eq']],
          ['diario.id', ['$eq']],
        ],
      },
    },
  },
});

export const DiarioProfessorProvider = U.Provider((ctx) => {
  ctx.Add(DiarioProfessorEntity);
  ctx.Add(DiarioProfessorView);
  ctx.Add(DiarioProfessorFindOneInputView);
  ctx.Add(DiarioProfessorFindOneResultView);
  ctx.Add(DiarioProfessorInputCreateView);
  ctx.Add(DiarioProfessorInputUpdateView);
  ctx.Add(DiarioProfessorFindAllResult);
  ctx.Add(DiarioProfessorDeclarator);
});
