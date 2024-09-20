import { UniRepository } from "@unispec/ast-utils";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import { quicktype } from "quicktype-core";
import { getRepository } from "../../../core/compiled/repository";
import { getTokens } from "../../../core/compiled/tokens";
import { paths } from "../utils/paths";
import { BaseGenerator } from "./BaseGenerator";

const project = (getTokens: () => Promise<any>, getRepository: () => Promise<UniRepository>) => ({
  getTokens: getTokens,
  getRepository: getRepository,

  nodesFilename: paths.workspace.integrations.npm.especificacao.generated.files["nodes.ts"],
  typesFilename: paths.workspace.integrations.npm.especificacao.generated.files["types.ts"],
  tokensFilename: paths.workspace.integrations.npm.especificacao.generated.files["tokens.ts"],
});

export class NpmGenerator extends BaseGenerator {
  async generate() {
    console.log("[npm] iniciado o processo de geração de código.");

    const projects = [
      //
      project(getTokens, getRepository),
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

        const lines = output.lines.join("\n");
        jetpack.write(`${project.typesFilename}`, lines);
      }

      {
        const { format } = await import("prettier");

        const nodes = Array.from(repository.Nodes);

        const stringifiedNodes = JSON.stringify(nodes, null, 2);

        const sourceRaw = `import type { IUniNode } from "@unispec/ast-types";

        export const Nodes: IUniNode[] = ${stringifiedNodes} as any[];`;

        const source = await format(sourceRaw, { semi: false, parser: "typescript" });

        jetpack.write(`${project.nodesFilename}`, source);
      }

      {
        const { format } = await import("prettier");

        const tokens = await project.getTokens();

        const stringifiedNodes = JSON.stringify(tokens, null, 2);

        const sourceRaw = `export const Tokens = ${stringifiedNodes} as const;`;

        const source = await format(sourceRaw, { semi: false, parser: "typescript" });

        jetpack.write(`${project.tokensFilename}`, source);
      }
    }

    console.log("[npm] código gerado com sucesso.");
  }
}
