export function addToArrayAtIndex(array, index, newItem) {
  const tmp = array.slice();
  tmp.splice(index, 0, newItem);
  return tmp;
}
