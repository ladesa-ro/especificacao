import { UnispecInput } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import { ModulesProvider } from "../../core/src";

const PATH_INTEGRATIONS = path.join(__dirname, "../../integrations");
const PATH_INTEGRATIONS_DOTNET = path.join(PATH_INTEGRATIONS, "dotnet");

const CSharpOptions = {
  namespace: "Ladesa.Ambientes.Dtos",
  filename: "Ladesa.Ambientes.Dtos.cs",
  framework: Framework.SystemTextJson,
  projectPath: path.join(PATH_INTEGRATIONS_DOTNET, "Ladesa.Ambientes.Dtos"),
};

async function genCSharp() {
  const inputData =
    await UnispecInput.GetInputDataFromEntryPoint(ModulesProvider);

  const output = await quicktype({
    inputData,

    lang: "csharp",

    rendererOptions: {
      framework: CSharpOptions.framework,
      namespace: CSharpOptions.namespace,
    },
  });

  jetpack.dir(CSharpOptions.projectPath);

  const lines = output.lines.join("\n");
  jetpack.write(
    `${CSharpOptions.projectPath}/${CSharpOptions.filename}`,
    lines,
  );
}

async function main() {
  await genCSharp();
  process.exit(0);
}

main();
