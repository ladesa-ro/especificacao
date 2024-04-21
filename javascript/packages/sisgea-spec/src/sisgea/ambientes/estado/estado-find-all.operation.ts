import * as Spec from '@/index';

// ======================================

export type IEstadoFindAllResultDto = Spec.InferFactoryEntityType<
  typeof EstadoFindAllResultDeclaration,
  Spec.IOutputDeclarationModes['OUTPUT']
>;

export const EstadoFindAllResultDeclaration = Spec.PaginatedResultDtoDeclarationFactoryBuilder(
  Spec.EstadoFindOneByIdResultDeclaration,
  'EstadoFindAllResult',
);

// ======================================
