import { IObjectUuid } from '@/core';

export interface IUsuarioVinculoCampusListByUsuarioAndCampusInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;
}
