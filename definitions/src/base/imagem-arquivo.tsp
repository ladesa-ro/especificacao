import "@typespec/json-schema";
import "../.utils/-index.tsp";

using TypeSpec.JsonSchema;
using Ladesa.Extensions;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * ImagemArquivo.
 */
@entity(EntityToken.ImagemArquivo)
model ImagemArquivo {
  ...ObjectUuid;

  /** Largura da imagem. */
  largura: integer;

  /** Altura da imagem. */
  altura: integer;

  /** Formato da imagem. */
  formato: integer;

  /** Mime-type da imagem. */
  mimeType: string;

  /** Imagem. */
  imagem: Imagem;

  /** Arquivo. */
  arquivo: Arquivo;

  ...DatedObject;
}
