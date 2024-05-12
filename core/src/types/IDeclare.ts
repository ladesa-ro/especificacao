export type IMaybeArray<T> = T | T[];

// =================================================================

export type IOperationBaseProperty = {
  name?: string;
  nullable: boolean;
  required: boolean;
  description: string;
  constraints?: Record<string, any>;
  default?: any;
};

// ==================

export type IOperationPropertyString = IOperationBaseProperty & {
  type: 'string';
  format?: 'uuid' | 'date-time' | 'date' | 'time' | 'email';

  constraints?: {
    minLength?: number;
    maxLength?: number;
  };
};

export type IOperationPropertyFile = IOperationBaseProperty & {
  type: 'file';
  mimeTypes: string[];
};

export type IOperationPropertyInteger = IOperationBaseProperty & {
  type: 'integer';
  constraints?: {
    min?: number;
    max?: number;
    integer?: boolean;
    positive?: boolean;
  };
};

export type IOperationPropertyReferenceDeclarator = IOperationBaseProperty & {
  type: 'reference';
  references: 'declarator';
  declarator: any;
};

export type IOperationPropertyReference = IOperationPropertyReferenceDeclarator;

export type IOperationPropertyArray = IOperationBaseProperty & {
  type: 'array';
  of: IOperationProperty;
};

export type IOperationPropertyBoolean = IOperationBaseProperty & {
  type: 'boolean';
};

// ==================

export type IOperationProperty =
  | IOperationPropertyString
  | IOperationPropertyInteger
  | IOperationPropertyFile
  | IOperationPropertyReference
  | IOperationPropertyArray
  | IOperationPropertyBoolean;

// =================================================================

export type IOperationProperties = Record<string, IOperationProperty>;

export type IOperation<ExtraOutputs = void> = {
  description?: string;
  body?: IOperationProperty | IOperationProperties;
  queries?: IOperationProperties;
  outputs?: {
    success: ExtraOutputs | IOperationProperty | Record<string, IOperationProperty | ExtraOutputs>;
  };
};

export type IOperator = () => IOperation;

// =================================================================

export type IDeclaration<Property extends string = string, View extends 'default' | string = 'default' | string> = {
  name: string;

  id?: 'numeric' | 'uuid' | null | false;
  dated?: boolean;

  properties: Record<Property, IOperationProperty>;

  views: {
    default: Property[];
  } & Record<View, Property[]>;

  operations?: {
    crud?: {
      findById?: boolean;
      deleteById?: boolean;

      list?:
        | boolean
        | {
            view?: View;
            filters?: [string, string[]][];
          };

      create?:
        | boolean
        | {
            view: View;
          };

      updateById?:
        | boolean
        | {
            by: 'id' | 'uuid';
            view: View;
          };
    };

    extra?: {
      [key: string]: IOperation<{ view: string }>;
    };
  };
};

// =================================================================

export type IDeclarator<Properties extends string = string, View extends string = string> = () => IDeclaration<Properties, View>;

export const createDeclarator = <Dec extends IDeclarator = IDeclarator>(declarator: Dec) => declarator;

export const createOperator = <Op extends IOperator = IOperator>(operator: Op) => operator;
