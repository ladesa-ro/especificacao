using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Diario. */
@entity(Tokens.Diario)
model Diario {
  ...ObjectUuid;

  /** Situação do diário. */
  ativo: boolean;

  /** Calendário Letivo vinculado ao diário. */
  calendarioLetivo: CalendarioLetivo;

  /** Turma vinculada ao diário. */
  turma: Turma;

  /** Disciplina vinculada ao diário. */
  disciplina: Disciplina;

  /** Ambiente padrão. */
  ambientePadrao: Ambiente | null;

  /** Imagem de capa do diário. */
  imagemCapa: Imagem;

  ...DatedObject;
}

/** Visão completa de um diário. */
@entity(Tokens.Diario_View)
model DiarioView {
  ...OmitProperties<Diario, "calendarioLetivo" | "turma" | "disciplina" | "ambientePadrao" | "imagemCapa">;
  calendarioLetivo: CalendarioLetivoFindOneResultView;
  turma: TurmaFindOneResultView;
  disciplina: DisciplinaFindOneResultView;
  ambientePadrao: AmbienteFindOneResultView | null;
  imagemCapa: ImagemFindOneResultView;
}

/** Dados de entrada para encontrar um diário por ID. */
@entity(Tokens.Diario_FindOneInput_View)
model DiarioFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Diario>)
  id: Diario.id;
}

/** Visão FindOne de um diário. */
@entity(Tokens.Diario_FindOneResult_View)
@entityPartialOf(Tokens.Diario_View)
model DiarioFindOneResultView {
  ...PickProperties<DiarioView, "id" | "ativo">;
  ...PickProperties<DiarioView, "calendarioLetivo" | "turma" | "disciplina" | "ambientePadrao" | "imagemCapa">;
  ...PickProperties<DiarioView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Dados de entrada para a criação de um diário. */
@entity(Tokens.Diario_InputCreate_View)
model DiarioInputCreateView {
  ativo: boolean;
  calendarioLetivo: CalendarioLetivoFindOneInputView;
  turma: TurmaFindOneInputView;
  disciplina: DisciplinaFindOneInputView;
  ambientePadrao: AmbienteFindOneInputView | null;
}

/** Dados de entrada para a atualização de um diário. */
@entity(Tokens.Diario_InputUpdate_View)
model DiarioInputUpdateView is OptionalProperties<DiarioInputCreateView>;

/** Resultados da busca a Diarios. */
@entity(Tokens.Diario_ListResult_View)
model DiarioListResultView is PaginationResultView<DiarioFindOneResultView>;

// =====================================
// Operações
// =====================================

model DiarioFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Diario_Operations_FindOneById, DiarioFindOneInputView.id, DiarioFindOneResultView>;

model DiarioDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Diario_Operations_DeleteOneById, DiarioFindOneInputView.id>;

model DiarioCreateOperation is GenericOperationCreate<Tokens.Diario_Operations_Create, DiarioInputCreateView, DiarioFindOneResultView>;

model DiarioUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Diario_Operations_UpdateOneById,
    DiarioFindOneInputView.id,
    DiarioInputUpdateView,
    DiarioFindOneResultView
  >;

model DiarioListOperation
  is GenericOperationList<
    Tokens.Diario_Operations_List,
    DiarioListResultView,
    {
      // filtros
      @extension("x-unispec-gql-key", "filterTurmaId")
      @extension("x-unispec-http-key", "filter.turma.id")
      filter_turma_id?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterDisciplinaId")
      @extension("x-unispec-http-key", "filter.disciplina.id")
      filter_disciplina_id?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterAmbientePadraoId")
      @extension("x-unispec-http-key", "filter.ambientePadrao.id")
      filter_ambientePadrao_id?: Pagination.GenericFilter.eq[];

      @extension("x-unispec-gql-key", "filterCalendarioLetivoId")
      @extension("x-unispec-http-key", "filter.calendarioLetivo.id")
      filter_calendarioLetivo_id?: Pagination.GenericFilter.eq[];
    }
  >;

/** Operações extras para a imagem de capa do diário. */
model DiarioGetCoverImageOperation
  is ImagemGenericGetImagemCapaOperation<Tokens.Diario_Operations_GetImagemCapa, DiarioFindOneInputView.id>;

model DiarioSetCoverImageOperation
  is ImagemGenericSetImagemCapaOperation<Tokens.Diario_Operations_SetImagemCapa, DiarioFindOneInputView.id>;
