import * as Dto from '@/core';

export const Types = {
  IO: 'io',
  UUID: 'uuid',
  STRING: 'string',
  INTEGER: 'integer',
  DATE_TIME: 'date-time',
} as const;

type PropertyTypes = typeof Types;

export type PropertyType = PropertyTypes[keyof PropertyTypes];

export type EntityDeclarationPropertyFragmentR = {
  type: PropertyTypes['UUID'] | PropertyTypes['STRING'] | PropertyTypes['INTEGER'] | PropertyTypes['DATE_TIME'];
  description: string;
  nullable: boolean;
};

type EntityDeclarationPropertyFragmentIO = {
  type: PropertyTypes['IO'];
  input: EntityDeclarationPropertyFragmentR;
  output: EntityDeclarationPropertyFragmentR;
};

export type EntityDeclarationProperty = EntityDeclarationPropertyFragmentR | EntityDeclarationPropertyFragmentIO;

export type EntityDeclaration = {
  name: string;
  properties: Record<string, EntityDeclarationProperty>;
};

export const EntityFactory = <T extends EntityDeclaration>(factory: () => T) => factory;

export const EntityDeclaration = <T extends EntityDeclaration>(factory: () => T) => factory();

type NullableIf<T, Condition extends boolean> = Condition extends true ? T | null : T;

type InferEntityPropertyDeclarationTarget<
  Entity extends EntityDeclaration,
  Mode extends 'simple' | 'input' | 'output',
  PropertyKey extends keyof Entity['properties'],
  RootPropertyDeclaration extends Entity['properties'][PropertyKey] = Entity['properties'][PropertyKey],
> = RootPropertyDeclaration extends EntityDeclarationPropertyFragmentIO
  ? Mode extends 'simple'
    ? never
    : Mode extends 'input'
      ? RootPropertyDeclaration['input']
      : RootPropertyDeclaration['output']
  : RootPropertyDeclaration;

type InferEntityPropertyTypeCore<
  Entity extends EntityDeclaration,
  Mode extends 'simple' | 'input' | 'output',
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

export type InferEntityType<Entity extends EntityDeclaration, Mode extends 'simple' | 'input' | 'output' = 'simple'> = {
  [K in keyof Entity['properties']]: InferEntityPropertyTypeCore<Entity, Mode, K>;
};

export type InferFactoryEntityType<
  Factory extends () => EntityDeclaration,
  Mode extends 'simple' | 'input' | 'output' = 'simple',
  Entity extends ReturnType<Factory> = ReturnType<Factory>,
> = InferEntityType<Entity, Mode>;
