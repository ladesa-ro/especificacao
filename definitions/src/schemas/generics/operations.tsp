using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

@baseUri("ladesa://schemas/v3/generics/operations")
namespace Ladesa.Schemas;

alias GenericOperationFindOneById<Token, Id, Output> = GenericOperation<
  Token,
  #{ meta: #{ gql: #{ kind: "query" } } },
  {
    input: {
      params: {
        id: Id;
      };
    };
    output: {
      success: Output;
    };
  }
>;

alias GenericOperationDeleteOneById<Token, Id> = GenericOperation<
  Token,
  #{ meta: #{ gql: #{ kind: "mutation" } } },
  {
    input: {
      params: {
        id: Id;
      };
    };
    output: {
      success: boolean;
    };
  }
>;

alias GenericOperationList<Token, Output extends unknown | null, ExtraQueries extends Record<unknown> = {}> = GenericOperation<
  Token,
  #{ meta: #{ gql: #{ kind: "query" } } },
  {
    input: {
      queries: {
        page?: Ladesa.Schemas.Pagination.Input.GenericSearchInputView.page;
        limit?: Ladesa.Schemas.Pagination.Input.GenericSearchInputView.limit;
        search?: Ladesa.Schemas.Pagination.Input.GenericSearchInputView.search;

        // sortables
        sortBy?: Ladesa.Schemas.Pagination.Input.GenericSearchInputView.sortBy;

        ...ExtraQueries;
      };
    };
    output: {
      success: Output;
    };
  }
>;

alias GenericOperationCreate<Token, Input, Output> = GenericOperation<
  Token,
  #{ meta: #{ gql: #{ kind: "mutation" } } },
  {
    input: {
      body: Input;
    };
    output: {
      success: Output;
    };
  }
>;

alias GenericOperationUpdate<Token, Id, Input, Output> = GenericOperation<
  Token,
  #{ meta: #{ gql: #{ kind: "mutation" } } },
  {
    input: {
      params: {
        id: Id;
      };
      body: Input;
    };
    output: {
      success: Output;
    };
  }
>;
