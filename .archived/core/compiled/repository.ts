import type { IUniNode } from "@unispec/ast-types";
import { UniRepository } from "@unispec/ast-utils";

let repositoryPromise: null | Promise<UniRepository> = null;

const getCount = (iterable: Iterable<any>) => Array.from(iterable).length;

export const fetchRepository = async () => {
  const nodes = await import("./compiled.json").then((mod: any) => mod.default as IUniNode[]);

  const repository = new UniRepository(nodes, true);

  console.log(`[\\\\fetch compiled nodes]: Nós top-level: ${getCount(nodes)}.`);

  return repository;
};

export const getRepository = async () => {
  if (repositoryPromise === null) {
    repositoryPromise = fetchRepository();
  }

  return await repositoryPromise;
};
