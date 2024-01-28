import { ISisgeaSisghaModalidadeModel } from '../../(modalidade)/(model)/ISisgeaSisghaModalidadeModel';
import { IObjectUuid } from '../../../../../core/(generics)';
import { IObjectWithDateEvents } from '../../../../../core/(generics)/IObjectWithDateEvents';

export interface ISisgeaSisghaCursoModel extends IObjectUuid, IObjectWithDateEvents {
  //

  nome: string | null;
  nomeAbreviado: string | null;

  //

  modalidade: ISisgeaSisghaModalidadeModel;
}
