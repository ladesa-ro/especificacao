import {
  UniProvider,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

export const ImagemArquivoEntity = UniTypeEntity({
  id: 'uuid',
  name: 'ImagemArquivo',

  dated: true,

  properties: {
    largura: UniTypeInteger({
      nullable: true,
      description: 'Largura da imagem.',
    }),
    altura: UniTypeInteger({
      nullable: true,
      description: 'Altura da imagem.',
    }),
    formato: UniTypeString({
      description: 'Formato da imagem.',
    }),
    mimeType: UniTypeString({
      description: 'Mime Type da imagem.',
    }),
    //
    imagem: UniTypeReference({
      targetsTo: Tokens.Imagem.Entity,
      description: 'Imagem.',
    }),
    arquivo: UniTypeReference({
      targetsTo: Tokens.Arquivo.Entity,
      description: 'Arquivo.',
    }),
  },
});

export const ImagemArquivoView = UniView({
  name: Tokens.ImagemArquivo.Entity,
  description: 'Visão completa de uma versão de uma imagem.',
  properties: {
    ...ImagemArquivoEntity.properties,
    imagem: UniTypeReferenceExtends(ImagemArquivoEntity.properties.imagem, {
      targetsTo: Tokens.Imagem.Views.FindOneFromImagemArquivoResult,
    }),
    arquivo: UniTypeReferenceExtends(ImagemArquivoEntity.properties.arquivo, {
      targetsTo: Tokens.Arquivo.Views.FindOneFromImagemArquivoResult,
    }),
  },
});

export const ImagemArquivoFindOneInputView = UniView({
  name: Tokens.ImagemArquivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma versão de uma imagem por ID.',
  properties: { ...UniTypePick(ImagemArquivoView, { id: true }) },
});

export const ImagemArquivoFindOneResultView = UniView({
  name: Tokens.ImagemArquivo.Views.FindOneResult,

  partialOf: Tokens.ImagemArquivo.Entity,
  description: 'Visão FindOne de um ImagemArquivo.',

  properties: {
    ...UniTypePick(ImagemArquivoView, {
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

export const ImagemArquivoProvider = UniProvider((ctx) => {
  ctx.Add(ImagemArquivoEntity);
  ctx.Add(ImagemArquivoView);
  ctx.Add(ImagemArquivoFindOneInputView);
  ctx.Add(ImagemArquivoFindOneResultView);
});
