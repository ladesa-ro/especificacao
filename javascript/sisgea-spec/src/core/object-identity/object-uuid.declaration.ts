import { IDeclaration, PropertyTypes } from '../../helpers';

export type IObjectUuid = {
  id: string;
};

export const ObjectUuidDeclarationFactory = (name: string = 'ObjectUuid') => {
  return {
    name,

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.UUID,
        description: 'ID do registro.',
        validator: ({ custom }) => custom.uuid(),
      },
    },
  } satisfies IDeclaration;
};
