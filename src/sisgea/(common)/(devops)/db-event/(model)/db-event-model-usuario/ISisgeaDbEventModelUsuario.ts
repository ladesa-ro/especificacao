import { ISisgeaAuthUsuarioModel } from '../../../../../module-auth';
import { ISisgeaResource } from '../../../ISisgeaResource';
import { ISisgeaDbEventGenericModel } from '../ISisgeaDbEventGenericModel';

export interface ISisgeaDbEventModelUsuario extends ISisgeaDbEventGenericModel<ISisgeaResource.USUARIO, ISisgeaAuthUsuarioModel> {
  //
}
