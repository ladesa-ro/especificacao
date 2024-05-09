import { IDeclaration, PropertyTypes } from '../../helpers';

export type IObjectId = {
  id: number;
};

export const ObjectId = (name: string = 'ObjectId') => {
  return {
    name,

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.INTEGER,
        description: 'ID do registro.',
      },
    },
  } satisfies IDeclaration;
};
