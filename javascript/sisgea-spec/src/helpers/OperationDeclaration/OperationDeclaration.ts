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
import { array } from '../array';

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

    const filters = options.filters ?? [];

    for (const filter of filters) {
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
          console.warn('OperationDeclaration: OperatorFindAll: input: combine inputs: sort by not implemented');

          const paginatedInputDto = {
            page: query.page as any,
            limit: query.limit as any,
            search: query.search as any,
            filter: [] as IPaginatedFilter[],
            sortBy: [] as IPaginatedSortBy[],
          } satisfies IPaginatedInputDto;

          paginatedInputDto.filter ||= [];

          for (const filter of filters) {
            const rawPathFilters = query[`filter.${filter.path}`];

            if ((rawPathFilters && typeof rawPathFilters === 'string') || Array.isArray(rawPathFilters)) {
              const pathFilters = array(rawPathFilters as string | string[]).filter((i) => typeof i === 'string');

              if (pathFilters.length > 0) {
                paginatedInputDto.filter.push({
                  property: filter.path,
                  restrictions: pathFilters,
                });
              }
            }
          }

          return paginatedInputDto;
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

export const OperatorFindOne =
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
