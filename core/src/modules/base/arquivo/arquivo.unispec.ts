import {
  UniDeclarator,
  UniOperation,
  UniProvider,
  UniTypeEntity,
  UniTypeFile,
  UniTypeInteger,
  UniTypePick,
  UniTypeString,
  UniView,
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

export const ArquivoView = UniView({
  name: Tokens.Arquivo.Entity,
  description: 'Visão completa de um Arquivo.',
  properties: {
    ...ArquivoEntity.properties,
  },
});

export const ArquivoFindOneInputView = UniView({
  name: Tokens.Arquivo.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Arquivo por ID.',
  properties: {
    ...UniTypePick(ArquivoView, { id: true }),
  },
});

export const ArquivoFindOneResultView = UniView({
  name: Tokens.Arquivo.Views.FindOneResult,

  partialOf: Tokens.Arquivo.Entity,
  description: 'Visão FindOne de um Arquivo.',

  properties: {
    ...UniTypePick(ArquivoView, {
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
    extra: {
      getFile: ArquivoGetFileOperation,
    },
  },
});

export const ArquivoProvider = UniProvider((ctx) => {
  ctx.Add(ArquivoEntity);
  ctx.Add(ArquivoView);
  ctx.Add(ArquivoFindOneInputView);
  ctx.Add(ArquivoFindOneResultView);
  ctx.Add(ArquivoDeclarator);
});
