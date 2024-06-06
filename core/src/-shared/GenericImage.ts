import { Build as U, UniExtends } from "@unispec/ast-builder";
import type { IUniNodeTypeReference } from "@unispec/ast-types";
import { Tokens } from "../tokens";

export const GenericImage = (description: string): IUniNodeTypeReference => {
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
          description: "Arquivo.",
          mimeTypes: ["image/jpeg", "image/png"],
        }),
      },

      output: {
        success: U.File({
          description: "Binário.",
          mimeTypes: ["image/jpeg"],
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
        description: "Arquivo.",
        mimeTypes: ["image/jpeg", "image/png"],
      }),

      output: {
        success: U.File({ description: "Resultado da operação." }),
      },
    });

// ===============================================================================

export const CoverImage = (description = "Imagem de capa"): IUniNodeTypeReference => GenericImage(description);

export const CoverImageView = (description?: string): IUniNodeTypeReference =>
  UniExtends(CoverImage(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const GetCoverImage = GetGenericImage("Obtêm a imagem de capa.");
export const SetCoverImage = SetGenericImage("Define a imagem de capa.");

export const ProfileImage = (description = "Imagem de perfil"): IUniNodeTypeReference => GenericImage(description);

export const ProfileImageView = (description?: string): IUniNodeTypeReference =>
  UniExtends(ProfileImage(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const GetProfileImage = GetGenericImage("Obtêm a imagem de perfil.");
export const SetProfileImage = SetGenericImage("Define a imagem de perfil.");

// ===============================================================================
