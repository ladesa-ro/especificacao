import { UniRepository } from "@unispec/ast-utils";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import { getRepository } from "../../../core/compiled/repository";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (projectNamespace: string, getRepository: () => Promise<UniRepository>) => ({
  getRepository: getRepository,

  namespace: projectNamespace,
  filename: `${projectNamespace}.cs`,

  projectPath: path.join(paths.workspace.integrations.dotnet, `${projectNamespace}`),
});

export class DotnetGenerator extends BaseGenerator {
  async generate() {
    console.log("[dotnet] iniciado o processo de geração de código.");

    const projects = [
      //
      project("Ladesa.Dtos", getRepository),
    ];

    for (const project of projects) {
      const repository = await project.getRepository();

      const store = new UnispecStore(repository);

      const input = new UnispecInput(store);
      await input.AddFromEntryPoint(repository);

      const inputData = input.GetInputData();

      const output = await quicktype({
        inputData,

        lang: "csharp",

        rendererOptions: {
          namespace: project.namespace,
          framework: Framework.SystemTextJson,
        },
      });

      jetpack.dir(project.projectPath);

      const lines = output.lines.join("\n");
      jetpack.write(`${project.projectPath}/${project.filename}`, lines);
    }

    console.log("[dotnet] código gerado com sucesso.");
  }
}
