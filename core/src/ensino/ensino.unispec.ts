import { LazyModule } from "../-shared/common/LazyModule";
import { CursoProvider } from "./curso";
import { DisciplinaProvider } from "./disciplina";
import { ModalidadeProvider } from "./modalidade";
import { TurmaProvider } from "./turma";

export const EnsinoModulesProvider = LazyModule({
  nodes: [
    //
    CursoProvider,
    ModalidadeProvider,
    DisciplinaProvider,
    TurmaProvider,
  ],
});
