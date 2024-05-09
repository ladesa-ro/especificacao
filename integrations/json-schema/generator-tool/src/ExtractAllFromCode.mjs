import { writeFileSync } from "node:fs";
import { createGenerator } from "ts-json-schema-generator";

const CORE_ROOT = "../../../core";

const CORE_SRC = `${CORE_ROOT}/src`;
const CORE_SRC_SISGEA = `${CORE_SRC}/sisgea`;

const handleDefinition = (name) => {
  if (name === "*") {
    return false;
  }

  return true;
};

main();

async function main() {
  const path = `${CORE_SRC_SISGEA}/**/*.declaration.ts`;

  /** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
  const config = {
    type: "*",
    schemaId: "generated",

    path: path,
    tsconfig: `${CORE_ROOT}/tsconfig.json`,

    functions: "hide",
    discriminatorType: "json-schema",

    sortProps: true,

    additionalProperties: false,
    topRef: true,
  };

  const generator = createGenerator(config);
  const schema = generator.createSchema(config.type);

  schema.properties ||= {};

  for (const [key, def] of Object.entries(schema.definitions).filter(([key]) => handleDefinition(key))) {
    schema.properties[key] = {
      $ref: `#/definitions/${key}`,
    };

    if (def.$ref) {
      def.$ref = decodeURIComponent(def.$ref);
    }
  }

  writeFileSync("../v1/sisgea.schema.json", JSON.stringify(schema, null, 2));
}
