import { ISisgeaAuthActorKind } from '../../(dtos)';

export type ISisgeaAuthActorUser = {
  kind: ISisgeaAuthActorKind.USER;

  userId: string;
};
