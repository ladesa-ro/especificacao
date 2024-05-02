import { ObjectUuid } from '@/core';
import { IOperation, PropertyTypes } from '@/helpers';

export const ArquivoGetFileOperator = () => {
  return {
    gql: false,

    name: 'ArquivoGetFile',
    description: 'Obtêm o conteúdo de um arquivo.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          ...ObjectUuid().properties.id,
        },
      },
      query: {
        ['acesso.recurso.nome']: {
          required: true,
          nullable: false,
          type: PropertyTypes.STRING,
          description: 'Acesso via recurso: nome',
        },
        ['acesso.recurso.id']: {
          required: true,
          nullable: false,
          type: PropertyTypes.UUID,
          description: 'Acesso via recurso: id',
        },
      },
    },

    output: {
      strategy: 'file',
      description: 'Binário do arquivo consultado.',
      mimeTypes: ['application/octet-stream'],
    },
  } satisfies IOperation;
};
