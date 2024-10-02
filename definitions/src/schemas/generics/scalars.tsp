using Unispec.JsonSchema;
using TypeSpec.JsonSchema;

@baseUri("ladesa://schemas/v3/generics/scalars")
namespace Ladesa.Schemas;

/**
 * Identificador Único Universal.
 */
@format("uuid")
scalar uuid extends string;

/**
 * Identificador numérico.
 */
@minValue(1)
scalar numeric_id extends integer;

/**
 * Date time ISO 8601.
 */
@format("date-time")
scalar date_time extends string;

/**
 * Date ISO 8601.
 */
@format("date")
scalar date extends string;

/**
 * Time ISO 8601.
 */
@format("time")
scalar time extends string;
