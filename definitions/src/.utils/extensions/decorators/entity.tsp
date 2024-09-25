import "./entity.js";
import "../../../schemas/tokens.tsp";

using Ladesa.Schemas;
using TypeSpec.Reflection;

namespace Ladesa.Extensions {
  extern dec entity(target: Model, entityToken: Tokens | string | unknown);
}
