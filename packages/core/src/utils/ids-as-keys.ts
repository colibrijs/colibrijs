type ObjectWithId = { id: string };
type WithIdAsKey<T extends ObjectWithId> = T & { key: string };

/**
 * Accepts an array of any objects with property id. Returns the same array, but property id
 * duplicated to property key
 */
export function idsAsKeys<T extends ObjectWithId>(arr: T[]): WithIdAsKey<T>[] {
  return arr.map((item) => ({ ...item, key: item.id }));
}
