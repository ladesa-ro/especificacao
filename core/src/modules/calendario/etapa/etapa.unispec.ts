import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

export const EtapaEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Etapa',

  properties: {
    numero: U.Integer({
      nullable: true,
      description: 'Número da etapa.',
    }),
    dataInicio: U.String({
      format: 'date',
      description: 'Data de início.',
    }),
    dataTermino: U.String({
      format: 'date',
      description: 'Data de término.',
    }),
    cor: U.String({
      nullable: true,
      description: 'Cor da etapa.',
    }),
    //
    calendario: U.Reference({
      nullable: true,
      description: 'Calendario.',
      targetsTo: Tokens.CalendarioLetivo.Entity,
    }),
  },
});

export const EtapaView = U.View({
  name: Tokens.Etapa.Entity,
  description: 'Visão completa de um Etapa.',
  properties: {
    ...EtapaEntity.properties,

    calendario: U.ReferenceExtends(EtapaEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const EtapaFindOneInputView = U.View({
  name: Tokens.Etapa.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Etapa por ID.',
  properties: { ...U.ObjectPick(EtapaView, { id: true }) },
});

export const EtapaFindOneResultView = U.View({
  name: Tokens.Etapa.Views.FindOneResult,

  partialOf: Tokens.Etapa.Entity,
  description: 'Visão FindOne de um Etapa.',

  properties: {
    ...U.ObjectPick(EtapaView, {
      id: true,
      //
      numero: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
      //
      calendario: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const EtapaInputCreateView = U.View({
  name: Tokens.Etapa.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Etapa.',
  properties: {
    ...U.ObjectPick(EtapaView, {
      numero: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
    }),

    calendario: U.ReferenceExtends(EtapaEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const EtapaInputUpdateView = U.View({
  name: Tokens.Etapa.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Etapa.',
  properties: {
    ...U.ObjectPartial(EtapaInputCreateView),
  },
});

export const EtapaFindAllResult = PaginatedResultView({
  name: Tokens.Etapa.Views.FindAllResult,
  description: 'Realiza a busca a Etapas.',
  targetsTo: Tokens.Etapa.Views.FindOneResult,
});

export const EtapaDeclarator = U.Declarator({
  entity: Tokens.Etapa.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Etapa.Views.FindOneInput,
        output: Tokens.Etapa.Views.FindOneResult,
      },

      deleteById: Tokens.Etapa.Views.FindOneInput,

      create: Tokens.Etapa.Views.InputCreate,
      updateById: Tokens.Etapa.Views.InputUpdate,

      list: {
        view: Tokens.Etapa.Views.FindAllResult,
        filters: [['calendario.id', ['$eq']]],
      },
    },
  },
});

export const EtapaProvider = U.Provider((ctx) => {
  ctx.Add(EtapaEntity);
  ctx.Add(EtapaView);
  ctx.Add(EtapaFindOneInputView);
  ctx.Add(EtapaFindOneResultView);
  ctx.Add(EtapaInputCreateView);
  ctx.Add(EtapaInputUpdateView);
  ctx.Add(EtapaFindAllResult);
  ctx.Add(EtapaDeclarator);
});
