import * as Spec from '@/index';

export type IEstadoModel = Spec.InferFactoryEntityType<typeof EstadoDeclarationFactory, Spec.IOutputDeclarationModes['OUTPUT']>;

export const EstadoDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Estado',

    properties: {
      //
      ...Spec.GetDeclarationProperties(Spec.ObjectIdDeclarationFactory),
      //

      nome: {
        nullable: false,
        type: Spec.PropertyTypes.STRING,
        description: 'Nome do Estado.',
      },

      sigla: {
        nullable: false,
        type: Spec.PropertyTypes.STRING,
        description: 'Sigla do Estado.',
      },
    },
  };
});
