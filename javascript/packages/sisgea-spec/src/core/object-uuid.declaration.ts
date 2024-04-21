import { DeclareEntity, InferFactoryEntityType, PropertyTypes } from '../helpers';

export type IObjectUuid = InferFactoryEntityType<typeof ObjectUuidDeclarationFactory>;

export const ObjectUuidDeclarationFactory = DeclareEntity((name: string = 'ObjectUuid') => {
  return {
    name,

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.UUID,
        description: 'ID do Registro.',
      },
    },
  };
});
