import { BuildModule } from "@unispec/ast-builder";
import { AuthProvider } from "./auth";
import { UsuarioProvider } from "./usuario";
import { VinculoProvider } from "./vinculo";

export const AutenticacaoModulesProvider = BuildModule({
  nodes: [AuthProvider, UsuarioProvider, VinculoProvider],
});
