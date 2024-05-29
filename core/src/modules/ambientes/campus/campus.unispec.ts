import { U } from '@unispec/core';
import { PaginatedResultView } from '../../-shared';
import { Tokens } from '../../tokens';

const CampusEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Campus',

  properties: {
    nomeFantasia: U.String({
      constraints: { minLength: 1 },
      description: 'Nome fantasia do Campus.',
    }),

    razaoSocial: U.String({
      constraints: { minLength: 1 },
      description: 'Razão social do Campus.',
    }),

    apelido: U.String({
      constraints: { minLength: 1 },
      description: 'Apelido do Campus.',
    }),

    cnpj: U.String({
      constraints: { minLength: 1 },
      description: 'CNPJ do Campus.',
    }),

    //

    endereco: U.Reference({
      targetsTo: Tokens.Endereco.Entity,
      description: 'Endereço do Campus',
    }),
  },
});

export const CampusView = U.View({
  name: Tokens.Campus.Entity,

  description: 'Visão completa de um Campus.',

  type: U.ObjectTransformer.From(CampusEntity)
    .Extends({
      properties: {
        endereco: {
          targetsTo: Tokens.Endereco.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const CampusFindOneInputView = U.View({
  name: Tokens.Campus.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Campus por ID.',
  type: U.ObjectTransformer.From(CampusView.type).Pick({ id: true }).Node(),
});

export const CampusFindOneResultView = U.View({
  name: Tokens.Campus.Views.FindOneResult,

  description: 'Visão FindOne de um Campus.',

  type: U.ObjectTransformer.From(CampusView.type)
    .Extends({
      partialOf: Tokens.Campus.Entity,
    })
    .Pick({
      id: true,
      //
      nomeFantasia: true,
      razaoSocial: true,
      apelido: true,
      cnpj: true,
      //
      endereco: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const CampusInputCreateView = U.View({
  name: Tokens.Campus.Views.InputCreate,

  description: 'Dados de entrada para a criação de um Campus.',

  type: U.ObjectTransformer.From(CampusView.type)
    .Pick({
      nomeFantasia: true,
      razaoSocial: true,
      apelido: true,
      cnpj: true,
      endereco: true,
    })
    .Extends({
      properties: {
        endereco: {
          targetsTo: Tokens.Endereco.Views.Input,
        },
      },
    })
    .Node(),
});

export const CampusInputUpdateView = U.View({
  name: Tokens.Campus.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Campus.',
  type: U.ObjectPartial(CampusInputCreateView.type),
});

export const CampusFindAllResult = PaginatedResultView({
  name: Tokens.Campus.Views.FindAllResult,
  description: 'Realiza a busca a Campi.',
  targetsTo: Tokens.Campus.Views.FindOneResult,
});

// =======================================

export const CampusDeclarator = U.Declarator({
  entity: Tokens.Campus.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Campus.Operations.FindById,
        input: Tokens.Campus.Views.FindOneInput,
        output: Tokens.Campus.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Campus.Operations.DeleteById,
      },

      create: {
        name: Tokens.Campus.Operations.Create,
        input: Tokens.Campus.Views.InputCreate,
      },

      updateById: {
        name: Tokens.Campus.Operations.UpdateById,
        input: Tokens.Campus.Views.InputUpdate,
      },

      list: {
        name: Tokens.Campus.Operations.List,
        view: Tokens.Campus.Views.FindOneResult,
        filters: [
          ['endereco.cidade.id', ['$eq']],
          ['endereco.cidade.estado.id', ['$eq']],
        ],
      },
    },
  },
});

export const CampusProvider = U.Provider((ctx) => {
  ctx.Add(CampusEntity);
  ctx.Add(CampusView);
  ctx.Add(CampusFindOneInputView);
  ctx.Add(CampusFindOneResultView);
  ctx.Add(CampusInputCreateView);
  ctx.Add(CampusInputUpdateView);
  ctx.Add(CampusFindAllResult);
  ctx.Add(CampusDeclarator);
});
