import * as Actions from './actions';
import {initialState} from '../store/initialState';

export const PortfoliosReducer = (state = initialState.portfolios, action)  => {
  switch (action.type) {
      case Actions.FETCH_PORTFOLIOS:
          return {
              ...state,
              list: action.payload
          };
      default:
          return state
  }
};