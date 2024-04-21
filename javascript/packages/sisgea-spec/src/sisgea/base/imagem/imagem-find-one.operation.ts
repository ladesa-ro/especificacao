import * as Spec from '@/index';

export interface IImagemFindOneResultDto {
  id: Spec.IImagemModel['id'];
  //
  descricao: Spec.IImagemModel['descricao'];
  //
  imagemArquivo: Omit<Spec.IImagemArquivoFindOneResultDto, 'imagem'>[];
  //
  dateCreated: Spec.IImagemModel['dateCreated'];
  dateUpdated: Spec.IImagemModel['dateUpdated'];
  dateDeleted: Spec.IImagemModel['dateDeleted'] | null;
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

      ...Spec.GetDeclarationProperties(Spec.ImagemDeclarationFactory, {
        dateCreated: true,
        dateUpdated: true,
        dateDeleted: true,
      }),
    },
  } satisfies Spec.IEntityDeclarationRaw<IImagemFindOneResultDto>;
});

export type ImagemFindOneResultDeclarationFactory = Spec.IDeclaredEntity<IImagemFindOneResultDto>;
