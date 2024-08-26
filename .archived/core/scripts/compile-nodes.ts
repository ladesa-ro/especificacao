#!/usr/bin/env tsx

import { CheckOperation, CheckView } from "@unispec/ast-builder";
import { UniRepository } from "@unispec/ast-utils";
import indentString from "indent-string";
import { createWriteStream } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as winston from "winston";

const paths = {
  get cwd() {
    return process.cwd();
  },

  relativeToUser(targetPath: string) {
    return path.relative(paths.cwd, targetPath);
  },

  get here() {
    return path.dirname(fileURLToPath(import.meta.url));
  },

  pkg: {
    get dir() {
      return path.join(paths.here, "..");
    },

    compiled: {
      get dir() {
        return path.join(paths.pkg.dir, "compiled");
      },

      files: {
        get ["compiled.json"]() {
          return path.join(paths.pkg.compiled.dir, "compiled.json");
        },
      },
    },
  },
};

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    //

    winston.format.timestamp(),
    winston.format.prettyPrint(),
    winston.format.simple(),
  ),
  defaultMeta: {},
  transports: [new winston.transports.Console()],
});

const generateExposedNodes = async function* (parentLogger: winston.Logger, parentContext = "") {
  const context = `${parentContext} [generateExposedNodes]`.trim();

  const logger = parentLogger.child({});

  logger.debug(`${context} Iniciando importação de ModulesProvider...`);
  const { ModulesProvider } = await import("../src");
  logger.info("ModulesProvider importado.");

  logger.debug(`${context} Iniciando criação do repositório de nós....`);
  const repository = new UniRepository(ModulesProvider);
  logger.info("Repositório de nós criado.");

  logger.debug(`${context} Iniciando iteração entre nós do repositório.`);

  for (const node of repository.Nodes) {
    if (CheckView(node) || CheckOperation(node)) {
      yield node;
    }
  }

  console.log(`${context} Iteração concluída.`);
};

async function main() {
  const context = "[main]";

  const mainLogger = logger.child({});

  mainLogger.info(`${context} Iniciando Gerador...`, {});

  const targetOutputFilePath = paths.pkg.compiled.files["compiled.json"];

  mainLogger.info(`${context} Abrindo stream de escrita para o arquivo '${paths.relativeToUser(targetOutputFilePath)}'`);
  const stream = createWriteStream(targetOutputFilePath);

  stream.write("[");

  let first = true;

  mainLogger.info(`${context} Iniciando iteração entre nós...`);

  for await (const node of generateExposedNodes(mainLogger, context)) {
    if (first) {
      first = false;
    } else {
      stream.write(",");
    }

    stream.write("\n");

    mainLogger.debug(`[main] Escrevendo nó ${node.name}`);
    stream.write(indentString(JSON.stringify(node, null, 2), 2));
  }
  stream.write("\n");

  mainLogger.info("[main] Iteração concluída.");

  stream.write("]");

  stream.close();
}

await main();
