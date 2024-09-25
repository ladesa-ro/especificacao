import "@typespec/json-schema";
import "./.utils/index.tsp";
import "./schemas/index.tsp";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;
