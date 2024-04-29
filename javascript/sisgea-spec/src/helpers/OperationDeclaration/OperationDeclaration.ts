import { IDeclaredEntity, IEntityDeclarationRawProperty } from '../EntityDeclaration/EntityDeclaration';

export type IOperationDeclaration = {
  name: string;
  description: string;

  input?:
    | {
        strategy: 'file';
      }
    | {
        strategy: 'dto';

        dto?: Record<string, IEntityDeclarationRawProperty> | null;

        body?: Record<string, IEntityDeclarationRawProperty> | null;
        query?: Record<string, IEntityDeclarationRawProperty> | null;
        params?: Record<string, IEntityDeclarationRawProperty> | null;

        combineInputs?: (inputs: { body: Record<string, unknown>; query: Record<string, unknown>; params?: unknown }) => unknown;
      }
    | null;

  output:
    | {
        strategy: 'file';
      }
    | {
        strateg: 'dto';
        dto: IDeclaredEntity<any>;
      };
};
