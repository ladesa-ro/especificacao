import { UniRepository } from "@unispec/ast-utils";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { ModulesProvider } from "../../../core/src";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (projectRepository: UniRepository) => ({
  repository: projectRepository,
  filename: `types.ts`,
  projectPath: path.join(paths.workspace.integrations.npm.especificacao.src, `generated`),
});

const projects = [project(new UniRepository(ModulesProvider))];

export class NpmGenerator extends BaseGenerator {
  async generate() {
    for (const project of projects) {
      const store = new UnispecStore(project.repository);

      const input = new UnispecInput(store);
      await input.AddFromEntryPoint(project.repository);

      const inputData = input.GetInputData();

      const output = await quicktype({
        inputData,
        lang: "typescript",
      });

      jetpack.dir(project.projectPath);

      const lines = output.lines.join("\n");
      jetpack.write(`${project.projectPath}/${project.filename}`, lines);
    }
  }
}
