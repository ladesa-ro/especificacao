import * as Spec from '@/index';

export type IArquivoModel = Spec.InferFactoryEntityType<typeof ArquivoDeclarationFactory, Spec.IOutputDeclarationModes['OUTPUT']>;

export const ArquivoDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Arquivo',

    properties: {
      //
      ...Spec.GetDeclarationProperties(Spec.ObjectUuidDeclarationFactory),
      //

      nome: {
        nullable: true,
        type: Spec.PropertyTypes.STRING,
        description: 'Nome do arquivo.',
      },

      mimeType: {
        nullable: true,
        type: Spec.PropertyTypes.STRING,
        description: 'Mime-type do arquivo.',
      },

      //

      sizeBytes: {
        nullable: true,
        type: Spec.PropertyTypes.INTEGER,
        description: 'Tamanho do arquivo (em bytes).',
      },

      //

      storageType: {
        nullable: true,
        type: Spec.PropertyTypes.STRING,
        description: 'Estratégia de armazenamento do arquivo.',
      },

      //

      ...Spec.GetDeclarationProperties(Spec.DatedObjectDeclarationFactory),
    },
  };
});
