import {
  IPaginatedFilter,
  IPaginatedInputDto,
  IPaginatedSortBy,
  ObjectId,
  ObjectUuid,
  PaginatedBaseInput,
  PaginatedInput,
} from '../../core';
import { IDeclarationProperty, IDeclarationPropertySimple, IDeclarator, PropertyTypes } from '../EntityDeclaration/EntityDeclaration';

export type IOperationInputFile = {
  strategy: 'file';
  mimeTypes: string[];
};

export type IOperationInputDto = {
  //
  strategy: 'dto';
  //
  body?: IDeclarator | Record<string, IDeclarationProperty> | null;
  query?: IDeclarator | Record<string, IDeclarationProperty> | null;
  params?: IDeclarator | Record<string, IDeclarationProperty> | null;
  //
  dto?: IDeclarator | null;
  //
  combineInputs?: (inputs: { body: Record<string, unknown>; query: Record<string, unknown>; params?: Record<string, unknown> }) => unknown;
  //
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

// ============================================

export const OperatorFindAll =
  (options: {
    name: string;
    description: string;
    success: { dto: any; description: string };
    filters?: { path: string; description: string }[];
  }) =>
  () => {
    const additionalProperties: IDeclarationPropertySimple[] = [];

    for (const filter of options.filters ?? []) {
      additionalProperties.push({
        nullable: false,
        required: false,
        type: PropertyTypes.STRING,
        name: `filter.${filter.path}`,
        description: filter.description,
      } as IDeclarationPropertySimple);
    }

    return {
      gql: 'query',

      name: options.name,
      description: options.description,

      input: {
        strategy: 'dto',
        dto: PaginatedInput,

        //

        query: {
          ...PaginatedBaseInput().properties,
          ...Object.fromEntries(additionalProperties.map((i) => [i.name!, i])),
        },

        combineInputs: ({ query }): IPaginatedInputDto => {
          console.warn('OperationDeclaration: OperatorFindAll: input: combine inputs');
          return {
            page: <any>query.page,
            limit: <any>query.limit,
            search: <any>query.search,
            filter: [],
            sortBy: [],
          };
        },
      },

      output: {
        strategy: 'dto',
        success: {
          dto: options.success.dto,
          description: options.success.description,
        },
      },
    } satisfies IOperation;
  };

export const OperationFindOne =
  (options: {
    name: string;
    description: string;
    //
    params: 'object-uuid' | 'object-id' | IDeclarator | Record<string, IDeclarationProperty>;
    success: { dto: any; description: string };
  }) =>
  () => {
    let params: IDeclarator | Record<string, IDeclarationProperty>;

    if (options.params === 'object-uuid') {
      params = ObjectUuid;
    } else if (options.params === 'object-id') {
      params = ObjectId;
    } else {
      params = options.params;
    }

    return {
      gql: 'query',

      name: options.name,
      description: options.description,

      input: {
        strategy: 'dto',
        params: params,
      },

      output: {
        strategy: 'dto',
        success: {
          dto: options.success.dto,
          description: options.success.description,
        },
      },
    } satisfies IOperation;
  };
