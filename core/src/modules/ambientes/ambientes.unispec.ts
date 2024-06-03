import { U } from "@unispec/core";
import { AmbienteProvider } from "./ambiente";
import { BlocoProvider } from "./bloco";
import { CampusProvider } from "./campus";
import { CidadeProvider } from "./cidade";
import { EnderecoProvider } from "./endereco";
import { EstadoProvider } from "./estado";
import { ReservaProvider } from "./reserva";

export const AmbientesModulesProvider = U.Provider((ctx) => {
  ctx.Add(AmbienteProvider);
  ctx.Add(BlocoProvider);
  ctx.Add(CampusProvider);
  ctx.Add(CidadeProvider);
  ctx.Add(EnderecoProvider);
  ctx.Add(EstadoProvider);
  ctx.Add(ReservaProvider);
});
