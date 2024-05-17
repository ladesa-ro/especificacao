import { UniProvider } from '../../common';
import { AulaProvider } from './aula';
import { IntervaloDeTempoProvider } from './intervalo-de-tempo';

export const CalendarioModulesProvider = UniProvider((ctx) => {
  ctx.Add(IntervaloDeTempoProvider);
  ctx.Add(AulaProvider);
});
