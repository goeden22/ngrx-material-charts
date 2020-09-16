import { ChartsActionTypes, ChartsAction } from '../actions/charts.actions';
import { Entry } from '../models/entry.model';

const initialState = {
  sum: 823,
  data: [
    {
      id: "dsadasd2321",
      name: "Paliwo",
      value: 123,
      color: 'red'
    },
    {
      id: "23sdrtyyr1",
      name: "Czynsz",
      value: 700,
      color: 'red'
    }
  ]
 
};

export function ChartsReducer(state = initialState, action: ChartsAction) {
  switch (action.type) {
    case ChartsActionTypes.ADD_ENTRY:
      return {
        sum: state.sum + action.payload.value,
        data: [...state.data, action.payload]
      }
      case ChartsActionTypes.DELETE_ENTRY:
      return {
        sum: state.sum - state.data.find(el => el.id == action.payload).value,
        data: state.data.filter(entry => entry.id !== action.payload)
      }
    default:
      return state;
  }
}