export function isObjectEmpty(object: object | undefined): boolean {
  if (object === undefined) return true;
  return (
    object && Object.keys(object).length === 0 && object.constructor === Object
  );
}
