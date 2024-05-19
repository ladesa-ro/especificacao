import { U } from '@unispec/core';
import { Tokens } from '../../tokens';

export const ImagemArquivoEntity = U.ObjectEntity({
  id: 'uuid',
  name: 'ImagemArquivo',

  dated: true,

  properties: {
    largura: U.Integer({
      nullable: true,
      description: 'Largura da imagem.',
    }),
    altura: U.Integer({
      nullable: true,
      description: 'Altura da imagem.',
    }),
    formato: U.String({
      description: 'Formato da imagem.',
    }),
    mimeType: U.String({
      description: 'Mime Type da imagem.',
    }),
    //
    imagem: U.Reference({
      targetsTo: Tokens.Imagem.Entity,
      description: 'Imagem.',
    }),
    arquivo: U.Reference({
      targetsTo: Tokens.Arquivo.Entity,
      description: 'Arquivo.',
    }),
  },
});

export const ImagemArquivoView = U.View({
  name: Tokens.ImagemArquivo.Entity,
  description: 'Visão completa de uma versão de uma imagem.',
  properties: {
    ...ImagemArquivoEntity.properties,
    imagem: U.ReferenceExtends(ImagemArquivoEntity.properties.imagem, {
      targetsTo: Tokens.Imagem.Views.FindOneFromImagemArquivoResult,
    }),
    arquivo: U.ReferenceExtends(ImagemArquivoEntity.properties.arquivo, {
      targetsTo: Tokens.Arquivo.Views.FindOneFromImagemArquivoResult,
    }),
  },
});

export const ImagemArquivoFindOneInputView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma versão de uma imagem por ID.',
  properties: { ...U.ObjectPick(ImagemArquivoView, { id: true }) },
});

export const ImagemArquivoFindOneResultView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneResult,

  partialOf: Tokens.ImagemArquivo.Entity,
  description: 'Visão FindOne de um ImagemArquivo.',

  properties: {
    ...U.ObjectPick(ImagemArquivoView, {
      id: true,
      //
      largura: true,
      altura: true,
      formato: true,
      mimeType: true,
      //
      imagem: true,
      arquivo: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ImagemArquivoFindOneFromImagemResultView = U.View({
  name: Tokens.ImagemArquivo.Views.FindOneFromImagemResult,

  partialOf: Tokens.ImagemArquivo.Entity,
  description: 'Visão FindOneFromImagem de um ImagemArquivo.',

  properties: {
    ...U.ObjectPick(ImagemArquivoView, {
      id: true,
      //
      largura: true,
      altura: true,
      formato: true,
      mimeType: true,
      //
      arquivo: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ImagemArquivoProvider = U.Provider((ctx) => {
  ctx.Add(ImagemArquivoEntity);
  ctx.Add(ImagemArquivoView);
  ctx.Add(ImagemArquivoFindOneInputView);
  ctx.Add(ImagemArquivoFindOneFromImagemResultView);
  ctx.Add(ImagemArquivoFindOneResultView);
});
