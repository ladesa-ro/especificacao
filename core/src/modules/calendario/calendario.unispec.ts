import { UniProvider } from '../../common';
import { AulaProvider } from './aula';

export const CalendarioModulesProvider = UniProvider((ctx) => {
  ctx.Add(AulaProvider);
});
