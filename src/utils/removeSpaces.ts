/**
 * Recursively replaces spaces in string values of an object with '&nbsp;'. Used for jsDoc to display HTML strings correctly.
 * @param thing current object or string
 */
export const removeSpaces = (thing: any): any => {
  if (typeof thing === 'string') {
    const removedWhitespace = thing.replace(/\s/g, '&nbsp;');
    return removedWhitespace;
  }
  for (var prop in thing) {
    if (!(prop === 'template')) {
      thing[prop] = removeSpaces(thing[prop]);
    }
  }
  return thing;
};
