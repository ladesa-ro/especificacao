import { Tokens } from '@/modules';
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '@/modules/-shared';
import { U } from '@unispec/core';

const BlocoEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Bloco',

  properties: {
    nome: U.String({
      constraints: { minLength: 1 },
      description: 'Nome do Bloco.',
    }),

    codigo: U.String({
      constraints: { minLength: 1 },
      description: 'Código do Bloco.',
    }),

    //

    campus: U.Reference({
      description: 'Campus.',
      targetsTo: Tokens.Campus.Entity,
    }),

    imagemCapa: CoverImage(),

    ambientes: U.Array({
      description: 'Ambientes.',

      items: U.Reference({
        description: 'Ambiente.',
        targetsTo: Tokens.Ambiente.Entity,
      }),
    }),
  },
});

export const BlocoView = U.View({
  name: Tokens.Bloco.Entity,

  description: 'Visão completa de um Bloco.',

  type: U.ObjectTransformer.From(BlocoEntity)
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneResult,
        },

        imagemCapa: CoverImageView(),

        ambientes: {
          items: {
            targetsTo: Tokens.Ambiente.Views.FindOneResult,
          },
        },
      },
    })
    .Node(),
});

export const BlocoFindOneInputView = U.View({
  name: Tokens.Bloco.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Bloco por ID.',
  type: U.ObjectTransformer.From(BlocoView.type).Pick({ id: true }).Node(),
});

export const BlocoFindOneResultView = U.View({
  name: Tokens.Bloco.Views.FindOneResult,

  description: 'Visão FindOne de um Bloco.',

  type: U.ObjectTransformer.From(BlocoView.type)
    .Extends({
      partialOf: Tokens.Bloco.Entity,
    })
    .Pick({
      id: true,
      //
      nome: true,
      codigo: true,
      //
      campus: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const BlocoInputCreateView = U.View({
  name: Tokens.Bloco.Views.InputCreate,

  description: 'Dados de entrada para a criação de um Bloco.',

  type: U.ObjectTransformer.From(BlocoView.type)
    .Pick({
      nome: true,
      codigo: true,
      campus: true,
    })
    .Extends({
      properties: {
        campus: {
          targetsTo: Tokens.Campus.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const BlocoInputUpdateView = U.View({
  name: Tokens.Bloco.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Bloco.',
  type: U.ObjectPartial(BlocoInputCreateView.type),
});

export const BlocoFindAllResult = PaginatedResultView({
  name: Tokens.Bloco.Views.FindAllResult,
  description: 'Realiza a busca a Blocos.',
  targetsTo: Tokens.Bloco.Views.FindOneResult,
});

// =======================================

export const BlocoDeclarator = U.Declarator({
  entity: Tokens.Bloco.Entity,

  operations: {
    crud: {
      findById: {
        name: Tokens.Bloco.Operations.FindById,
        input: Tokens.Bloco.Views.FindOneInput,
        output: Tokens.Bloco.Views.FindOneResult,
      },

      deleteById: {
        name: Tokens.Bloco.Operations.DeleteById,
      },

      create: {
        name: Tokens.Bloco.Operations.Create,
        input: Tokens.Bloco.Views.InputCreate,
      },

      updateById: {
        name: Tokens.Bloco.Operations.UpdateById,
        input: Tokens.Bloco.Views.InputUpdate,
      },

      list: {
        name: Tokens.Bloco.Operations.List,
        view: Tokens.Bloco.Views.FindAllResult,
        filters: [['campus.id', ['$eq']]],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const BlocoProvider = U.Provider((ctx) => {
  ctx.Add(BlocoEntity);
  ctx.Add(BlocoView);
  ctx.Add(BlocoFindOneInputView);
  ctx.Add(BlocoFindOneResultView);
  ctx.Add(BlocoInputCreateView);
  ctx.Add(BlocoInputUpdateView);
  ctx.Add(BlocoFindAllResult);
  ctx.Add(BlocoDeclarator);
});
