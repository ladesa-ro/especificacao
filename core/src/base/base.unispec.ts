import { BuildModule } from "@unispec/ast-builder";
import { ArquivoProvider } from "./arquivo";
import { ImagemProvider } from "./imagem";
import { ImagemArquivoProvider } from "./imagem-arquivo";

export const BaseModuleProvider = BuildModule({ nodes: [ArquivoProvider, ImagemProvider, ImagemArquivoProvider] });
