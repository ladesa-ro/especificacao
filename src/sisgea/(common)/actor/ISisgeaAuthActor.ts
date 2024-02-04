
// =======================================================

export enum ISisgeaAuthActorKind {
  USER = 'user',
  SYSTEM = 'system',
  ANONONYMOUS = 'anon'
}

// =======================================================

export type ISisgeaAuthActorAnonymous = {
  kind: ISisgeaAuthActorKind.ANONONYMOUS;
};

export type ISisgeaAuthActorSystem = {
  kind: ISisgeaAuthActorKind.SYSTEM;
};

export type ISisgeaAuthActorUser = {
  kind: ISisgeaAuthActorKind.USER;
  userId: string;
};


// =======================================================

export type ISisgeaAuthActor = ISisgeaAuthActorAnonymous | ISisgeaAuthActorSystem | ISisgeaAuthActorUser;

