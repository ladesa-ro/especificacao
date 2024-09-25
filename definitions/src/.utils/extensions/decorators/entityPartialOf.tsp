import "./entityPartialOf.js";
import "../../../schemas/tokens.tsp";

using Ladesa.Schemas;
using TypeSpec.Reflection;

namespace Ladesa.Extensions {
  extern dec entityPartialOf(target: unknown, partialOf: Tokens | string | unknown);
}
