import { UniProvider } from '../../common';
import { CursoProvider } from './curso';
import { DiarioProvider } from './diario';
import { DisciplinaProvider } from './disciplina';
import { ModalidadeProvider } from './modalidade';
import { TurmaProvider } from './turma';

export const EnsinoModulesProvider = UniProvider((ctx) => {
  ctx.Add(CursoProvider);
  ctx.Add(DiarioProvider);
  ctx.Add(ModalidadeProvider);
  ctx.Add(DisciplinaProvider);
  ctx.Add(TurmaProvider);
});
