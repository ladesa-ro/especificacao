import { UniDeclarator, UniTypeEntity, UniTypePick, UniTypeString, UniView } from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const EstadoEntity = UniTypeEntity({
  id: 'numeric',
  dated: false,

  description: 'Estado',

  properties: {
    nome: UniTypeString({
      description: 'Nome oficial do Estado.',
    }),

    sigla: UniTypeString({
      description: 'Sigla do Estado.',
      constraints: { ['x-estado-sigla']: true },
    }),
  },
});

export const EstadoView = UniView({
  name: Tokens.Estado.Entity,
  description: 'Visão completa de um Estado.',
  properties: EstadoEntity.properties,
});

export const EstadoFindOneInputView = UniView({
  name: Tokens.Estado.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Estado por ID.',
  properties: { ...UniTypePick(EstadoEntity, { id: true }) },
});

export const EstadoFindOneResultView = UniView({
  name: Tokens.Estado.Views.FindOneResult,

  partialOf: Tokens.Estado.Entity,
  description: 'Visão FindOne de um Estado.',

  properties: {
    ...UniTypePick(EstadoEntity, {
      id: true,
      //
      nome: true,
      sigla: true,
      //
    }),
  },
});

//

export const EstadoDeclarator = UniDeclarator({
  entity: Tokens.Estado.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Estado.Views.FindOneInput,
        output: Tokens.Estado.Views.FindOneResult,
      },

      list: {
        view: Tokens.Estado.Views.FindOneResult,
        filters: [],
      },
    },
  },
});
