import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { CidadeFindOneByIdResultDeclaration } from './cidade-find-one.operation';

// ======================================

export type ICidadeFindAllResultDto = SpecHelpers.InferFactoryEntityType<
  typeof CidadeFindAllResultDeclaration,
  SpecHelpers.IOutputDeclarationModes['OUTPUT']
>;

export const CidadeFindAllResultDeclaration = SpecCore.PaginatedResultDtoDeclarationFactoryBuilder(
  CidadeFindOneByIdResultDeclaration,
  'CidadeFindAllResult',
);

// ======================================
