import { defineBuildConfig } from "unbuild";

export default defineBuildConfig([
  // Auto preset
  {},
  // Custom preset
  {
    entries: [
      {
        builder: "copy",
        input: "../../..",
        pattern: "{LICENSE,README.md}",
        outDir: ".",
      },
    ],
  },
]);
