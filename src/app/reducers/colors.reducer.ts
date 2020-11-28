import { ColorActionTypes, ColorAction } from '../actions/color.actions';

import {Color} from '../models/color.model'

export const ColorState :  Array<Color> = 
[{name: 'Red', value: "#ff414d"},{name:'Light Pink', value:'#fcdada'},{name:"Bright Pink", value: "#e6739f"},{name:"Dark Red",value: "#bb2205"},{name: 'Dark gray', value: "#4d5656"}, {name:'Light green', value: '#ccf6c8'}, {name:'Mint Green', value: '#49dcb1'}, {name:'Orange', value: '#ff9642'}, {name: 'Yellow', value: "#ffd246"}, {name: 'Bright Green', value: "#78d237"}, {name: 'Sea Blue', value: "#28b4c8"},{name: 'Navy Blue', value: "#2d73f5"},{name: 'Purple', value: "#aa46be"}]

export function ColorReducer(state : Array<Color> = ColorState, action: ColorAction): Array<Color> {

    switch (action.type) {
        case ColorActionTypes.ADD_COLOR:
          return [...state, action.payload]
        case ColorActionTypes.DELETE_COLOR:
          return state.filter(color => {
           
              return color.value !== action.payload
          })
        
        default:
          return state;
      }

}