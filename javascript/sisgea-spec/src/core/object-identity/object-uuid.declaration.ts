import { IDeclaration, PropertyTypes } from '../../helpers';

export type IObjectUuid = {
  id: string;
};

export const ObjectUuid = (description: string | null = null, name: string | null = null) => {
  return {
    name: name ?? 'ObjectUuid',

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.UUID,
        description: description ?? 'ID do registro.',
        validator: ({ custom }) => custom.uuid(),
      },
    },
  } satisfies IDeclaration;
};
