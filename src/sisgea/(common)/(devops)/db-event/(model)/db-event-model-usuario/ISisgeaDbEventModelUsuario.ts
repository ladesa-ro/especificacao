import { ISisgeaAuthUsuarioModel } from '../../../../../module-auth/usuario/(models)';
import { ISisgeaResource } from '../../../ISisgeaResource';
import { ISisgeaDbEventGenericModel } from '../ISisgeaDbEventGenericModel';

export interface ISisgeaDbEventModelUsuario extends ISisgeaDbEventGenericModel<ISisgeaResource.USUARIO, ISisgeaAuthUsuarioModel> {
  //
}
