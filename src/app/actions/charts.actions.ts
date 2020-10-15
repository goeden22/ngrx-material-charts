import { Action } from '@ngrx/store';
import { Entry } from '../models/entry.model';

export enum ChartsActionTypes {
    ADD_ENTRY = '[CHARTS] Add Entry',
    DELETE_ENTRY = '[CHARTS] Delete Entry',
    EDIT_ENTRY = '[CHARTS] Edit Entry'
  }

  export class AddEntryAction implements Action {
    readonly type = ChartsActionTypes.ADD_ENTRY
  
    constructor(public payload: Entry) { }
  }
  export class DeleteEntryAction implements Action {
    readonly type = ChartsActionTypes.DELETE_ENTRY
  
    constructor(public payload: string) { }
  }
  export class EditEntryAction implements Action {
    readonly type = ChartsActionTypes.EDIT_ENTRY
  
    constructor(public payload: Entry) { }
  }

  export type ChartsAction = AddEntryAction | DeleteEntryAction | EditEntryAction