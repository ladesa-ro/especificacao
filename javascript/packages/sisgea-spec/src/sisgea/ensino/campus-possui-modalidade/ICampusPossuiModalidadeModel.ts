import * as Dto from '@/index';

export interface ICampusPossuiModalidadeModel extends Dto.IObjectUuid {
  //

  id: string;

  //

  campus: Dto.ICampusModel;
  modalidade: Dto.IModalidadeModel;

  //
}
