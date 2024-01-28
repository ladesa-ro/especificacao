import { IObjectUuid, IObjectWithDateEvents } from '../../../../../core';

export interface ISisgeaAuthUsuarioModel extends IObjectUuid, IObjectWithDateEvents {
  // ...

  nome: string | null;
  email: string | null;

  // ...

  matriculaSiape: string | null;

  // ...
}
