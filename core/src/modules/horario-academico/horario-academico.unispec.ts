import { UniProvider } from '../../common';
import { TurmaDisponibilidadeProvider } from './turma-disponibilidade';
import { TurmaDisponibilidadeDiaProvider } from './turma-disponibilidade-dia';

export const HorarioAcademicoModulesProvider = UniProvider((ctx) => {
  ctx.Add(TurmaDisponibilidadeProvider);
  ctx.Add(TurmaDisponibilidadeDiaProvider);
});
