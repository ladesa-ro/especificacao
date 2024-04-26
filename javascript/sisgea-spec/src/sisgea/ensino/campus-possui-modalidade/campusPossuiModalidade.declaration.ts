import * as Dto from '@/index';
import { IObjectUuid } from '@/index';

export interface ICampusPossuiModalidadeModel extends Dto.IObjectUuid {
  //

  id: string;

  //

  campus: Dto.ICampusModel;
  modalidade: Dto.IModalidadeModel;

  //
}

export interface ICampusPossuiModalidadeCreateInput{
  campus: IObjectUuid;
  modalidade: IObjectUuid;
}

export interface ICampusPossuiModalidadeDeleteOneByIdInput {
  id: string;
}