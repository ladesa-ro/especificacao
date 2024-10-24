using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** CalendarioLetivo. */
@entity(Tokens.CalendarioLetivo)
model CalendarioLetivo {
  ...ObjectUuid;

  /** Nome do calendário letivo. */
  nome: string;

  /** Ano do calendário letivo. */
  ano: uint16;

  /** Campus ao qual o calendário letivo pertence. */
  campus: Campus;

  /** Oferta de formação do calendário letivo. */
  ofertaFormacao: OfertaFormacao;

  ...DatedObject;
}

/** Visão completa de um calendário letivo. */
@entity(Tokens.CalendarioLetivo_View)
model CalendarioLetivoView {
  ...OmitProperties<CalendarioLetivo, "campus" | "ofertaFormacao">;
  campus: CampusFindOneResultView;
  ofertaFormacao: OfertaFormacaoFindOneResultView;
}

/** Dados de entrada para encontrar um calendário letivo por ID. */
@entity(Tokens.CalendarioLetivo_FindOneInput_View)
model CalendarioLetivoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.CalendarioLetivo>)
  id: CalendarioLetivo.id;
}

/** Visão FindOne de um calendário letivo. */
@entity(Tokens.CalendarioLetivo_FindOneResult_View)
@entityPartialOf(Tokens.CalendarioLetivo_View)
model CalendarioLetivoFindOneResultView {
  //
  ...PickProperties<CalendarioLetivoView, "id">;

  ...PickProperties<CalendarioLetivoView, "nome" | "ano">;

  //
  ...PickProperties<CalendarioLetivoView, "campus" | "ofertaFormacao">;

  //
  ...PickProperties<CalendarioLetivoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um calendário letivo. */
@entity(Tokens.CalendarioLetivo_InputCreate_View)
model CalendarioLetivoInputCreateView {
  ...PickProperties<CalendarioLetivoView, "nome" | "ano">;
  campus: CampusFindOneInputView;
  ofertaFormacao: OfertaFormacaoFindOneInputView;
}

/** Dados de entrada para a atualização de um calendário letivo. */
@entity(Tokens.CalendarioLetivo_InputUpdate_View)
model CalendarioLetivoInputUpdateView is OptionalProperties<CalendarioLetivoInputCreateView>;

/** Resultados da busca a CalendarioLetivos. */
@entity(Tokens.CalendarioLetivo_ListResult_View)
model CalendarioLetivoListResultView is PaginationResultView<CalendarioLetivoFindOneResultView>;

// =====================================
// Operações
// =====================================

model CalendarioLetivoFindOneByIdOperation
  is GenericOperationFindOneById<
    Tokens.CalendarioLetivo_Operations_FindOneById,
    CalendarioLetivoFindOneInputView.id,
    CalendarioLetivoFindOneResultView
  >;

model CalendarioLetivoDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.CalendarioLetivo_Operations_DeleteOneById, CalendarioLetivoFindOneInputView.id>;

model CalendarioLetivoCreateOperation
  is GenericOperationCreate<Tokens.CalendarioLetivo_Operations_Create, CalendarioLetivoInputCreateView, CalendarioLetivoFindOneResultView>;

model CalendarioLetivoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.CalendarioLetivo_Operations_UpdateOneById,
    CalendarioLetivoFindOneInputView.id,
    CalendarioLetivoInputUpdateView,
    CalendarioLetivoFindOneResultView
  >;

model CalendarioLetivoListOperation
  is GenericOperationList<
    Tokens.CalendarioLetivo_Operations_List,
    CalendarioLetivoListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterCampusId")
      @extension("x-unispec-http-key", "filter.campus.id")
      `filter.campus.id`?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterOfertaFormacaoId")
      @extension("x-unispec-http-key", "filter.ofertaFormacao.id")
      `filter.ofertaFormacao.id`?: Pagination.GenericFilter.eq[];
    }
  >;
