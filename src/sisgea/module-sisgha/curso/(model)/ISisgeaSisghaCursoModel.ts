import { ISisgeaSisghaModalidadeModel } from '../../(modalidade)/(model)/ISisgeaSisghaModalidadeModel';
import { IObjectUuid, IObjectWithDateEvents } from '../../../../(generic)';

export interface ISisgeaSisghaCursoModel extends IObjectUuid, IObjectWithDateEvents {
  //

  nome: string | null;
  nomeAbreviado: string | null;

  //

  modalidade: ISisgeaSisghaModalidadeModel;
}
