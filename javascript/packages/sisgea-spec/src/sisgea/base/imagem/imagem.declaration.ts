import * as Spec from '@/index';

export type IImagemModel = {
  id: string;
  //
  descricao: string | null;
  //
  imagemArquivo: Spec.IImagemArquivoModel[];
  //
  dateCreated: Spec.IEntityDate;
  dateUpdated: Spec.IEntityDate;
  dateDeleted: Spec.IEntityDate | null;
};

export const ImagemDeclarationFactory: ImagemDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Imagem',

    properties: {
      //
      ...Spec.GetDeclarationProperties(Spec.ObjectUuidDeclarationFactory),
      //

      descricao: {
        nullable: true,
        type: Spec.PropertyTypes.STRING,
        description: 'Descrição da imagem.',
      },

      imagemArquivo: {
        arrayOf: true,
        nullable: false,
        type: Spec.ImagemArquivoDeclarationFactory,
        description: 'Descrição da imagem.',
      },

      ...Spec.GetDeclarationProperties(Spec.DatedObjectDeclarationFactory),
    },
  } satisfies Spec.IEntityDeclarationRaw<IImagemModel>;
});

export type ImagemDeclarationFactory = Spec.IDeclaredEntity<IImagemModel>;
