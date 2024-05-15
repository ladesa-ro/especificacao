import { UniTypeArray, UniTypeEntity, UniTypePick, UniTypeReference, UniTypeString, UniTypeView } from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

export const ImagemEntity = UniTypeEntity({
  id: 'uuid',
  name: 'Imagem',

  dated: true,

  properties: {
    descricao: UniTypeString({
      description: 'Descrição.',
    }),
    versoes: UniTypeArray({
      description: 'Versões.',
      of: UniTypeReference({
        targetsTo: Tokens.ImagemArquivo.Entity,
        description: 'Versão da imagem.',
      }),
    }),
  },
});

export const ImagemView = UniTypeView({
  name: Tokens.Imagem.Entity,
  description: 'Visão completa de um Imagem.',
  properties: ImagemEntity.properties,
});

export const ImagemFindOneInputView = UniTypeView({
  name: Tokens.Imagem.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Imagem por ID.',
  properties: { ...UniTypePick(ImagemEntity, { id: true }) },
});

export const ImagemFindOneResultView = UniTypeView({
  name: Tokens.Imagem.Views.FindOneResult,

  partialOf: Tokens.Imagem.Entity,
  description: 'Visão FindOne de um Imagem.',

  properties: {
    ...UniTypePick(ImagemEntity, {
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
