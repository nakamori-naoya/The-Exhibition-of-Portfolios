import { push } from 'connected-react-router';
import {auth, FirebaseTimestamp, db } from '../../firebase/index';

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
