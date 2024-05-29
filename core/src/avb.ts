import { ITypeScriptGeneratorBuildAliasedTypeOptions, TypeScriptGenerator } from '@unispec/compiler';
import { VisitAllNodes } from '@unispec/core';
import { ModulesProvider } from './modules';

const nodesVisited: Iterable<any> = VisitAllNodes(ModulesProvider);

const typeScriptGenerator = new TypeScriptGenerator();

const buildAliasedTypesOptions: ITypeScriptGeneratorBuildAliasedTypeOptions = {
  mod: 'type',
  export: true,
};
let first = true;

for (const result of typeScriptGenerator.buildAliasedTypes(nodesVisited, buildAliasedTypesOptions)) {
  if (result.success) {
    if (first) {
      first = false;
    } else {
      console.log();
    }

    console.log(result.aliasedType?.trim());
  } else {
    console.error(result.error);
  }
}
