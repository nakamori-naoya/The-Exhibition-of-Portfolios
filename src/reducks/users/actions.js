export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return{
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username
    }
  }
};
/* 例：userstate = {
              isSignedIn: true,
              role: role,            (customer)
              uid: uid,              (8v4ew2uwpRQwQaDmZDvwMntM2np1)
              username: username     (直也)
                   } となるようにハッシュ形式で引数を渡す    参考:operations.jsのlistenAuthState下部   */

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT", 
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: ""
    }
  }
};