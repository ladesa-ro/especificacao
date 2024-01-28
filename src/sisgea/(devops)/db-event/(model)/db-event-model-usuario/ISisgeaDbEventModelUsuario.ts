import { ISisgeaDbEventGenericModel } from '../(generic)/ISisgeaDbEventGenericModel';
import { ISisgeaResource } from '../../../(enums)';
import { ISisgeaAuthUsuarioModel } from '../../../../modules';

export interface ISisgeaDbEventModelUsuario extends ISisgeaDbEventGenericModel<ISisgeaResource.USUARIO, ISisgeaAuthUsuarioModel> {
  //
}
