import { UniOperation, UniTypeFile, UniTypeReference } from '../../common/unispec/types';
import { Tokens } from '../../modules/tokens';

export const ImagemGenerica = (description: string): UniTypeReference =>
  UniTypeReference({
    description,
    nullable: true,
    targetsTo: Tokens.Imagem.Entity,
  });

export const ImagemCapa = (description = 'Imagem de capa'): UniTypeReference => ImagemGenerica(description);

export const ImagemPerfil = (description = 'Imagem de perfil'): UniTypeReference => ImagemGenerica(description);

export const GetImagemGenerica =
  (description: string) =>
  (name = Tokens.Imagem.Operations.GetImagem) =>
    UniOperation({
      name,
      description,

      input: {
        body: UniTypeFile({
          description: 'Arquivo.',
          mimeTypes: ['image/jpeg', 'image/png'],
        }),
      },

      output: {
        success: UniTypeFile({
          description: 'Binário.',
          mimeTypes: ['image/jpeg'],
        }),
      },
    });

export const GetImagemCapa = GetImagemGenerica('Obtêm a imagem de capa.');

export const GetImagemPerfil = GetImagemGenerica('Obtêm a imagem de perfil.');

export const SetImagemGenerica =
  (description: string) =>
  (name = Tokens.Imagem.Operations.SetImagem) =>
    UniOperation({
      name,
      description: description,

      body: UniTypeFile({
        description: 'Arquivo.',
        mimeTypes: ['image/jpeg', 'image/png'],
      }),

      output: {
        success: UniTypeFile({ description: 'Resultado da operação.' }),
      },
    });

export const SetImagemCapa = SetImagemGenerica('Define a imagem de capa.');

export const SetImagemPerfil = SetImagemGenerica('Define a imagem de perfil.');
