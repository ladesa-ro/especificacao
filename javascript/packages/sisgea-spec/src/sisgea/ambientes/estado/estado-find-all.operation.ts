import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { EstadoFindOneByIdResultDeclaration } from '@/sisgea/ambientes/estado/estado-find-one.operation';

// ======================================

export type IEstadoFindAllResultDto = SpecHelpers.InferFactoryEntityType<
  typeof EstadoFindAllResultDeclaration,
  SpecHelpers.IOutputDeclarationModes['OUTPUT']
>;

export const EstadoFindAllResultDeclaration = SpecCore.PaginatedResultDtoDeclarationFactoryBuilder(
  EstadoFindOneByIdResultDeclaration,
  'EstadoFindAllResult',
);

// ======================================
