using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Reserva. */
@entity(Tokens.Reserva)
model Reserva {
  ...ObjectUuid;

  /** Situação da reserva. */
  @minLength(1)
  situacao: string;

  /** Motivo da reserva. */
  @minLength(1)
  motivo: string | null;

  /** Tipo da reserva. */
  @minLength(1)
  tipo: string | null;

  /** Data e hora de início da reserva. */
  dataInicio: date_time;

  /** Data e hora de término da reserva. */
  dataTermino: date_time | null;

  /** Usuário que fez a reserva. */
  usuario: Usuario;

  /** Ambiente reservado. */
  ambiente: Ambiente;

  /** Intervalo de tempo reservado. */
  intervaloDeTempo: IntervaloDeTempo;

  ...DatedObject;
}

/** Visão completa de uma Reserva. */
@entity(Tokens.Reserva_View)
model ReservaView {
  ...OmitProperties<Reserva, "usuario" | "ambiente" | "intervaloDeTempo">;
  usuario: UsuarioFindOneResultView;
  ambiente: AmbienteFindOneResultView;
  intervaloDeTempo: IntervaloDeTempoFindOneResultView;
}

/** Dados de entrada para encontrar uma Reserva por ID. */
@entity(Tokens.Reserva_FindOneInput_View)
model ReservaFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Reserva>)
  id: Reserva.id;
}

/** Visão FindOne de uma Reserva. */
@entity(Tokens.Reserva_FindOneResult_View)
@entityPartialOf(Tokens.Reserva_View)
model ReservaFindOneResultView {
  //
  ...PickProperties<ReservaView, "id">;

  ...PickProperties<ReservaView, "situacao" | "motivo" | "tipo" | "dataInicio" | "dataTermino">;

  //
  ...PickProperties<ReservaView, "usuario" | "ambiente" | "intervaloDeTempo">;

  //
  ...PickProperties<ReservaView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de uma Reserva. */
@entity(Tokens.Reserva_InputCreate_View)
model ReservaInputCreateView {
  ...PickProperties<ReservaView, "situacao" | "motivo" | "tipo" | "dataInicio" | "dataTermino">;
  usuario: UsuarioFindOneInputView;
  ambiente: AmbienteFindOneInputView;
  intervaloDeTempo: IntervaloDeTempoInputView;
}

/** Dados de entrada para a atualização de uma Reserva. */
@entity(Tokens.Reserva_InputUpdate_View)
model ReservaInputUpdateView is OptionalProperties<ReservaInputCreateView>;

/** Resultados da busca a Reservas. */
@entity(Tokens.Reserva_ListResult_View)
model ReservaListResultView is PaginationResultView<ReservaFindOneResultView>;

// =====================================
// Operações
// =====================================

model ReservaFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Reserva_Operations_FindOneById, ReservaFindOneInputView.id, ReservaFindOneResultView>;

model ReservaDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Reserva_Operations_DeleteOneById, ReservaFindOneInputView.id>;

model ReservaCreateOperation is GenericOperationCreate<Tokens.Reserva_Operations_Create, ReservaInputCreateView, ReservaFindOneResultView>;

model ReservaUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Reserva_Operations_UpdateOneById,
    ReservaFindOneInputView.id,
    ReservaInputUpdateView,
    ReservaFindOneResultView
  >;

model ReservaListOperation
  is GenericOperationList<
    Tokens.Reserva_Operations_List,
    ReservaListResultView,
    {
      // filters
      @extension("x-unispec-gql-key", "filterDataInicio")
      @extension("x-unispec-http-key", "filter.dataInicio")
      `filter.dataInicio`?: (
        | Pagination.GenericFilter.eq
        | Pagination.GenericFilter.gt
        | Pagination.GenericFilter.gte
        | Pagination.GenericFilter.lt
        | Pagination.GenericFilter.lte)[];

      // filters
      @extension("x-unispec-gql-key", "filterDataTermino")
      @extension("x-unispec-http-key", "filter.dataTermino")
      `filter.dataTermino`?: (
        | Pagination.GenericFilter.eq
        | Pagination.GenericFilter.gt
        | Pagination.GenericFilter.gte
        | Pagination.GenericFilter.lt
        | Pagination.GenericFilter.lte)[];

      // filters
      @extension("x-unispec-gql-key", "filterIntervaloDeTempoPeriodoInicio")
      @extension("x-unispec-http-key", "intervaloDeTempo.periodoInicio")
      `intervaloDeTempo.periodoInicio`?: (
        | Pagination.GenericFilter.eq
        | Pagination.GenericFilter.gt
        | Pagination.GenericFilter.gte
        | Pagination.GenericFilter.lt
        | Pagination.GenericFilter.lte)[];

      // filters
      @extension("x-unispec-gql-key", "filterIntervaloDeTempoPeriodoFim")
      @extension("x-unispec-http-key", "intervaloDeTempo.periodoFim")
      `intervaloDeTempo.periodoFim`?: (
        | Pagination.GenericFilter.eq
        | Pagination.GenericFilter.gt
        | Pagination.GenericFilter.gte
        | Pagination.GenericFilter.lt
        | Pagination.GenericFilter.lte)[];
    }
  >;
