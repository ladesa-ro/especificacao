import { BuildModule } from "@unispec/ast-builder";
import { GenericPaginationProvider } from "./GenericPagination";
import { GenericSearchProvider } from "./GenericSearch";

export const SharedModuleProvider = BuildModule({ nodes: [GenericPaginationProvider, GenericSearchProvider] });
