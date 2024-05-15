import { UniTypeEntity, UniTypeInteger, UniTypePick, UniTypeReference, UniTypeString, UniTypeView } from '../../../common/unispec/types';
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
      required: true,
      description: 'Formato da imagem.',
    }),
    mimeType: UniTypeString({
      required: true,
      description: 'Mime Type da imagem.',
    }),
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

export const ImagemArquivoView = UniTypeView({
  name: Tokens.ImagemArquivo.Entity,
  description: 'Visão completa de uma versão de uma imagem.',
  properties: ImagemArquivoEntity.properties,
});

export const ImagemArquivoFindOneInputView = UniTypeView({
  name: Tokens.ImagemArquivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma versão de uma imagem por ID.',
  properties: { ...UniTypePick(ImagemArquivoEntity, { id: true }) },
});

export const ImagemArquivoFindOneResultView = UniTypeView({
  name: Tokens.ImagemArquivo.Views.FindOneResult,

  partialOf: Tokens.ImagemArquivo.Entity,
  description: 'Visão FindOne de um ImagemArquivo.',

  properties: {
    ...UniTypePick(ImagemArquivoEntity, {
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
