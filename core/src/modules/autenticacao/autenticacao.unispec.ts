import { UniProvider } from '../../common';
import { AuthProvider } from './auth';
import { UsuarioProvider } from './usuario';
import { VinculoProvider } from './vinculo';

export const AutenticacaoModulesProvider = UniProvider((ctx) => {
  ctx.Add(AuthProvider);
  ctx.Add(UsuarioProvider);
  ctx.Add(VinculoProvider);
});
