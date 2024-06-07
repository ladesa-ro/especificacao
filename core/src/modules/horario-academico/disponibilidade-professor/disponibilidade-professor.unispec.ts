import { PaginatedResultView } from '@/modules/-shared';
import { Tokens } from '@/modules/tokens';
import { U } from '@unispec/core';

export const DisponibilidadeProfessorEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'DisponibilidadeProfessor',

  properties: {
    dataInicio: U.String({
      format: 'date',
      description: 'Data de início.',
    }),
    dataFim: U.String({
      format: 'date',
      nullable: true,
      description: 'Data de término.',
    }),
    //
    vinculoProfessor: U.Reference({
      description: 'Vínculo de professor.',
      targetsTo: Tokens.Vinculo.Entity,
    }),
  },
});

export const DisponibilidadeProfessorView = U.View({
  name: Tokens.DisponibilidadeProfessor.Entity,

  description: 'Disponibilidade do professor.',

  properties: {
    ...DisponibilidadeProfessorEntity.properties,

    vinculoProfessor: U.ReferenceExtends(DisponibilidadeProfessorEntity.properties.vinculoProfessor, {
      targetsTo: Tokens.Vinculo.Views.FindOneResult,
    }),
  },
});
export const DisponibilidadeProfessorFindOneInputView = U.View({
  name: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Disponibilidade Professor por ID.',
  properties: { ...U.ObjectPick(DisponibilidadeProfessorView, { id: true }) },
});

export const DisponibilidadeProfessorFindOneResultView = U.View({
  name: Tokens.DisponibilidadeProfessor.Views.FindOneResult,

  partialOf: Tokens.DisponibilidadeProfessor.Entity,
  description: 'Visão FindOne de uma Disponibilidade Professor.',

  properties: {
    ...U.ObjectPick(DisponibilidadeProfessorView, {
      id: true,
      //
      dataInicio: true,
      dataFim: true,
      //
      vinculoProfessor: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const DisponibilidadeProfessorInputCreateView = U.View({
  name: Tokens.DisponibilidadeProfessor.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Disponibilidade Professor.',
  properties: {
    ...U.ObjectPick(DisponibilidadeProfessorView, {
      dataInicio: true,
      dataFim: true,
    }),
    //
    vinculoProfessor: U.ReferenceExtends(DisponibilidadeProfessorEntity.properties.vinculoProfessor, {
      targetsTo: Tokens.Vinculo.Views.FindOneInput,
    }),
  },
});

export const DisponibilidadeProfessorInputUpdateView = U.View({
  name: Tokens.DisponibilidadeProfessor.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Disponibilidade Professor.',
  properties: {
    ...U.ObjectPartial(DisponibilidadeProfessorInputCreateView),
  },
});

export const DisponibilidadeProfessorFindAllResult = PaginatedResultView({
  name: Tokens.DisponibilidadeProfessor.Views.FindAllResult,
  description: 'Realiza a busca a Disponibilidade Professor.',
  targetsTo: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
});

export const DisponibilidadeProfessorDeclarator = U.Declarator({
  entity: Tokens.DisponibilidadeProfessor.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.DisponibilidadeProfessor.Views.FindOneInput,
        output: Tokens.DisponibilidadeProfessor.Views.FindOneResult,
      },

      deleteById: Tokens.DisponibilidadeProfessor.Views.FindOneInput,

      create: Tokens.DisponibilidadeProfessor.Views.InputCreate,
      updateById: Tokens.DisponibilidadeProfessor.Views.InputUpdate,

      list: {
        view: Tokens.DisponibilidadeProfessor.Views.FindAllResult,
        filters: [],
      },
    },
  },
});

export const DisponibilidadeProfessorProvider = U.Provider((ctx) => {
  ctx.Add(DisponibilidadeProfessorEntity);
  ctx.Add(DisponibilidadeProfessorView);
  ctx.Add(DisponibilidadeProfessorFindOneInputView);
  ctx.Add(DisponibilidadeProfessorFindOneResultView);
  ctx.Add(DisponibilidadeProfessorInputCreateView);
  ctx.Add(DisponibilidadeProfessorInputUpdateView);
  ctx.Add(DisponibilidadeProfessorFindAllResult);
  ctx.Add(DisponibilidadeProfessorDeclarator);
});
