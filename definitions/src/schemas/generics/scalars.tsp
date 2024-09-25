using Ladesa.Extensions;
using TypeSpec.JsonSchema;

@baseUri("ladesa://schemas/v3/generics/scalars")
namespace Ladesa.Schemas;

/**
 * Identificador Único Universal.
 */
@format("uuid")
scalar uuid extends string;

/**
 * Date time ISO 8601.
 */
@format("date-time")
scalar date_time extends string;
