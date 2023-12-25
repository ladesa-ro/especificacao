export type ISisgeaBuscaGenericSearchResult<T> = {
  query: string;
  limit: number;
  offset: number;
  total: number;
  items: T[];
};
