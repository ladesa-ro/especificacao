import "@typespec/json-schema";
import "../.utils/common.tsp";
import "../.utils/entity-token.tsp";
import "../base/imagem.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Usuário.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.Usuario>)
model Usuario {
  ...ObjectUuid;

  //

  /** Nome do usuário. */
  nome?: string;

  /** Matrícula SIAPE do usuário. */
  matriculaSiape?: string;

  /** E-mail do usuário. */
  email?: string;

  //

  /** Diz que o usuário tem poderes de administrador. */
  isSuperUser: boolean;

  //

  /** Imagem de capa do usuário. */
  imagemCapa?: Imagem;

  /** Imagem de perfil do usuário. */
  imagemPerfil?: Imagem;

  //

  ...DatedObject;
}
