import { GenericPaginationProvider } from "./GenericPagination";
import { GenericSearchProvider } from "./GenericSearch";
import { LazyModule } from "./common/LazyModule";

export const SharedModuleProvider = LazyModule({
  nodes: [
    //
    GenericPaginationProvider,
    GenericSearchProvider,
  ],
});
