import { LazyModule } from "../-shared/common/LazyModule";
import { TurmaDisponibilidadeProvider } from "./turma-disponibilidade";
import { TurmaDisponibilidadeDiaProvider } from "./turma-disponibilidade-dia";

export const HorariosModuleProvider = LazyModule({ nodes: [TurmaDisponibilidadeProvider, TurmaDisponibilidadeDiaProvider] });
