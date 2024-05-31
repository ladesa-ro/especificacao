import { AllNodesVisitor, JsonSchemaGenerator } from "@unispec/compiler";
import { IsUniNodeView } from "@unispec/core";
import * as fs from "node:fs";
import { FetchingJSONSchemaStore, InputData, JSONSchemaInput, quicktype } from "quicktype-core";
import { ModulesProvider } from "../core";

async function main() {
  const generator = new JsonSchemaGenerator();
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  const nodes: Iterable<any> = AllNodesVisitor.VisitAll(ModulesProvider);

  for (const node of nodes) {
    if (IsUniNodeView(node)) {
      const jsonSchemaType = generator.Compile(node);
      const jsonSchemaTypeAsString = JSON.stringify(jsonSchemaType, null, 2);

      await schemaInput.addSource({ name: node.name, schema: jsonSchemaTypeAsString });
    }
  }

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  const output = await quicktype({
    inputData,
    lang: "csharp",
  });

  fs.writeFileSync("Sisgha.Dtos.cs", output.lines.join("\n"));

  // console.log(lines.join("\n"));
}

main();
