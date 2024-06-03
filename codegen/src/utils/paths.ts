import * as path from "node:path";

const here = __dirname;

export const paths = {
  workspace: {
    get dir() {
      return path.join(here, "../../..");
    },

    integrations: {
      get dir() {
        return path.join(paths.workspace.dir, "integrations");
      },

      get dotnet() {
        return path.join(paths.workspace.integrations.dir, "dotnet");
      },

      npm: {
        get dir() {
          return path.join(paths.workspace.integrations.dir, "npm");
        },

        especificacao: {
          get dir() {
            return path.join(paths.workspace.integrations.npm.dir, "ladesa-especificacao");
          },

          get src() {
            return path.join(paths.workspace.integrations.npm.especificacao.dir, "src");
          },
        },
      },
    },
  },
};
