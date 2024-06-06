import { BuildModule } from "@unispec/ast-builder";
import { SharedModuleProvider } from "./-shared";
import { AmbientesModulesProvider } from "./ambientes";
import { AutenticacaoModulesProvider } from "./autenticacao";
import { BaseModuleProvider } from "./base";
import { CalendarioModulesProvider } from "./calendario";
import { EnsinoModulesProvider } from "./ensino";
import { HorariosModuleProvider } from "./horarios";

export const ModulesProvider = BuildModule({
  nodes: [
    SharedModuleProvider,
    BaseModuleProvider,
    AutenticacaoModulesProvider,
    AmbientesModulesProvider,
    EnsinoModulesProvider,
    CalendarioModulesProvider,
    HorariosModuleProvider,
  ],
});
