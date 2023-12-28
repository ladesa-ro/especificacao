import { SisgeaActorKind } from './enums/SisgeaActorKind';

export type SisgeaActorUser = {
  kind: SisgeaActorKind.USER;
  userId: string;
};
