import { U } from "@unispec/core";
import { GenericPaginationProvider } from "./GenericPagination";
import { GenericSearchProvider } from "./GenericSearch";

export const SharedModuleProvider = U.Provider((ctx) => {
  ctx.Add(GenericPaginationProvider);
  ctx.Add(GenericSearchProvider);
});
