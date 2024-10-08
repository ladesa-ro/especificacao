using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** HorarioGerado. */
@entity(Tokens.HorarioGerado)
model HorarioGerado {
  ...ObjectUuid;

  /** Status do horário gerado. */
  status: string | null;

  /** Tipo do horário gerado. */
  tipo: string | null;

  /** Data em que o horário foi gerado. */
  dataGeracao: date_time | null;

  /** Início da vigência do horário gerado. */
  vigenciaInicio: date | null;

  /** Fim da vigência do horário gerado. */
  vigenciaFim: date | null;

  /** calendário. */
  calendario: CalendarioLetivo;

  ...DatedObject;
}

/** Visão completa de um HorarioGerado. */
@entity(Tokens.HorarioGerado_View)
model HorarioGeradoView {
  ...OmitProperties<HorarioGerado, "calendario">;
  calendario: CalendarioLetivoFindOneResultView;
}

/** Dados de entrada para encontrar um HorarioGerado por ID. */
@entity(Tokens.HorarioGerado_FindOneInput_View)
model HorarioGeradoFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.HorarioGerado>)
  id: HorarioGerado.id;
}

/** Visão FindOne de um HorarioGerado. */
@entity(Tokens.HorarioGerado_FindOneResult_View)
@entityPartialOf(Tokens.HorarioGerado)
model HorarioGeradoFindOneResultView {
  ...PickProperties<HorarioGeradoView, "id">;
  ...PickProperties<HorarioGeradoView, "status" | "tipo" | "dataGeracao" | "vigenciaInicio" | "vigenciaFim">;
  ...PickProperties<HorarioGeradoView, "calendario">;
  ...PickProperties<HorarioGeradoView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um HorarioGerado. */
@entity(Tokens.HorarioGerado_InputCreate_View)
model HorarioGeradoInputCreateView {
  status: HorarioGerado.status;
  tipo: HorarioGerado.tipo;
  dataGeracao: HorarioGerado.dataGeracao;
  vigenciaInicio: HorarioGerado.vigenciaInicio;
  vigenciaFim: HorarioGerado.vigenciaFim;

  //
  calendario: CalendarioLetivoFindOneInputView;
}

/** Dados de entrada para a atualização de um HorarioGerado. */
@entity(Tokens.HorarioGerado_InputUpdate_View)
model HorarioGeradoInputUpdateView is OptionalProperties<HorarioGeradoInputCreateView>;

/** Resultados da busca de HorariosGerados. */
@entity(Tokens.HorarioGerado_ListResult_View)
model HorarioGeradoListResultView is PaginationResultView<HorarioGeradoFindOneResultView>;

// =====================================
// Operações
// =====================================

model HorarioGeradoFindByIdOperation
  is GenericOperationFindOneById<
    Tokens.HorarioGerado_Operations_FindOneById,
    HorarioGeradoFindOneInputView.id,
    HorarioGeradoFindOneResultView
  >;

model HorarioGeradoDeleteByIdOperation
  is GenericOperationDeleteOneById<Tokens.HorarioGerado_Operations_DeleteOneById, HorarioGeradoFindOneInputView.id>;

model HorarioGeradoCreateOperation
  is GenericOperationCreate<Tokens.HorarioGerado_Operations_Create, HorarioGeradoInputCreateView, HorarioGeradoFindOneResultView>;

model HorarioGeradoUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.HorarioGerado_Operations_UpdateOneById,
    HorarioGeradoFindOneInputView.id,
    HorarioGeradoInputUpdateView,
    HorarioGeradoFindOneResultView
  >;

model HorarioGeradoListOperation
  is GenericOperationList<
    Tokens.HorarioGerado_Operations_List,
    HorarioGeradoListResultView,
    {
      // filtros
      // Adicione aqui os filtros necessários, se houver
    }
  >;
