import "@typespec/json-schema";

using Ladesa.Extensions;
using TypeSpec.JsonSchema;

@baseUri("ladesa://schemas/v3/generics/entities")
namespace Ladesa.Schemas;

/**
 * Estrutura identificada por id no formato uuid.
 */
model ObjectUuid {
  /** Identificador do registro (uuid). */
  id: uuid;
}

/**
 * Estrutura identificada por id no formato numérico.
 */
model ObjectIntegerId {
  /** Identificador do registro (numérico). */
  id: int32;
}

/**
 * Estrutura datada.
 */
model DatedObject {
  /** Data e hora da criação do registro. */
  dateCreated: date_time;

  /** Data e hora da alteração do registro. */
  dateUpdated: date_time;

  /** Data e hora da exclusão do registro. */
  dateDeleted: date_time | null;
}
