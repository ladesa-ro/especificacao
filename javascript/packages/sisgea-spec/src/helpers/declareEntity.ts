import { IDeclaredEntity, IEntityDeclarationRaw } from '@/helpers/types';

export const DeclareEntity = <Factory extends IDeclaredEntity>(factory: Factory) => factory;

export const GetDeclaration = <Declaration extends IEntityDeclarationRaw>(factory: () => Declaration) => factory();
