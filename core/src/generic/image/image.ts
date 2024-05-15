import { UniTypeReference } from '../../common/unispec/types';
import { Imagem } from '../../modules';
import { createOperator } from '../../types';

export const ImagemGenerica = (description: string): UniTypeReference =>
  UniTypeReference({
    required: true,
    nullable: true,
    description: description,
    targetsTo: Imagem.name,
  });

export const ImagemCapa = (description = 'Imagem de capa'): UniTypeReference => ImagemGenerica(description);

export const ImagemPerfil = (description = 'Imagem de perfil'): UniTypeReference => ImagemGenerica(description);

export const GetImagemGenerica = (description: string) =>
  createOperator(() => ({
    description,

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

export const GetImagemCapa = GetImagemGenerica('Obtêm a imagem de capa.');

export const GetImagemPerfil = GetImagemGenerica('Obtêm a imagem de perfil.');

export const SetImagemGenerica = (description: string) =>
  createOperator(() => ({
    description: description,

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

export const SetImagemCapa = SetImagemGenerica('Define a imagem de capa.');

export const SetImagemPerfil = SetImagemGenerica('Define a imagem de perfil.');
