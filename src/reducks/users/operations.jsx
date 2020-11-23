import { push } from 'connected-react-router';
import {auth, FirebaseTimestamp, db } from '../../firebase/index';
import {signInAction} from "./actions";
import firebase from "firebase/app"

export const signUp  = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    if(username === "" || email=== "" || password === "" || confirmPassword === ""){
      alert("必須項目が入力されておりません。")
      return false
    }
    if(password !== confirmPassword){
      alert ("パスワードが一致しません。もう一度入力し直してください")
      return false
    }

  return auth.createUserWithEmailAndPassword(email, password)
           .then(result =>{  //resultの中身はconsole.log(result)で確認せよ
               const user = result.user
               if(user){
                 const uid = user.uid
                 const timestamp = FirebaseTimestamp.now();
                 const userInitialData ={
                   created_at: timestamp,
                   email: email,
                   role: "member",
                   uid: uid,
                   updated_at: timestamp,
                   username: username
                 }
                 db.collection("users").doc(uid).set(userInitialData)
                    .then(()=>{
                      dispatch(push("/"))
                    })
               }
           })
      
    
  }
}


//Sign In   
export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === ""){
      alert("必須項目が未入力です")
      return false
     }

     auth.signInWithEmailAndPassword(email,password)
     .then(result => {
       const user = result.user

       if(user) {
         const uid = user.uid 
         db.collection("users").doc(uid).get()
           .then(snapshot=> {
             const data = snapshot.data()
             dispatch(signInAction({
               isSignedIn: true,
               role: data.role,
               uid: uid,
               username: data.username
             }))
             dispatch(push("/"))
         } )
       }
     })
  }
}

export const signInWithGoogle = () => {
  return async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
     .then(result => {
          const user = result.user
            if(user){
                 const uid = user.uid;
                 const username = user.displayName;
                 const email = user.email;
                 const timestamp = FirebaseTimestamp.now();
                 const userInitialData ={
                  created_at: timestamp,
                  email: email,
                  role: "member",
                  uid: uid,
                  updated_at: timestamp,
                  username: username
                 }

                 db.collection("users").doc(uid).set(userInitialData)
                    .then(()=>{
                      dispatch(push("/"))
                    })
  }
})
}}



export const listenAuthState = () => {
  return async (dispatch) =>{
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid 
        db.collection("users").doc(uid).get()
        .then(snapshot=> {
            const data = snapshot.data()
            dispatch(signInAction({
              isSignedIn: true,
              role: data.role,
              uid: uid,
              username: data.username
            }))
        } ) 
      }else{
        dispatch(push("/signin"))
      }
    })

  }
}
