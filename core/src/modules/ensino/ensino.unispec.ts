import { U } from "@unispec/core";
import { CursoProvider } from "./curso";
import { DiarioProvider } from "./diario";
import { DiarioProfessorProvider } from "./diario-professor";
import { DisciplinaProvider } from "./disciplina";
import { ModalidadeProvider } from "./modalidade";
import { TurmaProvider } from "./turma";

export const EnsinoModulesProvider = U.Provider((ctx) => {
  ctx.Add(CursoProvider);
  ctx.Add(DiarioProvider);
  ctx.Add(DiarioProfessorProvider);
  ctx.Add(ModalidadeProvider);
  ctx.Add(DisciplinaProvider);
  ctx.Add(TurmaProvider);
});
