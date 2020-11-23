import React, {useCallback, useState} from "react"
import {signIn, signInWithGoogle} from "../reducks/users/operations"
import {useDispatch} from "react-redux"
import {push} from "connected-react-router"
import LightBlueButton from '../UIkit/LightBlueButton';
import GoogleButton from "../UIkit/GoogleButton";
import BoxTextInput from '../UIkit/BoxTextInput';





const SignIn = () =>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");

    const inputEmail = useCallback((event) => {
      setEmail(event.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((event) => {
      setPassword(event.target.value)
    }, [setPassword]);

  return (
       <div   className="c-section-container">
        <h2 className="u-text__headline  u-text-center" >サインイン画面</h2>
        <div className="module-spacer--medium"/>

        <BoxTextInput
            fullWidth={true}  label={"メールアドレス"}  multiline={false}  required={true}
            rows={1} value={email} type={"email"} onChange={inputEmail} placeholder={"sample@gmail.com"}
        />
        <BoxTextInput
            fullWidth={true}  label={"パスワード"}  multiline={false}  required={true}
            rows={1} value={password} type={"password"} onChange={inputPassword} placeholder={"maximum1936"}
        />
        
        <div className="module-spacer--medium" />
        <div className="center">
          <LightBlueButton
          label={"Sign In"}
          onClick={()=> dispatch(signIn(email, password))}
          color="primary"
          />
           <div className="module-spacer--medium" />
          <GoogleButton
          label={"Sign in with Google"}
          onClick={()=> dispatch(signInWithGoogle())}
          />
           <p onClick={()=> dispatch(push("/signup"))}>アカウント登録がまだの方はこちら</p>
           <p onClick={()=> dispatch(push("/signin/reset"))}>パスワードを忘れた場合はこちら</p>
        </div>
    </div>
  )
}

export default SignIn