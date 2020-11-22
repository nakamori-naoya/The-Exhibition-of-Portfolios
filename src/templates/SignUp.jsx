import React, {useState, useCallback} from 'react'; 
import TextInput from '../UIkit/TextInput';
import LightBlueButton from "../UIkit/LightBlueButton"
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import { push } from 'connected-react-router';



const SignUp = () => {
  const dispatch = useDispatch(); 

  const [username, setUsername] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername  = useCallback( (event) => {
      setUsername(event.target.value)
  }, [setUsername]);

  const inputEmail  = useCallback( (event) => {
    setEmail(event.target.value)
}, [setEmail]);

  const inputPassword  = useCallback( (event) => {
  setPassword(event.target.value)
}, [setPassword]);

  const inputConfirmPassword  = useCallback( (event) => {
  setConfirmPassword(event.target.value)
}, [setConfirmPassword]);


 return (
   <div className="c-section-container">
     <h2 className="u-text__headline u-text-center" >アカウントの登録</h2>
     <div className="module-spacer--medium"/>
     <TextInput
     fullWidth={true} label={"ユーザー名"} multiline={false}
     rows={1} type={"text"} value={username} required={true} onChange={inputUsername}
     />
     <TextInput
     fullWidth={true} label={"メールアドレス"} multiline={false}
     rows={1} type={"text"} value={email} required={true} onChange={inputEmail}
     /> 
     <TextInput
     fullWidth={true} label={"パスワード(半角英数字で6文字以上)"} multiline={false}
     rows={1} type={"password"} value={password} required={true} onChange={inputPassword}
     /> 
     <TextInput
     fullWidth={true} label={"パスワードの再確認"} multiline={false}
     rows={1} type={"password"} value={confirmPassword} required={true} onChange={inputConfirmPassword}
     />  
     <div className="module-spacer--small"/>
     <div className="center">
       <LightBlueButton
       label={"アカウント登録"}
       onClick={()=> dispatch(signUp(username, email, password, confirmPassword))}
       />
     </div>
     <div className='module-spacer--medium'/> 
     <div className="center">
       <LightBlueButton
         label={"サインイン"}
         onClick={()=> dispatch(push("/signin"))}
         />
      </div>
   </div>
 )
}
export default SignUp;