import {createSelector} from "reselect"

const usersSelector = (state) => state.users; 

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