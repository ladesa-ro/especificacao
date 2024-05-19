import { U } from '@unispec/core';
import { SharedModuleProvider } from './-shared';
import { AmbientesModulesProvider } from './ambientes';
import { AutenticacaoModulesProvider } from './autenticacao';
import { BaseModuleProvider } from './base/base.unispec';
import { CalendarioModulesProvider } from './calendario';
import { EnsinoModulesProvider } from './ensino/ensino.unispec';
import { HorarioAcademicoModulesProvider } from './horario-academico';

export const ModulesProvider = U.Provider((ctx) => {
  ctx.Add(SharedModuleProvider);
  ctx.Add(BaseModuleProvider);
  ctx.Add(AutenticacaoModulesProvider);
  ctx.Add(AmbientesModulesProvider);
  ctx.Add(EnsinoModulesProvider);
  ctx.Add(CalendarioModulesProvider);
  ctx.Add(HorarioAcademicoModulesProvider);
});
