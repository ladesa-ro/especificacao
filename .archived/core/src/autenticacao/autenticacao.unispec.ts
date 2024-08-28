import { LazyModule } from "../-shared/common/LazyModule";
import { AuthProvider } from "./auth";
import { UsuarioProvider } from "./usuario";
import { VinculoProvider } from "./vinculo";

export const AutenticacaoModulesProvider = LazyModule({
  nodes: [AuthProvider, UsuarioProvider, VinculoProvider],
});
