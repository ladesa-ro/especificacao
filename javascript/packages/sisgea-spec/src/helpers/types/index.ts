import * as Dto from '@/core';

export const PropertyTypes = {
  // string
  STRING: 'string' as const,
  UUID: 'uuid' as const,

  // number
  INTEGER: 'integer' as const,

  // special
  DATE_TIME: 'date-time' as const,

  // extensions
  MIXED: 'mixed' as const,
} as const;

export type IPropertyTypes = typeof PropertyTypes;
export type IPropertyType = IPropertyTypes[keyof IPropertyTypes];

export const OutputDeclarationModes = {
  // simple, without mixed
  SIMPLE: 'simple',
  // mixed output only
  OUTPUT: 'output',
  // mixed input only
  INPUT: 'input',
} as const;

export type IOutputDeclarationModes = typeof OutputDeclarationModes;
export type IOutputDeclarationMode = IOutputDeclarationModes[keyof IOutputDeclarationModes];

export type IEntityDeclarationRawPropertySimple = {
  type: Omit<IPropertyType, IPropertyTypes['MIXED']> | IDeclaredEntity;
  nullable: boolean;
  description: string;
};

export type IEntityDeclarationRawPropertyMixed = {
  type: IPropertyTypes['MIXED'];
  input: IEntityDeclarationRawPropertySimple;
  output: IEntityDeclarationRawPropertySimple;
};

export type IEntityDeclarationRawProperty = IEntityDeclarationRawPropertySimple | IEntityDeclarationRawPropertyMixed;

export type IEntityDeclarationRaw = {
  name: string;
  properties: Record<string, IEntityDeclarationRawProperty>;
};

export type IDeclaredEntity<Declaration extends IEntityDeclarationRaw = IEntityDeclarationRaw, Options = any> = (
  options?: Options,
) => Declaration;

export type NullableIf<T, Condition extends boolean> = Condition extends true ? T | null : T;

export type InferEntityPropertyDeclarationTarget<
  Entity extends IEntityDeclarationRaw,
  Mode extends IOutputDeclarationMode,
  PropertyKey extends keyof Entity['properties'],
  RootPropertyDeclaration extends Entity['properties'][PropertyKey] = Entity['properties'][PropertyKey],
> = RootPropertyDeclaration extends IEntityDeclarationRawPropertyMixed
  ? Mode extends IOutputDeclarationModes['SIMPLE']
    ? never
    : Mode extends IOutputDeclarationModes['INPUT']
      ? RootPropertyDeclaration['input']
      : RootPropertyDeclaration['output']
  : RootPropertyDeclaration;

export type InferEntityPropertyTypeCore<
  Entity extends IEntityDeclarationRaw,
  Mode extends IOutputDeclarationMode,
  PropertyKey extends keyof Entity['properties'],
  EntityPropertyDeclarationTarget extends InferEntityPropertyDeclarationTarget<
    Entity,
    Mode,
    PropertyKey
  > = InferEntityPropertyDeclarationTarget<Entity, Mode, PropertyKey>,
  PropertyType extends EntityPropertyDeclarationTarget['type'] = EntityPropertyDeclarationTarget['type'],
> = NullableIf<
  PropertyType extends IPropertyTypes['STRING'] | IPropertyTypes['UUID']
    ? string
    : PropertyType extends IPropertyTypes['INTEGER']
      ? number
      : PropertyType extends IPropertyTypes['DATE_TIME']
        ? Dto.IEntityDate
        : unknown,
  EntityPropertyDeclarationTarget['nullable']
>;

export type InferEntityType<
  Entity extends IEntityDeclarationRaw,
  Mode extends IOutputDeclarationMode = IOutputDeclarationModes['SIMPLE'],
> = {
  -readonly [K in keyof Entity['properties']]: InferEntityPropertyTypeCore<Entity, Mode, K>;
};

export type InferFactoryEntityType<
  Factory extends IDeclaredEntity,
  Mode extends IOutputDeclarationMode = IOutputDeclarationModes['SIMPLE'],
  Entity extends ReturnType<Factory> = ReturnType<Factory>,
> = InferEntityType<Entity, Mode>;
