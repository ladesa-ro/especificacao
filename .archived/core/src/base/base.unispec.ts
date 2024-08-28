import { LazyModule } from "../-shared/common/LazyModule";
import { ArquivoProvider } from "./arquivo";
import { ImagemProvider } from "./imagem";
import { ImagemArquivoProvider } from "./imagem-arquivo";

export const BaseModuleProvider = LazyModule({
  //
  nodes: [
    //
    ArquivoProvider,
    ImagemProvider,
    ImagemArquivoProvider,
  ],
});
