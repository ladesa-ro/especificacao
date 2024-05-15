import { UniDeclarator, UniTypeEntity, UniTypePick, UniTypeReference, UniTypeString, UniTypeView } from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const CidadeEntity = UniTypeEntity({
  id: 'numeric',
  dated: false,

  description: 'Cidade',

  properties: {
    nome: UniTypeString({
      description: 'Nome oficial da Cidade.',
    }),

    estado: UniTypeReference({
      targetsTo: Tokens.Estado.Entity,
      description: 'Estado da Cidade.',
    }),
  },
});

export const CidadeView = UniTypeView({
  name: Tokens.Cidade.Entity,
  description: 'Visão completa de uma Cidade.',
  properties: CidadeEntity.properties,
});

export const CidadeFindOneInputView = UniTypeView({
  name: Tokens.Cidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Cidade por ID.',
  properties: { ...UniTypePick(CidadeEntity, { id: true }) },
});

export const CidadeFindOneResultView = UniTypeView({
  name: Tokens.Cidade.Views.FindOneResult,

  partialOf: Tokens.Cidade.Entity,
  description: 'Visão FindOne de uma Cidade.',

  properties: {
    ...UniTypePick(CidadeEntity, {
      id: true,
      //
      nome: true,
      //
      estado: true,
      //
    }),
  },
});

//

export const CidadeDeclarator = UniDeclarator({
  entity: Tokens.Cidade.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Cidade.Views.FindOneInput,
        output: Tokens.Cidade.Views.FindOneResult,
      },

      deleteById: Tokens.Cidade.Views.FindOneInput,

      list: {
        view: Tokens.Cidade.Views.FindOneResult,
        filters: [['estado.id', ['$eq']]],
      },
    },
  },
});
