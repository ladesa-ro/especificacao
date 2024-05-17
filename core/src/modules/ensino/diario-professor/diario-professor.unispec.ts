import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeBoolean,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const DiarioProfessorEntity = UniTypeEntity({
  id: 'uuid',

  description: 'DiarioProfessor',

  properties: {
    situacao: UniTypeBoolean({
      description: 'Situação do vínculo.',
    }),

    vinculo: UniTypeReference({
      description: 'Vínculo do usuário ao campus.',
      targetsTo: Tokens.Vinculo.Entity,
    }),

    diario: UniTypeReference({
      description: 'Diário vinculado.',
      targetsTo: Tokens.Diario.Entity,
    }),
  },
});

export const DiarioProfessorView = UniView({
  name: Tokens.DiarioProfessor.Entity,

  default: 'Visão completa de um DiarioProfessor',

  properties: {
    ...DiarioProfessorEntity.properties,

    vinculo: UniTypeReferenceExtends(DiarioProfessorEntity.properties.vinculo, {
      targetsTo: Tokens.Vinculo.Views.FindOneResult,
    }),

    diario: UniTypeReferenceExtends(DiarioProfessorEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneResult,
    }),
  },
});

export const DiarioProfessorFindOneInputView = UniView({
  name: Tokens.DiarioProfessor.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um DiarioProfessor por ID.',
  properties: { ...UniTypePick(DiarioProfessorView, { id: true }) },
});

export const DiarioProfessorFindOneResultView = UniView({
  name: Tokens.DiarioProfessor.Views.FindOneResult,

  partialOf: Tokens.DiarioProfessor.Entity,
  description: 'Visão FindOne de um DiarioProfessor.',

  properties: {
    ...UniTypePick(DiarioProfessorView, {
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

export const DiarioProfessorInputCreateView = UniView({
  name: Tokens.DiarioProfessor.Views.InputCreate,
  description: 'Dados de entrada para a criação de um DiarioProfessor.',
  properties: {
    ...UniTypePick(DiarioProfessorView, {
      situacao: true,
    }),

    vinculo: UniTypeReferenceExtends(DiarioProfessorEntity.properties.vinculo, {
      targetsTo: Tokens.Vinculo.Views.FindOneInput,
    }),

    diario: UniTypeReferenceExtends(DiarioProfessorEntity.properties.diario, {
      targetsTo: Tokens.Diario.Views.FindOneInput,
    }),
  },
});

export const DiarioProfessorInputUpdateView = UniView({
  name: Tokens.DiarioProfessor.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um DiarioProfessor.',
  properties: {
    ...UniTypePartial(DiarioProfessorInputCreateView),
  },
});

export const DiarioProfessorFindAllResult = PaginatedResultView({
  name: Tokens.DiarioProfessor.Views.FindAllResult,
  description: 'Realiza a busca a Diários.',
  targetsTo: Tokens.DiarioProfessor.Views.FindOneResult,
});

export const DiarioProfessorDeclarator = UniDeclarator({
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

export const DiarioProfessorProvider = UniProvider((ctx) => {
  ctx.Add(DiarioProfessorEntity);
  ctx.Add(DiarioProfessorView);
  ctx.Add(DiarioProfessorFindOneInputView);
  ctx.Add(DiarioProfessorFindOneResultView);
  ctx.Add(DiarioProfessorInputCreateView);
  ctx.Add(DiarioProfessorInputUpdateView);
  ctx.Add(DiarioProfessorFindAllResult);
  ctx.Add(DiarioProfessorDeclarator);
});
