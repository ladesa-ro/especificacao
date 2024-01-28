import { ISisgeaAuthActorKind } from '../../(dtos)';
import { ISisgeaAuthActorAnonymous } from '../actor-anonymous';
import { ISisgeaAuthActorSystem } from '../actor-system';
import { ISisgeaAuthActorUser } from '../actor-user';

export class ISisgeaAuthActorBuilder {
  static createSisgeaActorAnonymous(): ISisgeaAuthActorAnonymous {
    return {
      kind: ISisgeaAuthActorKind.ANONONYMOUS,
    };
  }

  static createSisgeaActorSystem(): ISisgeaAuthActorSystem {
    return {
      kind: ISisgeaAuthActorKind.SYSTEM,
    };
  }

  static createSisgeaActorUser(userId: string): ISisgeaAuthActorUser {
    return {
      kind: ISisgeaAuthActorKind.USER,
      userId: userId,
    };
  }
}
