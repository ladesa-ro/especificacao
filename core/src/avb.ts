import { ITypeScriptGeneratorBuildAliasedTypeOptions, TravelNode, TypeScriptGenerator } from '@unispec/core';
import { ModulesProvider } from './modules';

const { nodesVisited } = TravelNode(ModulesProvider);

const typeScriptGenerator = new TypeScriptGenerator();

const buildAliasedTypesOptions: ITypeScriptGeneratorBuildAliasedTypeOptions = {
  mod: 'type',
  export: true,
};

for (const result of typeScriptGenerator.buildAliasedTypes(nodesVisited, buildAliasedTypesOptions)) {
  if (result.success) {
    console.log();
    console.log(result.aliasedType);
  } else {
    console.error(result.error);
  }
}
