import "@typespec/json-schema";
import "../.utils/-index.tsp";
import "../base/imagem.tsp";

using Ladesa.Extensions;
using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Usuário.
 */
@entity(EntityToken.Usuario)
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
