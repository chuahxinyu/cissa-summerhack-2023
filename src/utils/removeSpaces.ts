import jsPDF from 'jspdf';
import { StringOptional } from '../components/types';

function addLineBreaksToText(doc: jsPDF, text: StringOptional): StringOptional {
  if (text === undefined) {
    return undefined;
  }
  const splitArray = doc.splitTextToSize(text, 600);

  return splitArray.join('<br>');
}

export const addLineBreaks = (doc: jsPDF, thing: any): any => {
  if (typeof thing === 'string') {
    console.log(thing);
    const removedLineBreak = addLineBreaksToText(doc, thing);
    return removedLineBreak;
  }
  for (const prop in thing) {
    if (!(prop === 'template')) {
      thing[prop] = addLineBreaks(doc, thing[prop]);
    }
  }
  return thing;
};

/**
 * Recursively replaces spaces in string values of an object with '&nbsp;'. Used for jsDoc to display HTML strings correctly.
 * @param thing current object or string
 */
export const removeSpaces = (thing: any): any => {
  if (typeof thing === 'string') {
    const removedWhitespace = thing.replace(/\s/g, '&nbsp;');
    return removedWhitespace;
  }
  for (const prop in thing) {
    if (!(prop === 'template')) {
      thing[prop] = removeSpaces(thing[prop]);
    }
  }
  return thing;
};
