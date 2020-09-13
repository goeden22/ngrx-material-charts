import { ChartsActionTypes, ChartsAction } from '../actions/charts.actions';
import { Entry } from '../models/entry.model';

const initialState: Array<Entry> = [
  {
    id: "dsadasd2321",
    name: "Paliwo",
    value: 123,
  },
  {
    id: "23sdrtyyr1",
    name: "Czynsz",
    value: 700,
  }
];

export function ChartsReducer(state: Array<Entry> = initialState, action: ChartsAction) {
  switch (action.type) {
    case ChartsActionTypes.ADD_ENTRY:
      return [...state, action.payload];
      case ChartsActionTypes.DELETE_ENTRY:
      return state.filter(entry => entry.id !== action.payload);
    default:
      return state;
  }
}