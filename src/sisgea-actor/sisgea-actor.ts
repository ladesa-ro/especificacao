import { SisgeaActorAnonymous } from './sisgea-actor-anonymous';
import { SisgeaActorSystem } from './sisgea-actor-system';
import { SisgeaActorUser } from './sisgea-actor-user';

export type SisgeaActor = SisgeaActorAnonymous | SisgeaActorSystem | SisgeaActorUser;
