import "@typespec/json-schema";
import "../.utils/common.tsp";
import "../.utils/entity-token.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * ImagemArquivo.
 */
@extension("x-ladesa-entity-token", Json<EntityToken.ImagemArquivo>)
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
