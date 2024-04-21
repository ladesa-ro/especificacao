import { DeclareEntity, GetDeclarationProperties, IDeclaredEntity, IEntityDeclarationRaw } from '@/helpers';
import { IImagemModel, ImagemDeclarationFactory } from './imagem.declaration';
import { IImagemArquivoFindOneResultDto, ImagemArquivoFindOneByIdResultDeclaration } from '../imagem-arquivo';

export interface IImagemFindOneResultDto {
  id: IImagemModel['id'];
  descricao: IImagemModel['descricao'];
  imagemArquivo: Omit<IImagemArquivoFindOneResultDto, 'imagem'>[];
}

export const ImagemFindOneResultDeclarationFactory: ImagemFindOneResultDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'ImagemFindOneResult',

    properties: {
      ...GetDeclarationProperties(ImagemDeclarationFactory, {
        id: true,
        descricao: true,
      }),

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: ImagemArquivoFindOneByIdResultDeclaration,
        description: 'Imagem-arquivo.',
      },
    },
  } satisfies IEntityDeclarationRaw<IImagemFindOneResultDto>;
});

export type ImagemFindOneResultDeclarationFactory = IDeclaredEntity<IImagemFindOneResultDto>;
