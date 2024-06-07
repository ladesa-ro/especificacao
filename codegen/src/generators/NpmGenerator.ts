import { UniRepository } from "@unispec/ast-utils";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype } from "quicktype-core";
import { getRepository } from "../../../core/compiled/repository";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (getRepository: () => Promise<UniRepository>) => ({
  getRepository: getRepository,

  nodesFilename: `nodes.ts`,
  typesFilename: `types.ts`,

  projectPath: path.join(paths.workspace.integrations.npm.especificacao.generated.dir),
});

export class NpmGenerator extends BaseGenerator {
  async generate() {
    console.log("[npm] iniciado o processo de geração de código.");

    const projects = [
      //
      project(getRepository),
    ];

    for (const project of projects) {
      const repository = await project.getRepository();

      {
        const store = new UnispecStore(repository);

        const input = new UnispecInput(store);
        await input.AddFromEntryPoint(repository);

        const inputData = input.GetInputData();

        const output = await quicktype({
          inputData,
          lang: "typescript",
        });

        jetpack.dir(project.projectPath);

        const lines = output.lines.join("\n");
        jetpack.write(`${project.projectPath}/${project.typesFilename}`, lines);
      }

      {
        const { format } = await import("prettier");

        const nodes = Array.from(repository.Nodes);

        const stringifiedNodes = JSON.stringify(nodes, null, 2);

        const sourceRaw = `import type { IUniNode } from "@unispec/ast-types";

        export const Nodes: IUniNode[] = ${stringifiedNodes} as any[];`;

        const source = await format(sourceRaw, { semi: false, parser: "typescript" });

        jetpack.write(`${project.projectPath}/${project.nodesFilename}`, source);
      }
    }

    console.log("[npm] código gerado com sucesso.");
  }
}
