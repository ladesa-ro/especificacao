import "@typespec/json-schema";

using TypeSpec.JsonSchema;

@jsonSchema
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

/**
 * Estrutura identificada por id no formato uuid.
 */
model ObjectUuid {
  /** Identificador do registro. */
  id: uuid;
}

/**
 * Estrutura identificada por id no formato uuid.
 */
model ObjectIntegerId {
  /** Identificador do registro. */
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
