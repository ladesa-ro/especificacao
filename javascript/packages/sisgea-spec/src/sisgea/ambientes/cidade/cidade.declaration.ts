import * as Spec from '@/index';

export type ICidadeModel = Spec.InferFactoryEntityType<typeof CidadeDeclarationFactory, Spec.IOutputDeclarationModes['OUTPUT']>;

export const CidadeDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Cidade',

    properties: {
      //
      id: {
        nullable: false,
        type: Spec.PropertyTypes.INTEGER,
        description: 'ID IBGE da Cidade.',
      },
      //

      nome: {
        nullable: false,
        type: Spec.PropertyTypes.STRING,
        description: 'Nome oficial da Cidade.',
      },

      estado: {
        nullable: false,
        type: Spec.EstadoDeclarationFactory,
        description: 'Estado da Cidade.',
      },
    },
  };
});
