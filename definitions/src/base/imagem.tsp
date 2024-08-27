import "@typespec/json-schema";
import "../.utils/-index.tsp";

using Ladesa.Extensions;
using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Imagem.
 */
@entity(EntityToken.Imagem)
model Imagem {
  ...ObjectUuid;

  /** Descrição da imagem. */
  descricao?: string;

  ...DatedObject;
}
