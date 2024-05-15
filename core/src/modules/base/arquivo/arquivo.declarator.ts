import {
  UniDeclarator,
  UniOperation,
  UniTypeEntity,
  UniTypeFile,
  UniTypeInteger,
  UniTypePick,
  UniTypeString,
  UniTypeView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

export const ArquivoEntity = UniTypeEntity({
  id: 'uuid',
  name: 'Arquivo',

  dated: true,

  properties: {
    name: UniTypeString({
      description: 'Nome.',
    }),
    mimeType: UniTypeString({
      description: 'Mime-type.',
    }),
    sizeBytes: UniTypeInteger({
      description: 'Tamanho (em bytes).',
    }),
    storageType: UniTypeString({
      description: 'Estratégia de armazenamento.',
    }),
  },
});

export const ArquivoView = UniTypeView({
  name: Tokens.Arquivo.Entity,
  description: 'Visão completa de um Arquivo.',
  properties: ArquivoEntity.properties,
});

export const ArquivoFindOneInputView = UniTypeView({
  name: Tokens.Arquivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Arquivo por ID.',
  properties: { ...UniTypePick(ArquivoEntity, { id: true }) },
});

export const ArquivoFindOneResultView = UniTypeView({
  name: Tokens.Arquivo.Views.FindOneResult,

  partialOf: Tokens.Arquivo.Entity,
  description: 'Visão FindOne de um Arquivo.',

  properties: {
    ...UniTypePick(ArquivoEntity, {
      id: true,
      //
      name: true,
      mimeType: true,
      sizeBytes: true,
      storageType: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ArquivoGetFileOperation = UniOperation({
  description: 'Obtêm o conteúdo.',

  name: Tokens.Arquivo.Operations.GetFile,

  input: {
    queries: {
      nomeRecurso: UniTypeString({
        description: 'Acesso via recurso: nome',
      }),
      idRecurso: UniTypeString({
        description: 'Acesso via recurso: id',
      }),
    },
  },

  output: {
    success: UniTypeFile({
      description: 'Binário.',
      mimeTypes: ['application/octet-stream'],
    }),
  },
});

export const ArquivoDeclarator = UniDeclarator({
  entity: Tokens.Arquivo.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Arquivo.Views.FindOneInput,
        output: Tokens.Arquivo.Views.FindOneResult,
      },

      list: {
        view: Tokens.Arquivo.Views.FindOneResult,
        filters: [],
      },
    },
    extra: {
      getFile: ArquivoGetFileOperation,
    },
  },
});
