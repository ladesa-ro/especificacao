import PQueue from "p-queue";
import { DotnetGenerator, NpmGenerator } from "./generators";

async function main() {
  const queue = new PQueue({ concurrency: 5 });

  queue.on("error", (error) => {
    console.log({ error });
  });

  queue.add(() => {
    const dotnetGenerator = new DotnetGenerator();
    return dotnetGenerator.generate();
  });

  queue.add(() => {
    const npmGenerator = new NpmGenerator();
    return npmGenerator.generate();
  });

  await queue.onIdle();

  process.exit(0);
}

main();
