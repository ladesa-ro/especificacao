import { UniType, UniTypeViews } from '../common/unispec/types';

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
};

export type IOperationPropertyReferenceDeclarator = IOperationBaseProperty & {
  type: 'reference';
  references: 'declarator';
  declarator: any;
  view?: string;
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
  | IOperationPropertyBoolean
  | UniType;

// =================================================================

export type IOperationProperties = Record<string, IOperationProperty>;

export type IOperation<ExtraOutputs = void> = {
  name?: string;
  description?: string;
  body?: string | IOperationProperty | IOperationProperties;
  params?: IOperationProperties;
  queries?: IOperationProperties;
  outputs?: {
    success: ExtraOutputs | IOperationProperty | Record<string, IOperationProperty | ExtraOutputs>;
  };
};

export type IOperator = () => IOperation;

// =================================================================

export type IDeclarationExtraOperation = IOperation<string>;

export type IDeclaration<Properties extends string = string, View extends 'default' | string = 'default' | string> = {
  name: string;

  shape: UniType;

  views: UniTypeViews<Properties>;

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

      updateById?: boolean | View;
    };

    extra?: {
      [key: string]: IDeclarationExtraOperation;
    };
  };
};

// =================================================================

export type IDeclarator<Properties extends string = string, View extends string = string> = () => IDeclaration<Properties, View>;

export const createDeclarator = <Dec extends IDeclarator = IDeclarator>(declarator: Dec): IDeclarator => declarator;

export const createOperator = <Op extends IOperator = IOperator>(operator: Op) => operator;
