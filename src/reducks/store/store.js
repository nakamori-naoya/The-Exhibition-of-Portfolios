import {
  createStore as reduxCreacteStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {connectRouter,routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk"



//historyは、ブラウザ内で、今どのpathにいるのかを示す
export const createStore  = (history) => {
  return reduxCreacteStore(
    combineReducers({
      router: connectRouter(history),
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
};