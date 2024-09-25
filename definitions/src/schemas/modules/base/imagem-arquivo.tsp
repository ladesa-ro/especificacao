import "../../../.utils/index.tsp";

using Ladesa.Extensions;

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
  formato: string;

  /** Mime-type da imagem. */
  mimeType: string;

  /** Imagem. */
  imagem: Imagem;

  /** Arquivo. */
  arquivo: Arquivo;

  ...DatedObject;
}
