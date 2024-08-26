import "@typespec/json-schema";
import "../.utils/common.tsp";
import "../base/main.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/** Usuário */
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
