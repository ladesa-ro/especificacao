import { SharedModuleProvider } from "./-shared";
import { LazyModule } from "./-shared/common/LazyModule";
import { AmbientesModulesProvider } from "./ambientes";
import { AutenticacaoModulesProvider } from "./autenticacao";
import { BaseModuleProvider } from "./base";
import { CalendarioModulesProvider } from "./calendario";
import { EnsinoModulesProvider } from "./ensino";
import { HorariosModuleProvider } from "./horarios";

export const ModulesProvider = LazyModule({
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
