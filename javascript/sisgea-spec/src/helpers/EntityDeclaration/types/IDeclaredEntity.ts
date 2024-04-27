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

export type IEntityDeclarationRawPropertySimple = {
  arrayOf?: boolean;
  type: Omit<IPropertyType, IPropertyTypes['MIXED']> | any;
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

export interface IEntityDeclarationRaw {
  name: string;
  partialOf?: IDeclaredEntity<any>;
  properties: Record<string, IEntityDeclarationRawProperty>;
}

export type IDeclaredEntity<Options = any> = (options?: Options) => IEntityDeclarationRaw;
