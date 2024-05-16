import { UniProvider } from '../../common';
import { GenericPaginationProvider } from './GenericPagination';
import { GenericSearchProvider } from './GenericSearch';

export const SharedModuleProvider = UniProvider((ctx) => {
  ctx.Add(GenericPaginationProvider);
  ctx.Add(GenericSearchProvider);
});
