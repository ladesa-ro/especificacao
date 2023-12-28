import { SisgeaActorKind } from '../sisgea-actor/enums';
import { SisgeaActorAnonymous } from '../sisgea-actor/sisgea-actor-anonymous';
import { SisgeaActorSystem } from '../sisgea-actor/sisgea-actor-system';
import { SisgeaActorUser } from '../sisgea-actor/sisgea-actor-user';

export class SisgeaActorBuilder {
  static createSisgeaActorAnonymous(): SisgeaActorAnonymous {
    return {
      kind: SisgeaActorKind.ANONONYMOUS,
    };
  }

  static createSisgeaActorSystem(): SisgeaActorSystem {
    return {
      kind: SisgeaActorKind.SYSTEM,
    };
  }

  static createSisgeaActorUser(userId: string): SisgeaActorUser {
    return {
      kind: SisgeaActorKind.USER,
      userId: userId,
    };
  }
}
