import { UniRepository } from "@unispec/compiler";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { Framework } from "quicktype-core/dist/language/CSharp/language";
import {
  AmbientesModulesProvider,
  HorariosModuleProvider,
  ModulesProvider,
} from "../../../core/dist";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (
  projectNamespace: string,
  projectRepository: UniRepository,
) => ({
  repository: projectRepository,

  namespace: projectNamespace,
  filename: `${projectNamespace}.cs`,

  projectPath: path.join(
    paths.workspace.integrations.dotnet,
    `${projectNamespace}`,
  ),
});

const projects = [
  project("Ladesa.Ambientes.Dtos", new UniRepository(AmbientesModulesProvider)),
  project("Ladesa.Horarios.Dtos", new UniRepository(HorariosModuleProvider)),
];

export class DotnetGenerator extends BaseGenerator {
  async generate() {
    const store = await UnispecStore.FromEntrypoint(ModulesProvider);

    for (const project of projects) {
      const input = new UnispecInput(store);

      await input.AddFromEntryPoint(project.repository.getNodes());

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
