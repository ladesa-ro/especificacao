import { IObjectUuid } from "../../../../../(generic)";
import { ISisgeaResource } from "../../ISisgeaResource";

export interface ISisgeaDbEventGenericModel<
  Resource extends ISisgeaResource = ISisgeaResource,
  Data extends { id: unknown } = { id: unknown },
  Id extends Data['id'] = unknown,
> extends IObjectUuid {
  // ...

  action: string;
  resource: Resource;

  //

  logId: string;
  correlationId: string | null;
  rowId: Id;

  // ...

  tableName: string | null;

  data: Data | null;
  dateEvent: string;

  // ...

  dateCreated: string;

  // ...
}
