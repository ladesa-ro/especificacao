import "@typespec/json-schema";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

/**
 * Define os nomes das entidades.
 */
enum EntityToken {
  //
  Arquivo: "Arquivo",
  ArquivoView: "ArquivoView",
  ArquivoFindOneInputView: "ArquivoFindOneInputView",
  ArquivoFindOneResultView: "ArquivoFindOneResultView",
  //
  Usuario: "Usuario",
  //
  Imagem: "Imagem",
  //
  ImagemArquivo: "ImagemArquivo"
  //
}