import { UniRepository } from "@unispec/compiler";
import { IsUniNodeView, type IUniNode } from "@unispec/core";
import { UnispecInput, UnispecStore } from "@unispec/driver-quicktype";
import * as jetpack from "fs-jetpack";
import * as path from "node:path";
import { quicktype, type JSONSchema } from "quicktype-core";
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

class DotnetGeneratorStore extends UnispecStore {
  #completeRepository: UniRepository | null = null;

  SetCompleteRepository(repository: UniRepository) {
    this.#completeRepository = repository;
  }

  async fetch(address: string | IUniNode): Promise<JSONSchema | undefined> {
    const firstHit = await super
      .fetch(address)
      .then((data) => ({ data, err: null, success: true }))
      .catch((err) => ({ data: null, err, success: false }));

    console.log("");
    console.log("wanted dead or alive", address);

    if (!firstHit.success && this.#completeRepository) {
      try {
        const target = this.#completeRepository.GetRealTarget(address);

        if (target && IsUniNodeView(target)) {
          let fallbackCursor: IUniNode;

          if (target.opaqueType) {
            console.log(
              `--> not in repository, fallback to ${target.name} [OPAQUE]`,
            );

            fallbackCursor = target.opaqueType;
          } else {
            console.log(
              `--> not in repository, fallback to ${target.name} [FULL]`,
            );

            fallbackCursor = target.type;
          }

          const fallbackTarget =
            this.#completeRepository.GetRealTarget(fallbackCursor);

          if (fallbackTarget) {
            const jsonSchema = {
              ...this.generator.compiler.HandleView(target),
              ...this.generator.Compile(fallbackTarget),
            };

            return jsonSchema;
          }
        }
      } catch (e) {}
    }

    return Promise.reject(firstHit.err);
  }
}

export class DotnetGenerator extends BaseGenerator {
  async generate() {
    const allModulesRepository = new UniRepository(ModulesProvider);

    for (const project of projects) {
      const store = new DotnetGeneratorStore(project.repository);
      store.SetCompleteRepository(allModulesRepository);

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
