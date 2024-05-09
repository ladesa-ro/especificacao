import { IValidator } from '@/core';

export const PropertyTypes = {
  // string
  STRING: 'string' as const,
  UUID: 'uuid' as const,
  // number
  INTEGER: 'integer' as const,
  // boolean
  BOOLEAN: 'boolean' as const,
  // special
  DATE_TIME: 'date-time' as const,
  // extensions
  MIXED: 'mixed' as const,
} as const;

export type IPropertyTypes = typeof PropertyTypes;
export type IPropertyType = IPropertyTypes[keyof IPropertyTypes];

export const OutputDeclarationModes = {
  // simple, without mixed
  SIMPLE: 'simple' as const,
  // mixed output only
  OUTPUT: 'output' as const,
  // mixed input only
  INPUT: 'input' as const,
} as const;

export type IOutputDeclarationModes = typeof OutputDeclarationModes;
export type IOutputDeclarationMode = IOutputDeclarationModes[keyof IOutputDeclarationModes];

export type IDeclarationPropertySimple = {
  name?: string | void;
  arrayOf?: boolean;
  type: Omit<IPropertyType, IPropertyTypes['MIXED']> | IDeclarator<any>;
  required?: boolean;
  nullable: boolean;
  description: string;
  validator?: IValidator | null;
};

export type IDeclarationPropertyMixed = {
  type: IPropertyTypes['MIXED'];
  input: IDeclarationPropertySimple;
  output: IDeclarationPropertySimple;
};

export type IDeclarationProperty = IDeclarationPropertySimple | IDeclarationPropertyMixed;

export interface IDeclaration {
  name: string;
  partialOf?: IDeclarator<any>;
  validator?: IValidator | null;
  properties: Record<string, IDeclarationProperty>;
}

export type IDeclarator<Options = any> = (options?: Options) => IDeclaration;

export const Mixed = (
  base: Omit<IDeclarationPropertySimple, 'type'> & {
    input: IDeclarationPropertySimple['type'];
    output: IDeclarationPropertySimple['type'];
  },
) => {
  const { input, output, ...common } = base;

  return {
    type: PropertyTypes.MIXED,
    input: {
      ...common,
      type: input,
    },
    output: {
      ...common,
      type: output,
    },
  } satisfies IDeclarationProperty;
};

export const IsPropertyMixed = (property: IDeclarationProperty): property is IDeclarationPropertyMixed => {
  return property.type === PropertyTypes.MIXED;
};

export const IsPropertySimple = (property: IDeclarationProperty): property is IDeclarationPropertySimple => {
  return property.type !== PropertyTypes.MIXED;
};

export const PropertyRequireness = (property: IDeclarationProperty, required: boolean) => {
  if (IsPropertyMixed(property)) {
    return {
      ...property,
      input: {
        ...property.input,
        required,
      },
      output: {
        ...property.output,
        required,
      },
    };
  } else if (IsPropertySimple(property)) {
    return {
      ...property,
      required,
    };
  }

  throw new TypeError('Unsupported property type.');
};

export const PropertiesRequireness = (properties: Record<string, IDeclarationProperty>, required: boolean) => {
  return Object.fromEntries(
    Object.entries(properties).map(([name, property]) => [name, PropertyRequireness(property, required)]),
  ) satisfies Record<string, IDeclarationProperty>;
};
