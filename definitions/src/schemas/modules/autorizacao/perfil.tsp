using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Vínculo. */
@entity(Tokens.Perfil)
model Perfil {
  ...ObjectUuid;

  /** Indica se o vínculo está ativo. */
  ativo: boolean;

  /** Cargo do usuário no vínculo. */
  cargo: string;

  /** Campus associado ao vínculo. */
  campus: Campus;

  /** Usuário associado ao vínculo. */
  usuario: Usuario;

  ...DatedObject;
}

/** Visão completa de um Vínculo. */
@entity(Tokens.Perfil_View)
model PerfilView {
  ...OmitProperties<Perfil, "campus" | "usuario">;
  campus: CampusFindOneResultView;
  usuario: UsuarioFindOneResultView;
}

/** Dados de entrada para encontrar um Vínculo por ID. */
@entity(Tokens.Perfil_FindOneInput_View)
model PerfilFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Perfil>)
  id: Perfil.id;
}

/** Visão FindOne de um Vínculo. */
@entity(Tokens.Perfil_FindOneResult_View)
@entityPartialOf(Tokens.Perfil_View)
model PerfilFindOneResultView {
  //
  ...PickProperties<PerfilView, "id">;

  ...PickProperties<PerfilView, "ativo">;
  ...PickProperties<PerfilView, "cargo">;

  //
  ...PickProperties<PerfilView, "campus">;

  //
  ...PickProperties<PerfilView, "usuario">;

  //
  ...PickProperties<PerfilView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Resultados da busca a Vínculos. */
@entity(Tokens.Perfil_ListResult_View)
model PerfilListResultView is PaginationResultView<PerfilFindOneResultView>;

/** Dados de entrada para a alteração de vínculo de um Usuário a um Campus. */
@entity(Tokens.Perfil_InputUpdate_View)
model PerfilUpdateView {
  /** Cargos do usuário no vínculo. */
  cargos: string[];

  campus: CampusFindOneInputView;
  usuario: UsuarioFindOneInputView;
}

// =====================================
// operações
// =====================================

model PerfilFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Perfil_Operations_FindOneById, PerfilFindOneInputView.id, PerfilFindOneResultView>;

model PerfilListOperation
  is GenericOperationList<
    Tokens.Perfil_Operations_List,
    PerfilListResultView,
    {
      // filtros
      filterAtivo?: Pagination.GenericFilter.eq[];

      // filtros
      @extension("x-unispec-gql-key", "filterCampusId")
      @extension("x-unispec-http-key", "filter.campus.id")
      `filter.campus.id`?: Pagination.GenericFilter.eq[];

      // filtros
      @extension("x-unispec-gql-key", "filterUsuarioId")
      @extension("x-unispec-http-key", "filter.usuario.id")
      `filter.usuario.id`?: Pagination.GenericFilter.eq[];
    }
  >;

model PerfilUpdateOperation
  is GenericOperation<
    Tokens.Perfil_Operations_UpdateOneById,
    #{ meta: #{ gql: #{ kind: "mutation" } } },
    {
      input: {
        body: PerfilUpdateView;
      };
      output: {
        success: PerfilListResultView;
      };
    }
  >;
