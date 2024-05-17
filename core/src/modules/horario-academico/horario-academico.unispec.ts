import { UniProvider } from '../../common';
import { TurmaDisponibilidadeProvider } from './turma-disponibilidade';

export const HorarioAcademicoModulesProvider = UniProvider((ctx) => {
  ctx.Add(TurmaDisponibilidadeProvider);
});
