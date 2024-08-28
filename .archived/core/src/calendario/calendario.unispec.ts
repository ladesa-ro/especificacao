import { LazyModule } from "../-shared/common/LazyModule";
import { AulaProvider } from "./aula";
import { CalendarioLetivoProvider } from "./calendario-letivo";
import { DiaCalendarioProvider } from "./dia-calendario";
import { DiarioProvider } from "./diario";
import { DiarioProfessorProvider } from "./diario-professor";
import { EtapaProvider } from "./etapa";
import { EventoProvider } from "./evento";
import { IntervaloDeTempoProvider } from "./intervalo-de-tempo";

export const CalendarioModulesProvider = LazyModule({
  nodes: [
    //
    IntervaloDeTempoProvider,
    CalendarioLetivoProvider,
    DiarioProvider,
    DiarioProfessorProvider,
    DiaCalendarioProvider,
    EtapaProvider,
    AulaProvider,
    EventoProvider,
  ],
});
