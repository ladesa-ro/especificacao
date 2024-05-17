import { UniProvider } from '../../common';
import { AulaProvider } from './aula';
import { CalendarioLetivoProvider } from './calendario-letivo';
import { DiaCalendarioProvider } from './dia-calendario';
import { EtapaProvider } from './etapa';
import { IntervaloDeTempoProvider } from './intervalo-de-tempo';

export const CalendarioModulesProvider = UniProvider((ctx) => {
  ctx.Add(IntervaloDeTempoProvider);
  ctx.Add(CalendarioLetivoProvider);
  ctx.Add(DiaCalendarioProvider);
  ctx.Add(EtapaProvider);
  ctx.Add(AulaProvider);
});
