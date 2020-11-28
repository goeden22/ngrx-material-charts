import { ChartsActionTypes, ChartsAction } from '../actions/charts.actions';
import { Entry } from '../models/entry.model';

export interface chartsInterface {
  sum: number,
  data: Array<Entry>
}

export const ChartsState : chartsInterface = {
  sum: 100,
  data: [
    {
      id: "dsadasd2321",
      name: "Paliwo",
      value: 75,
      color: {name: 'Red', value: "#ff414d"}
    },
    {
      id: "23sdrtyyr1",
      name: "Czynsz",
      value: 50,
      color: {name:'Mint Green', value: '#49dcb1'}
    },
    {
      id: "dawdwad",
      name: "Czynsz",
      value: 25,
      color: {name: 'Yellow', value: "#ffd246"}
    }
  ]

};

export function ChartsReducer(state = ChartsState, action: ChartsAction) {
  switch (action.type) {
    case ChartsActionTypes.ADD_ENTRY:
      return {
        sum: state.sum + action.payload.value,
        data: [...state.data, action.payload].sort((a, b) => {
          return b.value - a.value
        })
      }
    case ChartsActionTypes.DELETE_ENTRY:
      return {
        sum: state.sum - state.data.find(el => el.id == action.payload).value,
        data: state.data.filter(entry => entry.id !== action.payload)
      }
    case ChartsActionTypes.EDIT_ENTRY:
      
      return {
        sum: state.sum - state.data.find(el => el.id == action.payload.id).value + action.payload.value,
        data: state.data.map(el => {
          if (el.id === action.payload.id){
            return action.payload
          } else {
            return el
          }
        })
      }

    default:
      return state;
  }
}