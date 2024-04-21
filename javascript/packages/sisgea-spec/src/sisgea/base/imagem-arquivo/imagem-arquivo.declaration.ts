import * as Spec from '@/index';

export type IImagemArquivoModel = Spec.InferFactoryEntityType<typeof ImagemArquivoDeclarationFactory>;

export const ImagemArquivoDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'ImagemArquivo',

    properties: {
      //
      ...Spec.GetDeclarationProperties(Spec.ObjectUuidDeclarationFactory),
      //

      largura: {
        type: Spec.PropertyTypes.INTEGER,
        description: 'Largura da imagem.',
        nullable: false,
      },

      altura: {
        type: Spec.PropertyTypes.INTEGER,
        description: 'Altura da imagem.',
        nullable: false,
      },

      formato: {
        type: Spec.PropertyTypes.STRING,
        description: 'Formato da imagem.',
        nullable: false,
      },

      mimeType: {
        type: Spec.PropertyTypes.STRING,
        description: 'Mime Type da imagem.',
        nullable: false,
      },

      imagem: {
        nullable: false,
        type: Spec.ImagemDeclarationFactory,
        description: 'Imagem.',
      },

      arquivo: {
        nullable: false,
        type: Spec.ArquivoDeclarationFactory,
        description: 'Arquivo.',
      },

      dateCreated: {
        nullable: false,
        type: Spec.PropertyTypes.DATE_TIME,
        description: 'Data de criação do registro.',
      },
    },
  };
});
