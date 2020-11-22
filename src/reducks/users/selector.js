//re-ducksパターンでは
//①selectorで、storeで管理しているstateを参照する関数を設定する。
//②Reactのコンポーネントで使用する
//③reselectというnpmモジュールを使用する

import {createSelector} from "reselect"

//storeからstateのusersオブジエクトを取って来る
const usersSelector = (state) => state.users; 

//Header.js内で
//❶const selector = useSelector(state => state);でstoreのstateを取得
//❷const isSignedIn = getIsSignedIn(selector);を実行
export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
);


//createSelectorでは第一引数に[]でstateの状態を渡す。
export const getUserId = createSelector(
      [usersSelector],
      state => state.uid
);

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
);