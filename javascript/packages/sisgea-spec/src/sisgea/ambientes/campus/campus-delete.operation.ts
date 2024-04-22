import * as SpecHelpers from '@/helpers';
import { CampusDeclarationFactory } from './campus.declaration';

export type ICampusDeleteOneByIdInputDto = SpecHelpers.InferFactoryEntityType<typeof CampusDeleteOneByIdInputDeclaration>;

export const CampusDeleteOneByIdInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusDeleteOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});
