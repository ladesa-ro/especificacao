import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniTypeEntity,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
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

export const CidadeView = UniView({
  name: Tokens.Cidade.Entity,
  description: 'Visão completa de uma Cidade.',
  properties: {
    ...CidadeEntity.properties,
    estado: UniTypeReferenceExtends(CidadeEntity.properties.estado, {
      targetsTo: Tokens.Estado.Views.FindOneResult,
    }),
  },
});

export const CidadeFindOneInputView = UniView({
  name: Tokens.Cidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Cidade por ID.',
  properties: { ...UniTypePick(CidadeView, { id: true }) },
});

export const CidadeFindOneResultView = UniView({
  name: Tokens.Cidade.Views.FindOneResult,

  partialOf: Tokens.Cidade.Entity,
  description: 'Visão FindOne de uma Cidade.',

  properties: {
    ...UniTypePick(CidadeView, {
      id: true,
      //
      nome: true,
      //
      estado: true,
      //
    }),
  },
});

export const CidadeFindAllResult = PaginatedResultView({
  name: Tokens.Cidade.Views.FindAllResult,
  description: 'Realiza a busca a Cidades.',
  targetsTo: Tokens.Cidade.Views.FindOneResult,
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

      list: {
        view: Tokens.Cidade.Views.FindAllResult,
        filters: [['estado.id', ['$eq']]],
      },
    },
  },
});
