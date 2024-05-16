import { UniProvider } from '../common';
import { SharedModuleProvider } from './-shared/-shared.unispec';
import { AmbientesModuleProvider } from './ambientes/ambientes.unispec';
import { AutenticacaoModulesProvider } from './autenticacao/autenticacao.unispec';
import { BaseModuleProvider } from './base/base.unispec';

export const ModulesProvider = UniProvider((ctx) => {
  ctx.Add(SharedModuleProvider);
  ctx.Add(BaseModuleProvider);
  ctx.Add(AmbientesModuleProvider);
  ctx.Add(AutenticacaoModulesProvider);
});
