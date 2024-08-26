import { CheckOperation } from "@unispec/ast-builder";
import type { IUniNode, IUniNodeModule } from "@unispec/ast-types";
import { CompileOperationViews } from "./CompileOperationViews";

export type ILazyModuleOptions = {
  nodes: Iterable<(() => IUniNode) | IUniNode>;
};

export const LazyModule = (options: ILazyModuleOptions) => {
  const getAllNodes = function* () {
    for (const providedNode of options.nodes) {
      let node: IUniNode;

      if (typeof providedNode === "function") {
        node = providedNode();
      } else {
        node = providedNode;
      }

      yield node;

      if (CheckOperation(node)) {
        yield* CompileOperationViews(node);
      }
    }
  };

  const module: IUniNodeModule = {
    kind: "module",
    get nodes() {
      return Array.from(getAllNodes());
    },
  };

  return module;
};
