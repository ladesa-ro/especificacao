import { DeclareEntity, IOutputDeclarationModes, InferFactoryEntityType, PropertyTypes } from '../helpers';

export type IEntityDate = Date | string | number;

export type IDatedObject = InferFactoryEntityType<typeof DatedObjectDeclarationFactory, IOutputDeclarationModes['OUTPUT']>;

export const DatedObjectDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'DatedObject',

    properties: {
      dateCreated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de criação do registro.',
      },

      dateUpdated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de atualização do registro.',
      },

      dateDeleted: {
        nullable: true,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de remoção do registro.',
      },
    },
  } as const;
});
