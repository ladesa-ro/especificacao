import * as Spec from '@/index';

export interface IImagemFindOneResultDto {
  id: Spec.IImagemModel['id'];
  descricao: Spec.IImagemModel['descricao'];
  imagemArquivo: Omit<Spec.IImagemArquivoFindOneResultDto, 'imagem'>[];
}

export const ImagemFindOneResultDeclarationFactory: ImagemFindOneResultDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'ImagemFindOneResult',
    partialOf: Spec.ImagemDeclarationFactory,

    properties: {
      ...Spec.GetDeclarationProperties(Spec.ImagemDeclarationFactory, {
        id: true,
        descricao: true,
      }),

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: Spec.ImagemArquivoFindOneByIdResultDeclaration,
        description: 'Imagem-arquivo.',
      },
    },
  } satisfies Spec.IEntityDeclarationRaw<IImagemFindOneResultDto>;
});

export type ImagemFindOneResultDeclarationFactory = Spec.IDeclaredEntity<IImagemFindOneResultDto>;
