import * as cardActions from '../store/card.actions';

export interface State {
  numbers: any;
}

const initialSate: State = {
  numbers: [],
};


export function cardReducer(state: State = initialSate,
                            action: cardActions.CardActions) {

  switch (action.type) {
    case cardActions.ADD_NUMBERS:
      return {
        ...state,
        numbers: action.payload
      };
    case cardActions.TOGGLE_SHOW:
      const numbers = JSON.parse(JSON.stringify(state.numbers));
      numbers[action.payload.index].show = action.payload.show;
      numbers[action.payload.index].selected = action.payload.selected;
      return {
        ...state,
        numbers
      };
    default:
      return {
        ...state
      };
  }
}
