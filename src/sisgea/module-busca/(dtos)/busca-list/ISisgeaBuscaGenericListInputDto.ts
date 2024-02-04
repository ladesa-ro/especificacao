export interface ISisgeaBuscaGenericListInputDto {
  query: string;

  limit: number;
  offset?: number;
  filter?: string;

  sort?: string[];
}
