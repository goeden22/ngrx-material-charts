import {ActionReducerMap, createFeatureSelector} from '@ngrx/store'

import { Entry } from '../models/entry.model';
import { Color } from '../models/color.model';


import { ChartsReducer, ChartsState, chartsInterface } from './charts.reducer';
import { ColorReducer, ColorState } from './colors.reducer';


export interface AppState {
    charts: chartsInterface
    colors: Array<Color>
  }

  export const reducers: ActionReducerMap<AppState> = {
    charts: ChartsReducer,
    colors: ColorReducer
  }