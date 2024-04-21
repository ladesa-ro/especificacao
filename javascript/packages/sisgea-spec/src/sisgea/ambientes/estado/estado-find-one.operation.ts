import * as Spec from '@/index';

// ======================================

export type IEstadoFindOneByIdInputDto = Spec.InferFactoryEntityType<typeof EstadoFindOneByIdInputDeclaration>;

export const EstadoFindOneByIdInputDeclaration = Spec.DeclareEntity(() => Spec.ObjectUuidDeclarationFactory('EstadoFindOneByIdInput'));

// ======================================

export type IEstadoFindOneByUfInputDto = Spec.InferFactoryEntityType<typeof EstadoFindOneByUfInputDeclaration>;

export const EstadoFindOneByUfInputDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.EstadoDeclarationFactory);

  return {
    name: 'EstadoFindOneByUfInput',

    properties: {
      uf: properties.sigla,
    },
  };
});

// ======================================

export type IEstadoFindOneByIdResultDto = Spec.InferFactoryEntityType<
  typeof EstadoFindOneByIdResultDeclaration,
  Spec.IOutputDeclarationModes['OUTPUT']
>;

export const EstadoFindOneByIdResultDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.EstadoDeclarationFactory);

  return {
    name: 'EstadoFindOneByIdResult',
    partialOf: Spec.EstadoDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      sigla: properties.sigla,
      //
    },
  };
});

// ======================================
