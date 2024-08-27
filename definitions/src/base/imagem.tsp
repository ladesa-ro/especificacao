import "@typespec/json-schema";
import "../.utils/entity-token.tsp";
import "../.utils/common.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Imagem.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.Imagem>)
model Imagem {
  ...ObjectUuid;

  /** Descrição da imagem. */
  descricao?: string;

  ...DatedObject;
}
