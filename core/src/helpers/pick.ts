export const pick = <T extends Record<K, any>, K extends keyof T>(obj: T, propertiesToPick: K[]) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => propertiesToPick.includes(key as K))) as Pick<T, K>;
};
