import { UnispecInput } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import { ModulesProvider } from "../../../core/dist";

const PATH_INTEGRATIONS = path.join(__dirname, "../../../integrations");
const PATH_INTEGRATIONS_DOTNET = path.join(PATH_INTEGRATIONS, "dotnet");

async function genCSharp() {
  const inputData = await UnispecInput.GetInputDataFromEntryPoint(ModulesProvider);

  const output = await quicktype({
    inputData,
    lang: "csharp",

    rendererOptions: {
      framework: Framework.SystemTextJson,
      namespace: "Sisgea.Spec.Dtos",
    },
  });

  jetpack.dir("out");
  jetpack.write(`${PATH_INTEGRATIONS_DOTNET}/Sisgea.Spec.Dtos/Sisgea.Spec.Dtos.cs`, output.lines.join("\n"));
}

async function main() {
  await genCSharp();
  process.exit(0);
}

main();
