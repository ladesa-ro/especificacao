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
  arrayOf?: boolean;
  type: Omit<IPropertyType, IPropertyTypes['MIXED']> | IDeclaredEntity<any>;
  required?: boolean;
  nullable: boolean;
  description: string;
};

export type IEntityDeclarationRawPropertyMixed = {
  type: IPropertyTypes['MIXED'];
  input: IEntityDeclarationRawPropertySimple;
  output: IEntityDeclarationRawPropertySimple;
};

export type IEntityDeclarationRawProperty = IEntityDeclarationRawPropertySimple | IEntityDeclarationRawPropertyMixed;

export type IEntityDeclarationRaw<Properties = null> = {
  readonly _lockType?: Properties;
  name: string;
  partialOf?: IDeclaredEntity<any>;
  properties: Record<string, IEntityDeclarationRawProperty>;
};

export type IDeclaredEntity<
  Properties = undefined,
  Declaration extends IEntityDeclarationRaw<Properties> = IEntityDeclarationRaw<Properties>,
  Options = any,
> = (options?: Options) => Declaration;

export type NullableIf<T, Condition extends boolean> = Condition extends true ? T | null : T;

export type RequiredIf<T, Condition extends undefined | boolean> = Condition extends false ? T | undefined : T;

export type ArrayIf<T, Condition extends undefined | boolean> = Condition extends true ? T[] : T;

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
  Entity extends IEntityDeclarationRaw<any>,
  Mode extends IOutputDeclarationMode,
  PropertyKey extends keyof Entity['properties'],
  EntityPropertyDeclarationTarget extends InferEntityPropertyDeclarationTarget<
    Entity,
    Mode,
    PropertyKey
  > = InferEntityPropertyDeclarationTarget<Entity, Mode, PropertyKey>,
  PropertyType extends EntityPropertyDeclarationTarget['type'] = EntityPropertyDeclarationTarget['type'],
> = RequiredIf<
  ArrayIf<
    NullableIf<
      PropertyType extends IDeclaredEntity<infer Propties>
        ? Propties extends undefined
          ? InferFactoryEntityType<PropertyType, Mode>
          : Propties
        : PropertyType extends IPropertyTypes['STRING'] | IPropertyTypes['UUID']
          ? string
          : PropertyType extends IPropertyTypes['INTEGER']
            ? number
            : PropertyType extends IPropertyTypes['DATE_TIME']
              ? Dto.IEntityDate
              : unknown,
      EntityPropertyDeclarationTarget['nullable']
    >,
    EntityPropertyDeclarationTarget['arrayOf']
  >,
  EntityPropertyDeclarationTarget['required']
>;

export type InferEntityType<
  Entity extends IEntityDeclarationRaw<any>,
  Mode extends IOutputDeclarationMode = IOutputDeclarationModes['SIMPLE'],
> = {
  -readonly [K in keyof Entity['properties']]: InferEntityPropertyTypeCore<Entity, Mode, K>;
};

export type InferFactoryEntityType<
  Factory extends IDeclaredEntity<any>,
  Mode extends IOutputDeclarationMode = IOutputDeclarationModes['SIMPLE'],
  Entity extends ReturnType<Factory> = ReturnType<Factory>,
> = InferEntityType<Entity, Mode>;