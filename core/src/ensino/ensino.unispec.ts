import { BuildModule } from "@unispec/ast-builder";
import { CursoProvider } from "./curso";
import { DiarioProvider } from "./diario";
import { DiarioProfessorProvider } from "./diario-professor";
import { DisciplinaProvider } from "./disciplina";
import { ModalidadeProvider } from "./modalidade";
import { TurmaProvider } from "./turma";

export const EnsinoModulesProvider = BuildModule({
  nodes: [CursoProvider, DiarioProvider, DiarioProfessorProvider, ModalidadeProvider, DisciplinaProvider, TurmaProvider],
});
