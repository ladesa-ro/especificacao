using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Etapa. */
@entity(Tokens.Etapa)
model Etapa {
  ...ObjectUuid;

  /** Número da etapa. */
  numero: uint8 | null;

  /** Data de início. */
  dataInicio: date;

  /** Data de término. */
  dataTermino: date;

  /** Cor da etapa. */
  cor: string | null;

  /** Calendario. */
  calendario: CalendarioLetivo;

  ...DatedObject;
}

/** Visão completa de uma Etapa. */
@entity(Tokens.Etapa_View)
model EtapaView {
  ...OmitProperties<Etapa, "calendario">;
  calendario: CalendarioLetivoFindOneResultView;
}

/** Dados de entrada para encontrar uma Etapa por ID. */
@entity(Tokens.Etapa_FindOneInput_View)
model EtapaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Etapa>)
  id: Etapa.id;
}

/** Visão FindOne de uma Etapa. */
@entity(Tokens.Etapa_FindOneResult_View)
@entityPartialOf(Tokens.Etapa_View)
model EtapaFindOneResultView {
  ...PickProperties<EtapaView, "id">;
  ...PickProperties<EtapaView, "numero" | "dataInicio" | "dataTermino" | "cor">;
  ...PickProperties<EtapaView, "calendario">;
  ...PickProperties<EtapaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Etapa. */
@entity(Tokens.Etapa_InputCreate_View)
model EtapaInputCreateView {
  numero: uint8 | null;
  dataInicio: date;
  dataTermino: date;
  cor: string | null;
  calendario: CalendarioLetivoFindOneInputView;
}

/** Dados de entrada para a atualização de uma Etapa. */
@entity(Tokens.Etapa_InputUpdate_View)
model EtapaInputUpdateView is OptionalProperties<EtapaInputCreateView>;

/** Resultados da busca a Etapas. */
@entity(Tokens.Etapa_ListResult_View)
model EtapaListResultView is PaginationResultView<EtapaFindOneResultView>;

// =====================================
// Operações
// =====================================

model EtapaFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Etapa_Operations_FindOneById, EtapaFindOneInputView.id, EtapaFindOneResultView>;

model EtapaDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Etapa_Operations_DeleteOneById, EtapaFindOneInputView.id>;

model EtapaCreateOperation is GenericOperationCreate<Tokens.Etapa_Operations_Create, EtapaInputCreateView, EtapaFindOneResultView>;

model EtapaUpdateByIdOperation
  is GenericOperationUpdate<Tokens.Etapa_Operations_UpdateOneById, EtapaFindOneInputView.id, EtapaInputUpdateView, EtapaFindOneResultView>;

model EtapaListOperation
  is GenericOperationList<
    Tokens.Etapa_Operations_List,
    EtapaListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCalendarioId")
      @extension("x-unispec-http-key", "filter.calendario.id")
      `filter.calendario.id`?: Pagination.GenericFilter.eq[];
    }
  >;
