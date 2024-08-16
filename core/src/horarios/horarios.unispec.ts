import { LazyModule } from "../-shared/common/LazyModule";
import { DiarioPreferenciaAgrupamentoProvider } from "./diario-preferencia-agrupamento";
import { DisponibilidadeProfessorProvider } from "./disponibilidade-professor";
import { DisponibilidadeProfessorDiaProvider } from "./disponibilidade-professor-dia";
import { HorarioGeradoProvider } from "./horario-gerado";
import { HorarioGeradoAulaProvider } from "./horario-gerado-aula";
import { TurmaDisponibilidadeProvider } from "./turma-disponibilidade";
import { TurmaDisponibilidadeDiaProvider } from "./turma-disponibilidade-dia";

export const HorariosModuleProvider = LazyModule({
  nodes: [
    TurmaDisponibilidadeProvider,
    TurmaDisponibilidadeDiaProvider,
    DiarioPreferenciaAgrupamentoProvider,
    DisponibilidadeProfessorProvider,
    DisponibilidadeProfessorDiaProvider,
    HorarioGeradoProvider,
    HorarioGeradoAulaProvider,
  ],
});
