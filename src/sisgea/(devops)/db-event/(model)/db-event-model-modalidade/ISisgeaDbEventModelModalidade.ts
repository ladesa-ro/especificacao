import { ISisgeaDbEventGenericModel } from '../(generic)/ISisgeaDbEventGenericModel';
import { ISisgeaResource } from '../../../(enums)';
import { ISisgeaSisghaModalidadeModel } from '../../../../modules';

export interface ISisgeaDbEventModelModalidade
  extends ISisgeaDbEventGenericModel<ISisgeaResource.MODALIDADE, ISisgeaSisghaModalidadeModel> {
  //
}
