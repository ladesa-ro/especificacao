import { BuildOperation, Build as U, UniExtends, UniNodeOperation } from "@unispec/ast-builder";
import type { IUniNodeOperation, IUniNodeTypeReference } from "@unispec/ast-types";
import { Tokens } from "../tokens";

export const GenericImage = (description: string): IUniNodeTypeReference => {
  return U.Reference({
    description,
    nullable: true,
    targetsTo: Tokens.Imagem.Entity,
  });
};

// ===============================================================================

export const BuildGenericGetImageOperation = () => {
  return U.Operation({
    name: Tokens.Imagem.Operations.GetImagem,

    description: "Operação para obter o conteúdo binário de uma imagem.",

    output: {
      success: U.File({
        description: "Binário.",
        mimeTypes: ["image/jpeg"],
      }),
    },
  });
};

// ================================================================

export const BuildGenericSetImageOperation = () => {
  return U.Operation({
    name: Tokens.Imagem.Operations.SetImagem,

    description: "Operação para definir o conteúdo binário de uma imagem.",

    output: {
      success: U.Boolean({
        description: "Resultado da operação.",
      }),
    },
  });
};

// ===============================================================================

export const BuildCoverImageType = (description = "Imagem de capa"): IUniNodeTypeReference => GenericImage(description);

export const BuildCoverImageFindOneResultType = (description?: string): IUniNodeTypeReference =>
  UniExtends(BuildCoverImageType(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const BuildGetCoverImageOperation = (name: string, findByIdInput: string, options?: Partial<IUniNodeOperation>) => {
  return UniExtends<IUniNodeOperation>(BuildGenericGetImageOperation(), {
    name,
    description: "Obtêm a imagem de capa.",
    input: {
      params: {
        id: U.Reference({
          targetsTo: findByIdInput,
          objectProperty: "id",
        }),
      },
    },
    ...options,
  });
};

export const BuildSetCoverImageOperation = (name: string, findByIdInput: string, options?: Partial<IUniNodeOperation>) => {
  return UniExtends<IUniNodeOperation>(BuildGenericSetImageOperation(), {
    name,
    description: "Define a imagem de capa.",
    input: {
      params: {
        id: U.Reference({
          targetsTo: findByIdInput,
          objectProperty: "id",
        }),
      },
    },
    ...options,
  });
};

//

export const ProfileImage = (description = "Imagem de perfil"): IUniNodeTypeReference => GenericImage(description);

export const ProfileImageView = (description?: string): IUniNodeTypeReference =>
  UniExtends(ProfileImage(description), {
    targetsTo: Tokens.Imagem.Views.FindOneResult,
  });

export const BuildGetProfileImageOperation = (name: string, findByIdInput: string, options?: Partial<IUniNodeOperation>) => {
  return UniExtends<IUniNodeOperation>(BuildGenericGetImageOperation(), {
    name,
    description: "Obtêm a imagem de perfil.",
    input: {
      params: {
        id: U.Reference({
          targetsTo: findByIdInput,
          objectProperty: "id",
        }),
      },
    },
    ...options,
  });
};

export const BuildSetProfileImageOperation = (name: string, findByIdInput: string, options?: Partial<IUniNodeOperation>) => {
  return UniExtends<IUniNodeOperation>(BuildGenericSetImageOperation(), {
    name,
    description: "Define a imagem de perfil.",
    input: {
      params: {
        id: U.Reference({
          targetsTo: findByIdInput,
          objectProperty: "id",
        }),
      },
    },
    ...options,
  });
};

// ===============================================================================

export const GenericImageBinaryOperation = (options?: Partial<UniNodeOperation> & Pick<UniNodeOperation, "input">) => {
  return UniExtends(
    BuildOperation({
      name: Tokens.Imagem.Views.GetBinaryResult,

      description: "Conteúdo binário de uma imagem.",

      output: {
        success: U.File({
          description: "Binário da imagem.",
          mimeTypes: ["image/jpeg"],
        }),
      },
    }),
    { ...options },
  );
};
