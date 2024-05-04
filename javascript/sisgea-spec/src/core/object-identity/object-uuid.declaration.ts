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
        validator: ({ custom }) => custom.uuid(),
        description: description ?? 'ID do registro.',
      },
    },
  } satisfies IDeclaration;
};
