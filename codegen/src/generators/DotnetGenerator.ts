import { UniRepository } from "@unispec/compiler";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import { ModulesProvider } from "../../../core/dist";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (projectNamespace: string, projectRepository: UniRepository) => ({
  repository: projectRepository,

  namespace: projectNamespace,
  filename: `${projectNamespace}.cs`,

  projectPath: path.join(paths.workspace.integrations.dotnet, `${projectNamespace}`),
});

const projects = [project("Ladesa.Dtos", new UniRepository(ModulesProvider))];

export class DotnetGenerator extends BaseGenerator {
  async generate() {
    for (const project of projects) {
      const store = new UnispecStore(project.repository);

      const input = new UnispecInput(store);
      await input.AddFromEntryPoint(project.repository);

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
  }
}
