import "./entity.js";
import "../../../schemas/entity-token.tsp";

using Ladesa.Schemas;
using TypeSpec.Reflection;

namespace Ladesa.Extensions {
  extern dec entity(target: Model, entityToken: EntityToken);
}
