import { ISisgeaDbEventGenericModel } from '../ISisgeaDbEventGenericModel';
import { ISisgeaDbEventModelUsuario } from '../db-event-model-usuario/ISisgeaDbEventModelUsuario';

export type ISisgeaDbEventModel = ISisgeaDbEventModelUsuario | ISisgeaDbEventGenericModel;
