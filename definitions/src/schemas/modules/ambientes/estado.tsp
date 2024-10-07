using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Estado. */
@entity(Tokens.Estado)
model Estado {
  ...ObjectIntegerId;

  /** Nome oficial do estado. */
  nome: string;

  /** Sigla do estado. */
  @extension("x-unispec-constraint-estado-sigla", true)
  sigla: string;
}

/** Visão completa de um estado. */
@entity(Tokens.Estado_View)
model EstadoView {
  ...Estado;
}

/**
 * Dados de entrada para encontrar um estado por id.
 */
@entity(Tokens.Estado_FindOneInput_View)
model EstadoFindOneInputView is PickProperties<EstadoView, "id">;

/**
 * Visão FindOne de um estado.
 */
@entity(Tokens.Estado_FindOneResult_View)
@entityPartialOf(Tokens.Estado_View)
model EstadoFindOneResultView {
  //
  ...PickProperties<EstadoView, "id">;

  ...PickProperties<EstadoView, "nome">;
  ...PickProperties<EstadoView, "sigla">;
}

/** Resultados da busca a estados. */
@entity(Tokens.Estado_ListResult_View)
model EstadoListResultView is PaginationResultView<EstadoFindOneResultView>;

// =====================================
// operações
// =====================================

model EstadoFindOneByIdOperation is GenericOperationFindOneById<Tokens.Estado_Operations_FindOneById, Estado.id, EstadoFindOneResultView>;

model EstadoListOperation is GenericOperationList<Tokens.Estado_Operations_List, EstadoListResultView>;
