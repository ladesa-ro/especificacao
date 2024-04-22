import { DeclareEntity, InferFactoryEntityType, PropertyTypes } from '../helpers';

export type IObjectId = InferFactoryEntityType<typeof ObjectIdDeclarationFactory>;

export const ObjectIdDeclarationFactory = DeclareEntity((name: string = 'ObjectId') => {
  return {
    name,

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.INTEGER,
        description: 'ID do registro.',
      },
    },
  };
});
