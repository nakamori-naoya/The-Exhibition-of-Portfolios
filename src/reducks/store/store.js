import {createStore as reduxCreacteStore,combineReducers,applyMiddleware} from "redux";
import {connectRouter,routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk"
import { usersReducer } from '../users/reducers';
import { PortfoliosReducer } from '../Portfolios/reducers';




//historyは、ブラウザ内で、今どのpathにいるのかを示す
export function createStore(history) {
  return reduxCreacteStore(
    combineReducers({
      router: connectRouter(history),
      users: usersReducer,
      portfolios: PortfoliosReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
};