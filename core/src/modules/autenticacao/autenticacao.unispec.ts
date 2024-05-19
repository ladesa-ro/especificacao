import { U } from '@unispec/core';
import { AuthProvider } from './auth';
import { UsuarioProvider } from './usuario';
import { VinculoProvider } from './vinculo';

export const AutenticacaoModulesProvider = U.Provider((ctx) => {
  ctx.Add(AuthProvider);
  ctx.Add(UsuarioProvider);
  ctx.Add(VinculoProvider);
});
