export interface SisgeaDbEventModel<Data = unknown> {
  id: string;

  // ...

  correlationId: string | null;
  action: string;
  tableName: string;
  rowId: unknown;
  data: Data | null;
  dateEvent: Date;

  logId: string;

  // ...

  dateCreated: Date;

  //

  resource: string;
}
