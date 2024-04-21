import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { ModalidadeFindOneResultDeclaration } from './modalidade-find-one.operation';

// ======================================

export type IModalidadeFindAllResultDto = SpecHelpers.InferFactoryEntityType<
  typeof ModalidadeFindAllResultDeclaration,
  SpecHelpers.IOutputDeclarationModes['OUTPUT']
>;

export const ModalidadeFindAllResultDeclaration = SpecCore.PaginatedResultDtoDeclarationFactoryBuilder(
  ModalidadeFindOneResultDeclaration,
  'ModalidadeFindAllResult',
);

// ======================================
