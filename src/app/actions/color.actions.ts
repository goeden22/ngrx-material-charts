import { Action } from '@ngrx/store';
import { Color } from '../models/color.model';

export enum ColorActionTypes {
    ADD_COLOR = '[COLOR] Add Color',
    DELETE_COLOR = '[COLOR] Delete Color',
  }

  export class AddColorAction implements Action {
    readonly type = ColorActionTypes.ADD_COLOR
  
    constructor(public payload: Color) { }
  }
  export class DeleteColorAction implements Action {
    readonly type = ColorActionTypes.DELETE_COLOR
  
    constructor(public payload: string) { }
  }


  export type ColorAction = AddColorAction | DeleteColorAction