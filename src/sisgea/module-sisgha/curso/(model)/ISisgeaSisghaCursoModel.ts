import { IObjectUuid, IObjectWithDateEvents } from '../../../../(generic)';
import { ISisgeaSisghaModalidadeModel } from '../../modalidade';

export interface ISisgeaSisghaCursoModel extends IObjectUuid, IObjectWithDateEvents {
  //

  nome: string | null;
  nomeAbreviado: string | null;

  //

  modalidade: ISisgeaSisghaModalidadeModel;
}
