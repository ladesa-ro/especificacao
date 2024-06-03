import { U } from "@unispec/core";
import { ArquivoProvider } from "./arquivo";
import { ImagemProvider } from "./imagem";
import { ImagemArquivoProvider } from "./imagem-arquivo";

export const BaseModuleProvider = U.Provider((ctx) => {
  ctx.Add(ArquivoProvider);
  ctx.Add(ImagemProvider);
  ctx.Add(ImagemArquivoProvider);
});
