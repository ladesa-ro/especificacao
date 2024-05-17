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

export const AulaEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Aula',

  properties: {
    formato: UniTypeString({
      type: 'string',
      nullable: true,
      description: 'Formato da aula.',
    }),

    data: UniTypeString({
      type: 'string',
      format: 'date',
      description: 'Data da aula.',
    }),

    intervaloDeTempo: UniTypeReference({
      targetsTo: Tokens.IntervaloDeTempo.Entity,
      description: 'Intervalo de Tempo associado à aula.',
    }),

    diario: UniTypeReference({
      targetsTo: Tokens.Diario.Entity,
      description: 'Diário associado à aula.',
    }),

    ambiente: UniTypeReference({
      nullable: true,
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente associado à aula.',
    }),
  },
});

export const AulaView = UniView({
  name: Tokens.Aula.Entity,
  default: 'Visão completa de uma Aula',
  properties: {
    ...AulaEntity.properties,

    intervaloDeTempo: UniTypeReferenceExtends(AulaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.FindOneResult,
    }),

    diario: UniTypeReferenceExtends(AulaEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneResult,
    }),

    ambiente: UniTypeReferenceExtends(AulaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),
  },
});

export const AulaFindOneInputView = UniView({
  name: Tokens.Aula.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Aula por ID.',
  properties: { ...UniTypePick(AulaView, { id: true }) },
});

export const AulaFindOneResultView = UniView({
  name: Tokens.Aula.Views.FindOneResult,

  partialOf: Tokens.Aula.Entity,
  description: 'Visão FindOne de uma Aula.',

  properties: {
    ...UniTypePick(AulaView, {
      id: true,
      //
      formato: true,
      data: true,
      //
      intervaloDeTempo: true,
      diario: true,
      ambiente: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const AulaInputCreateView = UniView({
  name: Tokens.Aula.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Aula.',
  properties: {
    ...UniTypePick(AulaView, {
      formato: true,
      data: true,
    }),

    intervaloDeTempo: UniTypeReferenceExtends(AulaEntity.properties.intervaloDeTempo, {
      targetsTo: Tokens.IntervaloDeTempo.Views.Input,
    }),

    diario: UniTypeReferenceExtends(AulaEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneInput,
    }),

    ambiente: UniTypeReferenceExtends(AulaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const AulaInputUpdateView = UniView({
  name: Tokens.Aula.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Aula.',
  properties: {
    ...UniTypePartial(AulaInputCreateView),
  },
});

export const AulaFindAllResult = PaginatedResultView({
  name: Tokens.Aula.Views.FindAllResult,
  description: 'Realiza a busca a Aulas.',
  targetsTo: Tokens.Aula.Views.FindOneResult,
});

export const AulaDeclarator = UniDeclarator({
  entity: Tokens.Aula.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Aula.Views.FindOneInput,
        output: Tokens.Aula.Views.FindOneResult,
      },

      deleteById: Tokens.Aula.Views.FindOneInput,

      create: Tokens.Aula.Views.InputCreate,
      updateById: Tokens.Aula.Views.InputUpdate,

      list: {
        view: Tokens.Aula.Views.FindAllResult,
        filters: [
          ['diario.id', ['$eq']],
          ['ambiente.id', ['$eq']],
        ],
      },
    },
  },
});

export const AulaProvider = UniProvider((ctx) => {
  ctx.Add(AulaEntity);
  ctx.Add(AulaView);
  ctx.Add(AulaFindOneInputView);
  ctx.Add(AulaFindOneResultView);
  ctx.Add(AulaInputCreateView);
  ctx.Add(AulaInputUpdateView);
  ctx.Add(AulaFindAllResult);
  ctx.Add(AulaDeclarator);
});
