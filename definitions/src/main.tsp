import "@typespec/json-schema";
import "./.utils/index.tsp";
import "./schemas/index.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
@baseUri("ladesa://schemas/v3/")
namespace Ladesa.Schemas;
