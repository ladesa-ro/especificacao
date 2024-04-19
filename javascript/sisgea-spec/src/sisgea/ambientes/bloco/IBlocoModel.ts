import { IDatedObject, IObjectUuid } from '@/core';
import * as Dto from '@/index';
import { ICampusModel } from '../campus';

export interface IBlocoModel extends IObjectUuid, IDatedObject {
  // =================================

  id: string;

  // =================================

  nome: string;
  codigo: string;

  // =================================

  campus: ICampusModel;
  imagemCapa: Dto.IImagemModel | null;

  // =================================

  ambientes: Dto.IAmbienteModel[];

  // =================================

  dateCreated: Dto.IEntityDate;
  dateUpdated: Dto.IEntityDate;
  dateDeleted: null | Dto.IEntityDate;

  // =================================
}
