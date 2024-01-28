import { ISisgeaDbEventGenericModel } from '../(generic)';
import { ISisgeaDbEventModelUsuario } from '../db-event-model-usuario/ISisgeaDbEventModelUsuario';

export type ISisgeaDbEventModel = ISisgeaDbEventModelUsuario | ISisgeaDbEventGenericModel;
