import { IDeclaredEntity, IEntityDeclarationRaw } from './types';

export const DeclareEntity = <
  Properties = undefined,
  Declaration extends IEntityDeclarationRaw<Properties> = IEntityDeclarationRaw<Properties>,
  Options = unknown,
>(
  factory: IDeclaredEntity<Properties, Declaration, Options>,
) => factory;

export const GetDeclaration = <Declaration extends IEntityDeclarationRaw>(factory: () => Declaration) => factory();

export const GetDeclarationProperties = <
  Declaration extends IEntityDeclarationRaw<any>,
  Property extends keyof Declaration['properties'],
  Properties extends null | Record<Property, boolean>,
  FilteredProperties extends Properties extends null
    ? {
        [K in keyof Declaration['properties']]: Declaration['properties'][K];
      }
    : {
        [K in Property]: Declaration['properties'][K];
      },
>(
  factory: () => Declaration,
  properties: Properties | null = null,
): FilteredProperties => {
  const declaration = GetDeclaration(factory);

  return Object.fromEntries(
    Object.entries(declaration.properties).filter(([key]) => {
      if (properties) {
        const keyAsProperty = key as Property;
        return key in properties && properties[keyAsProperty];
      }

      return true;
    }),
  ) as FilteredProperties;
};
