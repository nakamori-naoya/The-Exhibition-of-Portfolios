import {
  createStore as reduxCreacteStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {connectRouter,routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk"



//historyは、ブラウザ内で、今どのpathにいるのかを示す
export default function createStore (history) {
  return reduxCreacteStore(
    combineReducers({
      //combineReducersはReducersをまとめる役割でstateのデータ構造(※initialStateと同じデータ構造にする！！)をreturnする。下部①を参照。
      //オブジェクトのバリューにはRecucerを受け取るようにする
      router: connectRouter(history), 
      //●●Reducersは全て、reducers.jsに書かれている。
      //storeでは、全てのstateを中央集権的に管理している。
    }),
    
    applyMiddleware(
      //Routerをmiddlewareとして使うよ(applyするよ)
      routerMiddleware(history),
      thunk
    )
  )
};