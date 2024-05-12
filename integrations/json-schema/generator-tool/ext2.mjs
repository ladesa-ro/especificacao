import * as ChangeCase from "change-case";
import jetpack from "fs-jetpack";
import { glob } from "glob";
import * as path from "path";

const CORE_ROOT = "../../../core";

const CORE_DIST = `${CORE_ROOT}/dist`;
const CORE_DIST_SISGEA = `${CORE_DIST}/sisgea`;

const DECLARATIONS_PATTERN = "**/*.declaration.js";

const declarationsFiles = await glob(DECLARATIONS_PATTERN, { cwd: CORE_DIST_SISGEA });

jetpack.remove("generated");
jetpack.dir("generated");

for (const declarationFile of declarationsFiles) {
  const declarationFilePath = path.join(CORE_DIST_SISGEA, declarationFile);

  const declarationFileModule = await import(declarationFilePath);

  for (const [exportedAs, exportedValue] of Object.entries(declarationFileModule)) {
    if (typeof exportedValue === "function") {
      const declaration = exportedValue();

      const name = declaration.name;

      const specUriRes = `${path.dirname(declarationFile)}/${ChangeCase.kebabCase(declaration.name)}`;

      const $id = `sisgea/spec/${specUriRes}`;
      const properties = declaration.properties;

      const specPath = `${specUriRes}.schema.json`;

      const schema = {
        $id: $id,
        title: name,
        type: "object",
        properties: {
          allOf: [properties],
        },
        required: Object.keys(declaration.properties).filter((key) => declaration.properties[key].required !== false),
        additionalProperties: false,
      };

      // console.log(JSON.stringify({ path: specPath, schema: schema }, null, 2));

      jetpack.write(`generated/${specUriRes}.json`, schema, { jsonIndent: 2 });
    }
  }
}
