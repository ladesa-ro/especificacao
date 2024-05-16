import { UniProvider } from '../common';
import { SharedModuleProvider } from './-shared/-shared.unispec';
import { AmbientesModuleProvider } from './ambientes/ambientes.unispec';
import { AutenticacaoModulesProvider } from './autenticacao/autenticacao.unispec';

export const ModulesProvider = UniProvider((ctx) => {
  ctx.Add(SharedModuleProvider);
  ctx.Add(AmbientesModuleProvider);
  ctx.Add(AutenticacaoModulesProvider);
});
