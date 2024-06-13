import { LazyModule } from "../-shared/common/LazyModule";
import { CursoProvider } from "./curso";
import { DiarioProvider } from "./diario";
import { DiarioProfessorProvider } from "./diario-professor";
import { DisciplinaProvider } from "./disciplina";
import { ModalidadeProvider } from "./modalidade";
import { TurmaProvider } from "./turma";

export const EnsinoModulesProvider = LazyModule({
  nodes: [CursoProvider, DiarioProvider, DiarioProfessorProvider, ModalidadeProvider, DisciplinaProvider, TurmaProvider],
});
