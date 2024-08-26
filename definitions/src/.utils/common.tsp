import "@typespec/json-schema";

using TypeSpec.JsonSchema;

@jsonSchema
namespace Ladesa.Schemas;

@format("uuid")
scalar uuid extends string;

/** Estrutura identificada por id no formato uuid. */
model ObjectUuid {
  /** Identificador do registro. */
  id: uuid;
}

/** Estrutura datada. */
model DatedObject {
  /** Data e hora da criação do registro. */
  @format("date-time")
  dateCreated: string;

  /** Data e hora da alteração do registro. */
  @format("date-time")
  dateUpdated: string;

  /** Data e hora da exclusão do registro. */
  @format("date-time")
  dateDeleted: string | null;
}
