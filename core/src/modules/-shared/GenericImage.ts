import { UniOperation, UniTypeFile, UniTypeReference } from '../../common/unispec/types';
import { Tokens } from '../tokens';

export const GenericImage = (description: string): UniTypeReference =>
  UniTypeReference({
    description,
    nullable: true,
    targetsTo: Tokens.Imagem.Entity,
  });

// ===============================================================================

export const GetGenericImage =
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

// ================================================================

export const SetGenericImage =
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

// ===============================================================================

export const CoverImage = (description = 'Imagem de capa'): UniTypeReference => GenericImage(description);
export const GetCoverImage = GetGenericImage('Obtêm a imagem de capa.');
export const SetCoverImage = SetGenericImage('Define a imagem de capa.');

export const ProfileImage = (description = 'Imagem de perfil'): UniTypeReference => GenericImage(description);
export const GetProfileImage = GetGenericImage('Obtêm a imagem de perfil.');
export const SetProfileImage = SetGenericImage('Define a imagem de perfil.');

// ===============================================================================
