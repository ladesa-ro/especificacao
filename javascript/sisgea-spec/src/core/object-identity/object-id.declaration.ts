import { IEntityDeclarationRaw, PropertyTypes } from '../../helpers';

export type IObjectId = {
  id: number;
};

export const ObjectIdDeclarationFactory = (name: string = 'ObjectId') => {
  return {
    name,

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.INTEGER,
        description: 'ID do registro.',
      },
    },
  } satisfies IEntityDeclarationRaw;
};
