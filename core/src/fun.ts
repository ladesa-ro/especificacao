import { Traveler } from './common/unispec/Traveler';
import { ModulesProvider } from './modules';

const { nodesVisited } = Traveler(ModulesProvider);

console.log(JSON.stringify(nodesVisited, null, 2));
