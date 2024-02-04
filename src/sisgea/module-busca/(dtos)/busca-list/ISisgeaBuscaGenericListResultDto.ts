export type ISisgeaBuscaGenericListResultDto<T> = {
  query: string;

  limit: number;
  offset: number;
  total: number;

  items: T[];
};
