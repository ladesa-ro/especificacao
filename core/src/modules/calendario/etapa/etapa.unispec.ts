import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
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

export const EtapaEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Etapa',

  properties: {
    numero: UniTypeInteger({
      nullable: true,
      description: 'Número da etapa.',
    }),
    dataInicio: UniTypeString({
      format: 'date',
      description: 'Data de início.',
    }),
    dataTermino: UniTypeString({
      format: 'date',
      description: 'Data de término.',
    }),
    cor: UniTypeString({
      nullable: true,
      description: 'Cor da etapa.',
    }),
    //
    calendario: UniTypeReference({
      nullable: true,
      description: 'Calendario.',
      targetsTo: Tokens.CalendarioLetivo.Entity,
    }),
  },
});

export const EtapaView = UniView({
  name: Tokens.Etapa.Entity,
  description: 'Visão completa de um Etapa.',
  properties: {
    ...EtapaEntity.properties,

    calendario: UniTypeReferenceExtends(EtapaEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneResult,
    }),
  },
});

export const EtapaFindOneInputView = UniView({
  name: Tokens.Etapa.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Etapa por ID.',
  properties: { ...UniTypePick(EtapaView, { id: true }) },
});

export const EtapaFindOneResultView = UniView({
  name: Tokens.Etapa.Views.FindOneResult,

  partialOf: Tokens.Etapa.Entity,
  description: 'Visão FindOne de um Etapa.',

  properties: {
    ...UniTypePick(EtapaView, {
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

export const EtapaInputCreateView = UniView({
  name: Tokens.Etapa.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Etapa.',
  properties: {
    ...UniTypePick(EtapaView, {
      numero: true,
      dataInicio: true,
      dataTermino: true,
      cor: true,
    }),

    calendario: UniTypeReferenceExtends(EtapaEntity.properties.calendario, {
      targetsTo: Tokens.CalendarioLetivo.Views.FindOneInput,
    }),
  },
});

export const EtapaInputUpdateView = UniView({
  name: Tokens.Etapa.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Etapa.',
  properties: {
    ...UniTypePartial(EtapaInputCreateView),
  },
});

export const EtapaFindAllResult = PaginatedResultView({
  name: Tokens.Etapa.Views.FindAllResult,
  description: 'Realiza a busca a Etapas.',
  targetsTo: Tokens.Etapa.Views.FindOneResult,
});

export const EtapaDeclarator = UniDeclarator({
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

export const EtapaProvider = UniProvider((ctx) => {
  ctx.Add(EtapaEntity);
  ctx.Add(EtapaView);
  ctx.Add(EtapaFindOneInputView);
  ctx.Add(EtapaFindOneResultView);
  ctx.Add(EtapaInputCreateView);
  ctx.Add(EtapaInputUpdateView);
  ctx.Add(EtapaFindAllResult);
  ctx.Add(EtapaDeclarator);
});
