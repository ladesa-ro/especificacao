export interface SisgeaDbEventModel<Data = unknown> {
  id: string;

  // ...

  correlationId: string | null;
  action: string;
  tableName: string;
  rowId: unknown;
  data: Data | null;
  dateEvent: Date | string | number;

  logId: string;

  // ...

  dateCreated: Date | string | number;

  //

  resource: string;
}
