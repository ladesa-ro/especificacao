import { IUniNode, TravelNode, U } from '@unispec/core';
import { ModulesProvider } from './modules';

const { nodesVisited } = TravelNode(ModulesProvider);

let c = 0;

export const ResolveNodeTypeName = (node: IUniNode) => {
  if (U.IsNodeView(node)) {
    return `I${node.name}Dto`;
  }

  if (U.IsNodeType(node)) {
    if (node.type === 'reference') {
      return `I${node.targetsTo}Dto`;
    }
  }

  return `Unnamed${++c}`;
};

export const BuildType = (node: IUniNode) => {
  let primitiveType = 'never';

  let castedNode = node;

  if (U.IsNodeView(castedNode)) {
    castedNode = U.Object({
      properties: castedNode.properties,
    });
  }

  if (U.IsNodeType(castedNode)) {
    switch (castedNode.type) {
      case 'boolean': {
        primitiveType = 'boolean';
        break;
      }

      case 'integer': {
        primitiveType = 'number';
        break;
      }

      case 'string': {
        primitiveType = 'string';

        if (castedNode.format === 'date' || castedNode.format == 'date-time') {
          primitiveType += ' | number | Date';
        }

        break;
      }

      case 'object': {
        let base = '{\n';

        const properties = { ...castedNode.properties };

        const propertiesEntries = Object.entries(properties).sort((a, b) => {
          const a_key = a[0];
          const b_key = b[0];

          if (a_key === 'id') {
            return -1;
          }

          if (b_key === 'id') {
            return 1;
          }

          const datesOrder = ['dateCreated', 'dateUpdated', 'dateDeleted'];

          if (datesOrder.includes(a_key) || datesOrder.includes(b_key)) {
            return datesOrder.indexOf(a_key) - datesOrder.indexOf(b_key);
          }

          return 0;
        });

        for (const [propertyKey, propertyDefinition] of propertiesEntries) {
          const propertyType = BuildType(propertyDefinition);

          if (propertyType === 'never') {
            continue;
          }
          let objPropertyDeclaration = '';

          if (propertyDefinition.description) {
            base += `  /** ${propertyDefinition.description} */\n`;
          }

          objPropertyDeclaration += `  ${propertyKey}: ${propertyType};\n`;

          base += objPropertyDeclaration;
        }

        base += '}';

        primitiveType = base;

        break;
      }

      case 'array': {
        const propertyType = BuildType(castedNode.items);

        primitiveType = `Array<${propertyType}>`;
        break;
      }

      case 'reference': {
        const referenceAlias = ResolveNodeTypeName(castedNode);
        primitiveType = `${referenceAlias}`;
        break;
      }

      default: {
        break;
      }
    }

    if (primitiveType === 'never') {
      return primitiveType;
    }

    if (castedNode.nullable) {
      primitiveType = `${primitiveType} | null`;
    }

    if (!castedNode.required) {
      primitiveType = `${primitiveType} | undefined`;
    }

    return primitiveType;
  }

  return primitiveType;
};

export const BuildTypeAlias = (node: IUniNode) => {
  if (U.IsNodeView(node)) {
    const typeName = ResolveNodeTypeName(node);
    return `export type ${typeName} = ${BuildType(node)};`;
  }

  return null;
};

for (const node of nodesVisited) {
  switch (node.kind) {
    case 'type':
    case 'view':
    case 'operation': {
      try {
        if (U.IsNodeView(node)) {
          console.log(BuildTypeAlias(node));
          console.log();
        }
      } catch (error) {
        console.log({ error }, JSON.stringify(node, null, 2));
      }

      break;
    }

    default: {
      break;
    }
  }
}
