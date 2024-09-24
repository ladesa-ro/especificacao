import "../.utils/-index.tsp";

using Ladesa.Extensions;

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
