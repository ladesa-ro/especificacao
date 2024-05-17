import { UniToken } from './types';

export const TravelNode = (baseNode: UniToken) => {
  const nodesVisited = new Set<UniToken>();

  const nodesToVisit = new Set<UniToken>([baseNode]);

  while (nodesToVisit.size > 0) {
    const node: UniToken = nodesToVisit.values().next().value;

    if (!nodesVisited.has(node)) {
      if (node.kind === 'provider') {
        const ctx = {
          Add(node: UniToken) {
            nodesToVisit.add(node);
            return ctx;
          },
        };

        node.fn(ctx);
      }

      nodesVisited.add(node);
    }

    nodesToVisit.delete(node);
  }

  return { nodesVisited: Array.from(nodesVisited) };
};
