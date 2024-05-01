import { IDeclarationProperty, IDeclarator } from '../EntityDeclaration/EntityDeclaration';

export type IOperationInputFile = {
  strategy: 'file';
  mimeTypes: string[];
};

export type IOperationInputDto = {
  strategy: 'dto';
  body?: Record<string, IDeclarationProperty> | null;
  query?: Record<string, IDeclarationProperty> | null;
  params?: Record<string, IDeclarationProperty> | null;
  combineInputs?: (inputs: { body: Record<string, unknown>; query: Record<string, unknown>; params?: unknown }) => unknown;
};

export type IOperationOutputFile = {
  strategy: 'file';
  mimeTypes: string[];
  description: string;
};

export type IOperationOutputDto = {
  description: string;
  dto: IDeclarator<any>;
};

export type IOperationOutputDtos = {
  strategy: 'dto';
  success: IOperationOutputDto;
};

export type IOperation = {
  name: string;
  description: string;

  kind?: 'query' | 'mutation';

  input?: IOperationInputFile | IOperationInputDto | null;
  output: IOperationOutputFile | IOperationOutputDtos;
};

export type IOperator = () => IOperation;
