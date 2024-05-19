import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '@/modules/-shared';
import { U } from '@unispec/core';
import { Tokens } from '../../tokens';

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
  properties: {
    ...BlocoEntity.properties,

    campus: U.ReferenceExtends(BlocoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),

    ambientes: U.ArrayExtends(BlocoEntity.properties.ambientes, {
      items: { targetsTo: Tokens.Ambiente.Views.FindOneResult },
    }),
  },
});

export const BlocoFindOneInputView = U.View({
  name: Tokens.Bloco.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Bloco por ID.',
  properties: { ...U.ObjectPick(BlocoView, { id: true }) },
});

export const BlocoFindOneResultView = U.View({
  name: Tokens.Bloco.Views.FindOneResult,

  partialOf: Tokens.Bloco.Entity,
  description: 'Visão FindOne de um Bloco.',

  properties: {
    ...U.ObjectPick(BlocoView, {
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
    }),
  },
});

export const BlocoInputCreateView = U.View({
  name: Tokens.Bloco.Views.InputCreate,
  description: 'Dados de entrada para a criação de um Bloco.',
  properties: {
    ...U.ObjectPick(BlocoView, {
      nome: true,
      codigo: true,
    }),

    campus: U.ReferenceExtends(BlocoEntity.properties.campus, {
      targetsTo: Tokens.Campus.Views.FindOneResult,
    }),
  },
});

export const BlocoInputUpdateView = U.View({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um Bloco.',
  properties: {
    ...U.ObjectPartial(BlocoInputCreateView),
  },
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
        input: Tokens.Bloco.Views.FindOneInput,
        output: Tokens.Bloco.Views.FindOneResult,
      },

      deleteById: Tokens.Bloco.Views.FindOneInput,

      create: Tokens.Bloco.Views.InputCreate,
      updateById: Tokens.Bloco.Views.InputUpdate,

      list: {
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
