import { IDeclarationProperty, IDeclarator } from '../EntityDeclaration/EntityDeclaration';

export type IOperation = {
  name: string;
  description: string;

  input?:
    | {
        strategy: 'file';
      }
    | {
        strategy: 'dto';

        body?: Record<string, IDeclarationProperty> | null;
        query?: Record<string, IDeclarationProperty> | null;
        params?: Record<string, IDeclarationProperty> | null;

        combineInputs?: (inputs: { body: Record<string, unknown>; query: Record<string, unknown>; params?: unknown }) => unknown;
      }
    | null;

  output:
    | {
        strategy: 'file';
      }
    | {
        strateg: 'dto';
        dto: IDeclarator<any>;
      };
};
