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
  ArquivoView: "Arquivo.View",
  ArquivoFindOneInputView: "Arquivo.View.FindOneInput",
  ArquivoFindOneResultView: "Arquivo.View.FindOneResult",
  //
  Usuario: "Usuario",
  //
  Imagem: "Imagem",
  //
  ImagemArquivo: "ImagemArquivo"
  //
}