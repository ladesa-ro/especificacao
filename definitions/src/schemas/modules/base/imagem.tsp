import "../../../.utils/index.tsp";

using Ladesa.Extensions;

namespace Ladesa.Schemas;

/**
 * Imagem.
 */
@entity(Tokens.Imagem)
model Imagem {
  ...ObjectUuid;

  /** Descrição da imagem. */
  descricao?: string;

  ...DatedObject;
}
