import { UnispecInput } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import { ModulesProvider } from "../core";

async function main() {
  const inputData = await UnispecInput.GetInputDataFromEntryPoint(ModulesProvider);

  const output = await quicktype({
    inputData,
    lang: "csharp",

    rendererOptions: {
      framework: Framework.SystemTextJson,
      namespace: "Sisgha.Dtos",
    },
  });

  jetpack.dir("out");
  jetpack.write("out/Sisgha.Dtos.cs", output.lines.join("\n"));
}

main();
