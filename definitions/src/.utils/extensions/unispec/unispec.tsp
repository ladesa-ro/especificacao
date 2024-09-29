import "./unispec.js";
import "../../../schemas/tokens.tsp";

using TypeSpec.JsonSchema;
using TypeSpec.Reflection;

namespace Unispec.JsonSchema {
  alias GenericOperationOptions = {
    meta?: {
      gql?: {
        kind?: "query" | "mutation" | false;
      };
    } & Record<unknown>;
  };

  alias GenericOperationDtos = {
    //

    //

    input?: {
      body?: unknown;
      params?: unknown | Record<unknown>;
      queries?: unknown | Record<unknown>;
    };

    //

    output?: {
      success?: unknown;
    } | null;
  };

  extern dec operation(target: unknown, operationId: string | unknown, operationOptions?: valueof GenericOperationOptions);

  extern dec entity(target: Model, entityToken: string | unknown);
  extern dec entityPartialOf(target: unknown, partialOf: string | unknown);

  @operation(OperationId, Options)
  model GenericOperation<
    OperationId extends unknown | (valueof unknown),
    Options extends valueof GenericOperationOptions,
    Output extends GenericOperationDtos
  > {
    ...PickProperties<Output, "input" | "output">;
  }
}
