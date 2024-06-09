import {
  BuildModule,
  BuildOperation,
  BuildTypeArray,
  BuildTypeBoolean,
  BuildTypeInteger,
  BuildTypeReference,
  BuildTypeString,
} from "@unispec/ast-builder";
import type { IUniNodeOperation, UniTypes as U } from "@unispec/ast-types";
import { CompileOperationViews } from "./CompileOperationViews";

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
            const listFilters = list.filters ?? [];
            const ListOperation = BuildOperation({
              name: list.name,

              description: `Operação '${list.name}'.`,

              meta: {
                gql: {
                  kind: "query",
                },
              },

              input: {
                queries: {
                  page: BuildTypeInteger({
                    description: "Página da listagem",
                    constraints: { min: 1, positive: true, integer: true },
                    required: false,
                    nullable: false,
                  }),

                  limit: BuildTypeInteger({
                    description: "Limite de resultados por página.",
                    constraints: { min: 1, max: 100, positive: true, integer: true },
                    required: false,
                    nullable: false,
                  }),

                  search: BuildTypeString({
                    description: "Busca textual.",
                    required: false,
                    nullable: false,
                  }),

                  sortBy: BuildTypeArray({
                    description: "Configurações de ordenamento.",

                    required: false,
                    nullable: false,

                    items: BuildTypeString({
                      description: "Configuração de ordenamento.",
                      required: false,
                      nullable: false,
                    }),
                  }),

                  ...Object.fromEntries(
                    listFilters.map(([param]) => [
                      `filter.${param}`,
                      BuildTypeArray({
                        description: `Filtros para '${param}'.`,

                        required: false,

                        items: BuildTypeString({
                          required: false,
                          description: `Restrição para o filtro '${param}'.`,
                        }),
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
