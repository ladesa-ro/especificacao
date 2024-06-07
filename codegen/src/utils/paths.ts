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

          generated: {
            get dir() {
              return path.join(paths.workspace.integrations.npm.especificacao.src, `generated`);
            },

            files: {
              get ["types.ts"]() {
                return path.join(paths.workspace.integrations.npm.especificacao.generated.dir, `types.ts`);
              },

              get ["nodes.ts"]() {
                return path.join(paths.workspace.integrations.npm.especificacao.generated.dir, `nodes.ts`);
              },

              get ["tokens.ts"]() {
                return path.join(paths.workspace.integrations.npm.especificacao.generated.dir, `tokens.ts`);
              },
            },
          },
        },
      },
    },
  },
};
