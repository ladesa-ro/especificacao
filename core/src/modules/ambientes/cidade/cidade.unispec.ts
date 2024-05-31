import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

const CidadeEntity = U.ObjectEntity({
  id: 'numeric',
  dated: false,

  description: 'Cidade',

  properties: {
    nome: U.String({
      description: 'Nome oficial da Cidade.',
    }),

    estado: U.Reference({
      targetsTo: Tokens.Estado.Entity,
      description: 'Estado da Cidade.',
    }),
  },
});

export const CidadeView = U.View({
  name: Tokens.Cidade.Entity,

  description: 'Visão completa de uma Cidade.',

  type: U.ObjectTransformer.From(CidadeEntity)
    .Extends({
      properties: {
        estado: {
          targetsTo: Tokens.Estado.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const CidadeFindOneInputView = U.View({
  name: Tokens.Cidade.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Cidade por ID.',
  type: U.ObjectTransformer.From(CidadeView.type).Pick({ id: true }).Node(),
});

export const CidadeFindOneResultView = U.View({
  name: Tokens.Cidade.Views.FindOneResult,

  description: 'Visão FindOne de uma Cidade.',

  type: U.ObjectTransformer.From(CidadeView.type)
    .Extends({
      partialOf: Tokens.Cidade.Entity,
    })
    .Pick({
      id: true,
      nome: true,
      estado: true,
    })
    .Node(),
});

export const CidadeFindAllResult = PaginatedResultView({
  name: Tokens.Cidade.Views.FindAllResult,
  description: 'Resultados da busca a Cidades.',
  targetsTo: Tokens.Cidade.Views.FindOneResult,
});

//

export const CidadeDeclarator = U.Declarator({
  entity: Tokens.Cidade.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Cidade.Operations.FindById,
        input: Tokens.Cidade.Views.FindOneInput,
        output: Tokens.Cidade.Views.FindOneResult,
      },

      list: {
        name: Tokens.Cidade.Operations.List,
        view: Tokens.Cidade.Views.FindAllResult,
        filters: [['estado.id', ['$eq']]],
      },
    },
  },
});

export const CidadeProvider = U.Provider((ctx) => {
  ctx.Add(CidadeEntity);
  ctx.Add(CidadeView);
  ctx.Add(CidadeFindOneInputView);
  ctx.Add(CidadeFindOneResultView);
  ctx.Add(CidadeFindAllResult);
  ctx.Add(CidadeDeclarator);
});
