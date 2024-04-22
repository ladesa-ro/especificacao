import * as Spec from '@/index';

// ======================================

export type ICidadeFindOneByIdInputDto = Spec.InferFactoryEntityType<typeof CidadeFindOneByIdInputDeclaration>;

export const CidadeFindOneByIdInputDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.CidadeDeclarationFactory);

  return {
    name: 'CidadeFindOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});

// ======================================

export type ICidadeFindOneByIdResultDto = Spec.InferFactoryEntityType<
  typeof CidadeFindOneByIdResultDeclaration,
  Spec.IOutputDeclarationModes['OUTPUT']
>;

export const CidadeFindOneByIdResultDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.CidadeDeclarationFactory);

  return {
    name: 'CidadeFindOneByIdResult',
    partialOf: Spec.CidadeDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      estado: properties.estado,
      //
    },
  };
});

// ======================================
