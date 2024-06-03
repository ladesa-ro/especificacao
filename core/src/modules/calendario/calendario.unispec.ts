import { U } from "@unispec/core";
import { AulaProvider } from "./aula";
import { CalendarioLetivoProvider } from "./calendario-letivo";
import { DiaCalendarioProvider } from "./dia-calendario";
import { EtapaProvider } from "./etapa";
import { EventoProvider } from "./evento";
import { IntervaloDeTempoProvider } from "./intervalo-de-tempo";

export const CalendarioModulesProvider = U.Provider((ctx) => {
  ctx.Add(IntervaloDeTempoProvider);
  ctx.Add(CalendarioLetivoProvider);
  ctx.Add(DiaCalendarioProvider);
  ctx.Add(EtapaProvider);
  ctx.Add(AulaProvider);
  ctx.Add(EventoProvider);
});
