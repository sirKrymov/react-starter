export function getById(
  array: Record<string, any>[],
  key: string,
  value: string | number
): Record<string, any> | null {
  return array.find(object => object[key] === value) || null;
}
