import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { CampusFindOneResultDeclaration } from './campus-find-one.operation';

// ======================================

export type ICampusFindAllResultDto = SpecHelpers.InferFactoryEntityType<
  typeof CampusFindAllResultDeclaration,
  SpecHelpers.IOutputDeclarationModes['OUTPUT']
>;

export const CampusFindAllResultDeclaration = SpecCore.PaginatedResultDtoDeclarationFactoryBuilder(
  CampusFindOneResultDeclaration,
  'CampusFindAllResult',
);

// ======================================
