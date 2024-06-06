import { BuildModule } from "@unispec/ast-builder";
import { AmbienteProvider } from "./ambiente";
import { BlocoProvider } from "./bloco";
import { CampusProvider } from "./campus";
import { CidadeProvider } from "./cidade";
import { EnderecoProvider } from "./endereco";
import { EstadoProvider } from "./estado";
import { ReservaProvider } from "./reserva";

export const AmbientesModulesProvider = BuildModule({
  nodes: [AmbienteProvider, BlocoProvider, CampusProvider, CidadeProvider, EnderecoProvider, EstadoProvider, ReservaProvider],
});
