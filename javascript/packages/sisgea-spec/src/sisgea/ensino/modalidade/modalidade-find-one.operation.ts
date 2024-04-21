import * as Spec from '@/index';

export type IModalidadeFindOneByIdInputDto = Spec.InferFactoryEntityType<typeof ModalidadeFindOneByIdInputDeclaration>;

export const ModalidadeFindOneByIdInputDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeFindOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});

export type IModalidadeFindOneResultDto = Spec.InferFactoryEntityType<typeof ModalidadeFindOneResultDeclaration>;

export const ModalidadeFindOneResultDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeFindOneResult',
    partialOf: Spec.ModalidadeDeclarationFactory,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      slug: properties.slug,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
});
