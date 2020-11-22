import * as Actions from "./actions"
import initialState from "../store/initialState"

//reducerはstateとactionを引数に受け取り、store内のstateの状態を更新する
export const usersReducer = (state = initialState.users, action) =>{ 
  switch (action.type) { 
    case Actions.SIGN_IN:
    return {
      ...state,
      ...action.payload
    };

    case Actions.SIGN_OUT:
    return {
      ...action.payload
    };
    default:
      return state
  }
};