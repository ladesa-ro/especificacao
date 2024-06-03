import { U } from "@unispec/core";
import { TurmaDisponibilidadeProvider } from "./turma-disponibilidade";
import { TurmaDisponibilidadeDiaProvider } from "./turma-disponibilidade-dia";

export const HorariosModuleProvider = U.Provider((ctx) => {
  ctx.Add(TurmaDisponibilidadeProvider);
  ctx.Add(TurmaDisponibilidadeDiaProvider);
});
