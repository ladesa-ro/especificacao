import { IValidator } from '@/core';

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
  SIMPLE: 'simple' as const,
  // mixed output only
  OUTPUT: 'output' as const,
  // mixed input only
  INPUT: 'input' as const,
} as const;

export type IOutputDeclarationModes = typeof OutputDeclarationModes;
export type IOutputDeclarationMode = IOutputDeclarationModes[keyof IOutputDeclarationModes];

export type IDeclarationPropertySimple = {
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
  properties: Record<string, IDeclarationProperty>;
}

export type IDeclarator<Options = any> = (options?: Options) => IDeclaration;
