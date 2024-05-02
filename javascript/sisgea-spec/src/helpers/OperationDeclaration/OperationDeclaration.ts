import { IDeclarationProperty, IDeclarator } from '../EntityDeclaration/EntityDeclaration';

export type IOperationInputFile = {
  strategy: 'file';
  mimeTypes: string[];
};

export type IOperationInputDto = {
  strategy: 'dto';
  body?: IDeclarator | Record<string, IDeclarationProperty> | null;
  query?: IDeclarator | Record<string, IDeclarationProperty> | null;
  params?: IDeclarator | Record<string, IDeclarationProperty> | null;
  combineInputs?: (inputs: { body: Record<string, unknown>; query: Record<string, unknown>; params?: unknown }) => unknown;
};

export type IOperationOutputFile = {
  strategy: 'file';
  mimeTypes: string[];
  description: string;
};

export type IOperationOutputDto = {
  description: string;
  dto: IDeclarator<any> | null;
};

export type IOperationOutputDtos = {
  strategy: 'dto';
  success: IOperationOutputDto;
};

export type IOperation = {
  name: string;
  description: string;

  gql: 'query' | 'mutation' | false;

  input?: IOperationInputFile | IOperationInputDto | null;
  output: IOperationOutputFile | IOperationOutputDtos;
};

export type IOperator = () => IOperation;
