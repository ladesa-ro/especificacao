import "./entityPartialOf.js";
import "../../entity-token.tsp";

using Ladesa.Schemas;
using TypeSpec.Reflection;

namespace Ladesa.Extensions {
  extern dec entityPartialOf(target: Model, partialOf: EntityToken);
}
