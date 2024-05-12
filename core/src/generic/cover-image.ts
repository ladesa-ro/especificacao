import { Imagem } from '../modules';
import { IOperationPropertyReferenceDeclarator, createOperator } from '../types';

export const ImagemCapa = (): IOperationPropertyReferenceDeclarator => ({
  type: 'reference',
  required: true,
  nullable: true,
  references: 'declarator',
  declarator: () => Imagem,
  description: 'Imagem.',
});

export const GetImagemCapa = createOperator(() => ({
  description: 'Obtêm a imagem de capa.',

  body: {
    type: 'file',
    nullable: false,
    required: true,
    description: 'Arquivo.',
    mimeTypes: ['image/jpeg', 'image/png'],
  },

  outputs: {
    success: {
      type: 'file',
      required: true,
      nullable: false,
      description: 'Binário.',
      mimeTypes: ['image/jpeg'],
    },
  },
}));

export const SetImagemCapa = createOperator(() => ({
  description: 'Define a imagem de capa.',

  body: {
    type: 'file',
    nullable: false,
    required: true,
    description: 'Arquivo.',
    mimeTypes: ['image/jpeg', 'image/png'],
  },

  outputs: {
    success: {
      type: 'boolean',
      required: true,
      nullable: false,
      description: 'Resultado da operação.',
    },
  },
}));
