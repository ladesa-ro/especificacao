import { BuildOperation, Build as U, UniExtends, UniNodeOperation } from "@unispec/ast-builder";
import type { IUniNodeOperation, IUniNodeTypeReference } from "@unispec/ast-types";
import { Tokens } from "../tokens";

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
      body: U.File({
        description: "Binário da imagem.",
        mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
      }),
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
