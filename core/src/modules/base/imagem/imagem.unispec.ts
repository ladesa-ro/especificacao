import { U } from '@unispec/core';
import { Tokens } from '../../tokens';

export const ImagemEntity = U.ObjectEntity({
  id: 'uuid',
  name: 'Imagem',

  dated: true,

  properties: {
    descricao: U.String({
      description: 'Descrição.',
    }),
    versoes: U.Array({
      description: 'Versões.',
      items: U.Reference({
        targetsTo: Tokens.ImagemArquivo.Entity,
        description: 'Versão da imagem.',
      }),
    }),
  },
});

export const ImagemView = U.View({
  name: Tokens.Imagem.Entity,
  description: 'Visão completa de um Imagem.',
  properties: {
    ...ImagemEntity.properties,

    versoes: U.ArrayExtends(ImagemEntity.properties.versoes, {
      items: { targetsTo: Tokens.ImagemArquivo.Views.FindOneFromImagemResult },
    }),
  },
});

export const ImagemFindOneInputView = U.View({
  name: Tokens.Imagem.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Imagem por ID.',
  properties: {
    ...U.ObjectPick(ImagemView, { id: true }),
  },
});

export const ImagemFindOneResultView = U.View({
  name: Tokens.Imagem.Views.FindOneResult,

  partialOf: Tokens.Imagem.Entity,
  description: 'Visão FindOne de um Imagem.',

  properties: {
    ...U.ObjectPick(ImagemView, {
      id: true,
      //
      descricao: true,
      versoes: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ImagemFindOneFromImagemArquivoResultView = U.View({
  name: Tokens.Imagem.Views.FindOneFromImagemArquivoResult,

  partialOf: Tokens.Imagem.Entity,
  description: 'Visão FindOneFromImagemArquivo de um Imagem.',

  properties: {
    ...U.ObjectPick(ImagemView, {
      id: true,
    }),
  },
});

export const ImagemProvider = U.Provider((ctx) => {
  ctx.Add(ImagemEntity);
  ctx.Add(ImagemView);
  ctx.Add(ImagemFindOneInputView);
  ctx.Add(ImagemFindOneFromImagemArquivoResultView);
  ctx.Add(ImagemFindOneResultView);
});
