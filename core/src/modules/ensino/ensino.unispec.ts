import { UniProvider } from '../../common';
import { CursoProvider } from './curso';

export const EnsinoModulesProvider = UniProvider((ctx) => {
  ctx.Add(CursoProvider);
});
