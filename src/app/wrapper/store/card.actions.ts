import {Action} from '@ngrx/store';

export const ADD_NUMBERS = '[card] Add Numbers';
export const TOGGLE_SHOW = '[card] Toggle Show';
export const RESET_INDEXES = '[card] Reset Indexes';

export class AddNumbers implements Action {
  readonly type = ADD_NUMBERS;

  constructor(public payload: any) {
  }
}


export class ToggleShow implements Action {
  readonly type = TOGGLE_SHOW;

  constructor(public payload: {index: number, show: boolean, selected: string}) {
  }
}

export class ResetIndexes implements Action {
  readonly type = RESET_INDEXES;
}


export type CardActions = AddNumbers | ToggleShow | ResetIndexes;
