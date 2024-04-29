import { IOperationDeclaration, PropertyTypes } from '@/helpers';

export const ArquivoGetFileOperation = () => {
  return {
    name: 'ArquivoGetFile',

    description: 'Obtêm o conteúdo de um arquivo.',

    input: {
      strategy: 'dto',
      params: {
        id: {
          required: true,
          nullable: false,
          type: PropertyTypes.UUID,
          description: 'ID do arquivo.',
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
    },
  } satisfies IOperationDeclaration;
};
