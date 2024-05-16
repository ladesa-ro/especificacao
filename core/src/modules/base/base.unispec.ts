import { UniProvider } from '../../common';
import { ArquivoProvider } from './arquivo';
import { ImagemProvider } from './imagem';
import { ImagemArquivoProvider } from './imagem-arquivo';

export const BaseModuleProvider = UniProvider((ctx) => {
  ctx.Add(ArquivoProvider);
  ctx.Add(ImagemProvider);
  ctx.Add(ImagemArquivoProvider);
});
