import PQueue from "p-queue";
import { DotnetGenerator } from "./generators";

async function main() {
  const queue = new PQueue({ concurrency: 5 });

  queue.on("error", (error) => {
    console.log({ error });
  });

  queue.add(() => {
    const dotnetGenerator = new DotnetGenerator();
    return dotnetGenerator.generate();
  });

  await queue.onIdle();

  process.exit(0);
}

main();
