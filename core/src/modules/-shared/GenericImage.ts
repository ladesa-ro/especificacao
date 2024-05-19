import { U } from '@unispec/core';
import { Tokens } from '../tokens';

export const GenericImage = (description: string): U.IReference => {
  return U.Reference({
    description,
    nullable: true,
    targetsTo: Tokens.Imagem.Entity,
  });
};

// ===============================================================================

export const GetGenericImage =
  (description: string) =>
  (name = Tokens.Imagem.Operations.GetImagem) =>
    U.Operation({
      name,
      description,

      input: {
        body: U.File({
          description: 'Arquivo.',
          mimeTypes: ['image/jpeg', 'image/png'],
        }),
      },

      output: {
        success: U.File({
          description: 'Binário.',
          mimeTypes: ['image/jpeg'],
        }),
      },
    });

// ================================================================

export const SetGenericImage =
  (description: string) =>
  (name = Tokens.Imagem.Operations.SetImagem) =>
    U.Operation({
      name,
      description: description,

      body: U.File({
        description: 'Arquivo.',
        mimeTypes: ['image/jpeg', 'image/png'],
      }),

      output: {
        success: U.File({ description: 'Resultado da operação.' }),
      },
    });

// ===============================================================================

export const CoverImage = (description = 'Imagem de capa'): U.IReference => GenericImage(description);

export const CoverImageView = (description?: string): U.IReference =>
  U.ReferenceExtends(CoverImage(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const GetCoverImage = GetGenericImage('Obtêm a imagem de capa.');
export const SetCoverImage = SetGenericImage('Define a imagem de capa.');

export const ProfileImage = (description = 'Imagem de perfil'): U.IReference => GenericImage(description);

export const ProfileImageView = (description?: string): U.IReference =>
  U.ReferenceExtends(ProfileImage(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const GetProfileImage = GetGenericImage('Obtêm a imagem de perfil.');
export const SetProfileImage = SetGenericImage('Define a imagem de perfil.');

// ===============================================================================
