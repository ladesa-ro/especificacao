import { ISisgeaAuthActorAnonymous, ISisgeaAuthActorKind, ISisgeaAuthActorSystem, ISisgeaAuthActorUser } from "./ISisgeaAuthActor";

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
