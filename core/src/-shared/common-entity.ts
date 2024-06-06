import {
  BuildModule,
  BuildOperation,
  BuildTypeBoolean,
  BuildTypeInteger,
  BuildTypeObject,
  BuildTypeReference,
  BuildTypeString,
  BuildView,
} from "@unispec/ast-builder";
import type { IUniNodeOperation, IUniNodeType, IUniNodeTypeObject, UniTypes as U } from "@unispec/ast-types";

export type ICommonEntityOptions = Partial<IUniNodeTypeObject> & {
  id?: "numeric" | "uuid" | false;
  dated?: boolean;
};

export const CommonEntity = <K extends Partial<ICommonEntityOptions> = Partial<ICommonEntityOptions>>(k: K): IUniNodeTypeObject => {
  const properties: Record<string, IUniNodeType> = {};

  if (k) {
    const {
      id,
      dated,
      properties: { ...rest },
    } = k;

    Object.assign(properties, rest);

    if (id) {
      const description = "ID do Registro.";

      if (id === "numeric") {
        properties.id = BuildTypeInteger({ description });
      } else if (id === "uuid") {
        properties.id = BuildTypeString({ description, format: "uuid" });
      }
    }

    if (dated) {
      properties.dateCreated = BuildTypeString({ description: "Data de Criação do Registro.", format: "date-time" });
      properties.dateUpdated = BuildTypeString({ description: "Data de Atualização do Registro.", format: "date-time" });
      properties.dateDeleted = BuildTypeString({ description: "Data de Exclusão do Registro.", format: "date-time", nullable: true });
    }
  }

  return BuildTypeObject({
    type: "object",
    ...k,
    properties,
  });
};

export type ICompileOperationsOptions = {
  entity: string;
  operations?: {
    crud?: {
      findById?:
        | false
        | {
            name: string;
            input: string;
            output: string;
          };
      deleteById?:
        | false
        | {
            name: string;
          };
      list?:
        | false
        | {
            name: string;
            view: string;
            filters?: [string, string[]][];
          };
      create?:
        | false
        | {
            name: string;
            input: string;
          };
      updateById?:
        | false
        | {
            name: string;
            input: string;
          };
    };
    extra?: {
      [key: string]: IUniNodeOperation;
    };
  };
};

export const CompileOperations = <Node extends ICompileOperationsOptions>(node: Node) => {
  const nodesGenerator = function* (): Iterable<U.INode> {
    const nodeOperations = node.operations;

    if (nodeOperations) {
      const crud = nodeOperations.crud;

      if (crud) {
        const findById = crud.findById;

        const list = crud.list;
        const create = crud.create;
        const updateById = crud.updateById;
        const deleteById = crud.deleteById;

        if (findById) {
          const FindByIdOperation = BuildOperation({
            name: findById.name,

            description: `Operação '${findById.name}'.`,

            meta: {
              gql: {
                kind: "query",
              },
            },

            input: {
              params: {
                id: BuildTypeReference({ targetsTo: findById.input, objectProperty: "id" }),
              },
            },

            output: {
              success: BuildTypeReference({
                targetsTo: findById.output,
                description: `Corpo de resposta da operação ${findById.name}.`,
              }),
            },
          });

          yield FindByIdOperation;
          yield* CompileOperationViews(FindByIdOperation);

          if (create) {
            const CreateOperation = BuildOperation({
              name: create.name,

              description: `Operação '${create.name}'.`,

              meta: {
                gql: {
                  kind: "mutation",
                },
              },

              input: {
                body: BuildTypeReference({
                  targetsTo: create.input,
                  description: `Corpo de entrada da operação '${create.name}'.`,
                }),
              },

              output: {
                success: BuildTypeReference({
                  targetsTo: findById.output,
                  description: `Corpo de resposta da operação ${create.name}.`,
                }),
              },
            });

            yield CreateOperation;
            yield* CompileOperationViews(CreateOperation);
          }

          if (updateById) {
            const UpdateOperation = BuildOperation({
              name: updateById.name,

              description: "Update operation",

              meta: {
                gql: {
                  kind: "mutation",
                },
              },

              input: {
                params: {
                  ...FindByIdOperation.input!.params,
                },
                body: BuildTypeReference({
                  targetsTo: updateById.input,
                  description: "Data to update",
                }),
              },

              output: {
                success: BuildTypeReference({
                  targetsTo: findById.output,
                  description: "Updated data",
                }),
              },
            });

            yield UpdateOperation;
            yield* CompileOperationViews(UpdateOperation);
          }

          if (deleteById) {
            const DeleteByIdOperation = BuildOperation({
              name: deleteById.name,

              description: `Operação '${deleteById.name}'.`,

              meta: {
                gql: {
                  kind: "mutation",
                },
              },

              input: {
                params: {
                  ...FindByIdOperation.input!.params,
                },
              },

              output: {
                success: BuildTypeBoolean(),
              },
            });

            yield DeleteByIdOperation;
            yield* CompileOperationViews(DeleteByIdOperation);
          }

          if (list) {
            const ListOperation = BuildOperation({
              name: list.name,

              description: `Operação '${list.name}'.`,

              meta: {
                gql: {
                  kind: "query",
                },
              },

              input: {
                params: {
                  ...Object.fromEntries(
                    (list.filters ?? [])?.map(([param]) => [
                      param,
                      BuildTypeString({
                        description: `Filtro '${param}'`,
                        required: false,
                      }),
                    ]),
                  ),
                },
              },

              output: {
                success: BuildTypeReference({
                  targetsTo: list.view,
                  description: `Corpo de resposta da operação ${list.name}.`,
                }),
              },
            });

            yield ListOperation;
            yield* CompileOperationViews(ListOperation);
          }
        }
      }
    }
  };

  return BuildModule({
    get nodes() {
      return Array.from(nodesGenerator());
    },
    set nodes(_: any[]) {
      throw new Error();
    },
  });
};

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
