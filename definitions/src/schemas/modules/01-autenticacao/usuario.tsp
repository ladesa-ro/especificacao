using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

using Ladesa.Schemas.Pagination.Result;

/** Usuário. */
@entity(Tokens.Usuario)
model Usuario {
  ...ObjectUuid;

  /** Nome do usuário. */
  @minLength(1)
  nome: string | null;

  /** Matrícula SIAPE do usuário. */
  @minLength(1)
  matriculaSiape: string | null;

  /** E-mail do usuário. */
  @format("email")
  email: string | null;

  /** Diz que o usuário tem poderes de administrador. */
  isSuperUser: boolean;

  /** Imagem de capa do usuário. */
  imagemCapa: Imagem | null;

  /** Imagem de perfil do usuário. */
  imagemPerfil: Imagem | null;

  ...DatedObject;
}

/** Visão completa de um Usuário. */
@entity(Tokens.Usuario_View)
model UsuarioView {
  ...OmitProperties<Usuario, "imagemCapa" | "imagemPerfil">;
  imagemCapa: ImagemFindOneResultView | null;
  imagemPerfil: ImagemFindOneResultView | null;
}

/** Dados de entrada para encontrar um Usuário por ID. */
@entity(Tokens.Usuario_FindOneInput_View)
model UsuarioFindOneInputView {
  @extension("x-unispec-constraint-entity-exists", Json<Tokens.Usuario>)
  id: Usuario.id;
}

/** Visão FindOne de um Usuário. */
@entity(Tokens.Usuario_FindOneResult_View)
@entityPartialOf(Tokens.Usuario_View)
model UsuarioFindOneResultView {
  //
  ...PickProperties<UsuarioView, "id">;

  ...PickProperties<UsuarioView, "nome">;
  ...PickProperties<UsuarioView, "matriculaSiape">;
  ...PickProperties<UsuarioView, "email">;
  ...PickProperties<UsuarioView, "isSuperUser">;

  //
  ...PickProperties<UsuarioView, "imagemCapa">;

  //
  ...PickProperties<UsuarioView, "imagemPerfil">;

  //
  ...PickProperties<UsuarioView, "dateCreated" | "dateUpdated" | "dateDeleted">;
}

/** Resultados da busca a usuários. */
@entity(Tokens.Usuario_ListResult_View)
model UsuarioListResultView is PaginationResultView<UsuarioFindOneResultView>;

/** Dados de entrada para a criação de um usuário. */
@entity(Tokens.Usuario_InputCreate_View)
model UsuarioInputCreateView {
  ...PickProperties<UsuarioView, "nome">;
  ...PickProperties<UsuarioView, "matriculaSiape">;
  ...PickProperties<UsuarioView, "email">;
}

/** Dados de entrada para a atualização de um Usuário. */
@entity(Tokens.Usuario_InputUpdate_View)
model UsuarioInputUpdateView is OptionalProperties<UsuarioInputCreateView>;

// =====================================
// operações
// =====================================

model UsuarioFindOneByIdOperation
  is GenericOperationFindOneById<Tokens.Usuario_Operations_FindOneById, UsuarioFindOneInputView.id, UsuarioFindOneResultView>;

model UsuarioDeleteByIdOperation is GenericOperationDeleteOneById<Tokens.Usuario_Operations_DeleteOneById, UsuarioFindOneInputView.id>;

model UsuarioCreateOperation is GenericOperationCreate<Tokens.Usuario_Operations_Create, UsuarioInputCreateView, UsuarioFindOneResultView>;

model UsuarioUpdateByIdOperation
  is GenericOperationUpdate<
    Tokens.Usuario_Operations_UpdateOneById,
    UsuarioFindOneInputView.id,
    UsuarioInputUpdateView,
    UsuarioFindOneResultView
  >;

model UsuarioListOperation is GenericOperationList<Tokens.Usuario_Operations_List, UsuarioListResultView, {}>;

model UsuarioGetImagemCapa is ImagemGenericGetImagemCapaOperation<Tokens.Usuario_Operations_GetImagemCapa, UsuarioFindOneInputView.id>;

model UsuarioSetImagemCapa is ImagemGenericSetImagemCapaOperation<Tokens.Usuario_Operations_SetImagemCapa, UsuarioFindOneInputView.id>;

/** Obtêm a imagem de perfil. */
model UsuarioGetImagemPerfil is ImagemGenericGetImagemOperation<Tokens.Usuario_Operations_GetImagemPerfil, UsuarioFindOneInputView.id>;

/** Define a imagem de perfil. */
model UsuarioSetImagemPerfil is ImagemGenericSetImagemOperation<Tokens.Usuario_Operations_SetImagemPerfil, UsuarioFindOneInputView.id>;
