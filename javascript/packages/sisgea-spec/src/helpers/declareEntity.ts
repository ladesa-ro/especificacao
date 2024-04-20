import { IDeclaredEntity, IEntityDeclarationRaw } from '@/helpers/types';

export const DeclareEntity = <Factory extends IDeclaredEntity>(factory: Factory) => factory;

export const GetDeclaration = <Declaration extends IEntityDeclarationRaw, Factory extends IDeclaredEntity<Declaration>>(factory: Factory) =>
  factory();
