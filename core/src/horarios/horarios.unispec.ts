import { BuildModule } from "@unispec/ast-builder";
import { TurmaDisponibilidadeProvider } from "./turma-disponibilidade";
import { TurmaDisponibilidadeDiaProvider } from "./turma-disponibilidade-dia";

export const HorariosModuleProvider = BuildModule({ nodes: [TurmaDisponibilidadeProvider, TurmaDisponibilidadeDiaProvider] });
