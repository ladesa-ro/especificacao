import * as Spec from '@/index';

export type IModalidadeModel = Spec.InferFactoryEntityType<typeof ModalidadeDeclarationFactory>;

export const ModalidadeDeclarationFactory = Spec.DeclareEntity(() => {
  return {
    name: 'Modalidade',

    properties: {
      //
      ...Spec.GetDeclarationProperties(Spec.ObjectUuidDeclarationFactory),

      //

      nome: {
        type: Spec.PropertyTypes.STRING,
        description: 'Nome da modalidade.',
        nullable: false,
      },

      slug: {
        type: Spec.PropertyTypes.STRING,
        description: 'Slug da modalidade.',
        nullable: false,
      },

      //
      ...Spec.GetDeclarationProperties(Spec.DatedObjectDeclarationFactory),
      //
    },
  };
});
