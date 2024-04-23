import { IObjectUuid } from '@/index';

export interface IUsuarioVinculoCampusSetVinculosInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;

  cargos: string[];
}
