import { BuildTypeObject, BuildTypeReference, BuildView } from "@unispec/ast-builder";
import type { UniTypes as U } from "@unispec/ast-types";

export const CompileOperationViews = function* (node: U.IOperation): Iterable<U.IView> {
  const input = node.input;

  const output = node.output;
  const outputSuccess = output?.success;

  const OperationInputView = BuildView({
    name: `${node.name}CombinedInput`,
    description: `Dados de entrada combinados.`,
    type: BuildTypeObject({
      properties: {
        ...(input?.params
          ? {
              params: BuildTypeObject({ properties: input?.params }),
            }
          : {}),
        ...(input?.queries
          ? {
              queries: BuildTypeObject({ properties: input?.queries }),
            }
          : {}),
        ...(input?.body
          ? {
              body: typeof input.body === "string" ? BuildTypeReference({ targetsTo: input.body }) : input.body,
            }
          : {}),
      },
    }),
  });

  yield OperationInputView;

  const OperationSuccessView = BuildView({
    name: `${node.name}CombinedSuccessOutput`,
    description: `Dados de saída da operação.`,
    type: BuildTypeObject({
      properties: {
        ...(outputSuccess
          ? {
              body: typeof outputSuccess === "string" ? BuildTypeReference({ targetsTo: outputSuccess }) : outputSuccess,
            }
          : {}),
      },
    }),
  });

  yield OperationSuccessView;
};
