import { Injectable } from '@angular/core';

import { FateHtmlParserService } from './fate-html-parser.service';
import { FateParser } from './fate-parser.interface';

@Injectable()
export class FateParserService extends FateHtmlParserService implements FateParser {

  protected actionMapping = {
    'bold' : {
      command: 'bold',
      name: 'Bold',
    },
    'italic' : {
      command: 'italic',
      name: 'Italic',
    },
    'underline' : {
      command: 'underline',
      name: 'Underlined',
    },
    'strike' : {
      command: 'strikeThrough',
      name: 'Strike Through',
    },
    'subscript' : {
      command: 'subscript',
      name: 'Subscript',
    },
    'superscript' : {
      command: 'superscript',
      name: 'Superscript',
    },
    'heading1' : {
      command: 'heading',
      option: 1,
      name: '1st Header',
    },
    'heading2' : {
      command: 'heading',
      option: 2,
      name: '2nd Header',
    },
    'heading3' : {
      command: 'heading',
      option: 3,
      name: '3rd Header',
    },
    'heading4' : {
      command: 'heading',
      option: 4,
      name: '4th Header',
    },
    'heading5' : {
      command: 'heading',
      option: 5,
      name: '5th Header',
    },
    'heading6' : {
      command: 'heading',
      option: 6,
      name: '6th Header',
    },
    'normal' : {
      command: 'normal',
      name: 'Body',
    },
    'indent' : {
      command: 'indent',
      name: 'Indent',
    },
    'outdent' : {
      command: 'outdent',
      name: 'Outdent',
    },
    'ordered' : {
      command: 'insertOrderedList',
      name: 'Ordered List',
    },
    'unordered' : {
      command: 'insertUnorderedList',
      name: 'Unorder List',
    },
    'center' : {
      command: 'justifyCenter',
      name: 'Center',
    },
    'justify' : {
      command: 'justifyFull',
      name: 'Justify',
    },
    'left' : {
      command: 'justifyLeft',
      name: 'Left',
    },
    'right' : {
      command: 'justifyRight',
      name: 'Right',
    },
    'undo' : {
      command: 'undo',
      name: 'Undo',
    },
    'redo' : {
      command: 'redo',
      name: 'Redo',
    },
    'clean' : {
      command: 'removeFormat',
      name: 'Remove Formating',
    },
  };

  public getAction(actionName): boolean | any {
    return this.actionMapping[actionName] || false;
  }
}