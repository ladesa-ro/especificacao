import "@typespec/json-schema";
import "./.utils/-index.tsp";
import "./autenticacao/-index.tsp";
import "./base/-index.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;
