import { ISisgeaAuthActorAnonymous } from '../actor-anonymous';
import { ISisgeaAuthActorSystem } from '../actor-system';
import { ISisgeaAuthActorUser } from '../actor-user';

export type ISisgeaAuthActor = ISisgeaAuthActorAnonymous | ISisgeaAuthActorSystem | ISisgeaAuthActorUser;
