using Ladesa.Extensions;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

alias GenericOperationOptions = {
  //

  meta?: {
    gql?: {
      kind?: "query" | "mutation" | false;
    };
  } & Record<unknown>;

  //

  input?: {
    body?: unknown;
    params?: unknown | Record<unknown>;
    queries?: unknown | Record<unknown>;
  };

  //

  output: {
    success?: unknown;
  } | null;
};

@extension("x-unispec-kind", Json<"operation">)
model GenericOperation<Output extends GenericOperationOptions> {
  ...Output;
}
