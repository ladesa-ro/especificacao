import * as Dto from '@/core';

export enum PropertyTypes {
  // string
  STRING = 'string',
  UUID = 'uuid',

  // number
  INTEGER = 'integer',

  // special
  DATE_TIME = 'date-time',

  // extensions
  MIXED = 'mixed',
}

export enum OutputDeclarationMode {
  // simple, without mixed
  SIMPLE = 'simple',

  // mixed output only
  OUTPUT = 'output',

  // mixed input only
  INPUT = 'input',
}

export type IEntityDeclarationRawPropertySimple = {
  type: Omit<PropertyTypes, PropertyTypes.MIXED>;
  nullable: boolean;
  description: string;
};

type IEntityDeclarationRawPropertyMixed = {
  type: PropertyTypes.MIXED;
  input: IEntityDeclarationRawPropertySimple;
  output: IEntityDeclarationRawPropertySimple;
};

export type IEntityDeclarationRawProperty = IEntityDeclarationRawPropertySimple | IEntityDeclarationRawPropertyMixed;

export type IEntityDeclarationRaw = {
  name: string;
  properties: Record<string, IEntityDeclarationRawProperty>;
};

export type IDeclaredEntity<Declaration extends IEntityDeclarationRaw = IEntityDeclarationRaw> = () => Declaration;

export type NullableIf<T, Condition extends boolean> = Condition extends true ? T | null : T;

export type InferEntityPropertyDeclarationTarget<
  Entity extends IEntityDeclarationRaw,
  Mode extends OutputDeclarationMode,
  PropertyKey extends keyof Entity['properties'],
  RootPropertyDeclaration extends Entity['properties'][PropertyKey] = Entity['properties'][PropertyKey],
> = RootPropertyDeclaration extends IEntityDeclarationRawPropertyMixed
  ? Mode extends OutputDeclarationMode.SIMPLE
    ? never
    : Mode extends OutputDeclarationMode.INPUT
      ? RootPropertyDeclaration['input']
      : RootPropertyDeclaration['output']
  : RootPropertyDeclaration;

export type InferEntityPropertyTypeCore<
  Entity extends IEntityDeclarationRaw,
  Mode extends OutputDeclarationMode,
  PropertyKey extends keyof Entity['properties'],
  EntityPropertyDeclarationTarget extends InferEntityPropertyDeclarationTarget<
    Entity,
    Mode,
    PropertyKey
  > = InferEntityPropertyDeclarationTarget<Entity, Mode, PropertyKey>,
  PropertyType extends EntityPropertyDeclarationTarget['type'] = EntityPropertyDeclarationTarget['type'],
> = NullableIf<
  PropertyType extends 'string' | 'uuid'
    ? string
    : PropertyType extends 'integer'
      ? number
      : PropertyType extends 'date-time'
        ? Dto.IEntityDate
        : unknown,
  EntityPropertyDeclarationTarget['nullable']
>;

export type InferEntityType<Entity extends IEntityDeclarationRaw, Mode extends OutputDeclarationMode = OutputDeclarationMode.SIMPLE> = {
  -readonly [K in keyof Entity['properties']]: InferEntityPropertyTypeCore<Entity, Mode, K>;
};

export type InferFactoryEntityType<
  Factory extends IDeclaredEntity,
  Mode extends OutputDeclarationMode = OutputDeclarationMode.SIMPLE,
  Entity extends ReturnType<Factory> = ReturnType<Factory>,
> = InferEntityType<Entity, Mode>;
