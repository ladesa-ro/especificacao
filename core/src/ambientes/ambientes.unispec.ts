import { LazyModule } from "../-shared/common/LazyModule";
import { AmbienteProvider } from "./ambiente";
import { BlocoProvider } from "./bloco";
import { CampusProvider } from "./campus";
import { CidadeProvider } from "./cidade";
import { EnderecoProvider } from "./endereco";
import { EstadoProvider } from "./estado";
import { ReservaProvider } from "./reserva";

export const AmbientesModulesProvider = LazyModule({
  nodes: [AmbienteProvider, BlocoProvider, CampusProvider, CidadeProvider, EnderecoProvider, EstadoProvider, ReservaProvider],
});
