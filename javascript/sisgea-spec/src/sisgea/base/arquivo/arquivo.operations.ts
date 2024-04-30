import { ObjectUuidDeclarationFactory } from '@/core';
import { IOperation, PropertyTypes } from '@/helpers';

export const ArquivoGetFileOperator = () => {
  return {
    name: 'ArquivoGetFile',

    description: 'Obtêm o conteúdo de um arquivo.',

    input: {
      strategy: 'dto',
      params: {
        ...ObjectUuidDeclarationFactory().properties,
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
    },
  } satisfies IOperation;
};
