export interface ISisgeaBuscaGenericListInput {
  query: string;

  limit: number;
  offset?: number;
  filter?: string;

  sort?: string[];
}
