import "./entityPartialOf.js";
import "../../../schemas/entity-token.tsp";

using Ladesa.Schemas;
using TypeSpec.Reflection;

namespace Ladesa.Extensions {
  extern dec entityPartialOf(target: Model, partialOf: EntityToken);
}
