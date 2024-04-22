import * as Spec from '@/index';

export type IEstadoModel = Spec.InferFactoryEntityType<typeof EstadoDeclarationFactory, Spec.IOutputDeclarationModes['OUTPUT']>;

export const EstadoDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Estado',

    properties: {
      //
      id: {
        nullable: false,
        type: Spec.PropertyTypes.INTEGER,
        description: 'ID IBGE do Estado.',
      },
      //

      nome: {
        nullable: false,
        type: Spec.PropertyTypes.STRING,
        description: 'Nome oficial do Estado.',
      },

      sigla: {
        nullable: false,
        type: Spec.PropertyTypes.STRING,
        description: 'Sigla UF oficial do Estado.',
      },
    },
  };
});
