import React,{useState, useCallback} from 'react'
import BoxTextInput from '../UIkit/BoxTextInput';
import LightBlueButton from '../UIkit/LightBlueButton';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../reducks/users/operations';
import { push } from 'connected-react-router';

export const ResetPassword = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  
  const  inputEmail  = useCallback((event) => {
      setEmail(event.target.value)
  }, [setEmail]);

  return (
    <div   className="c-section-container">
        <h2 className="u-text__headline  u-text-center" >パスワードのリセット</h2>
        <div className="module-spacer--medium"/>

     <BoxTextInput
     fullWidth={true} label={"メールアドレス"} multiline={false} placeholder={"sample@gmail.com"}
     rows={1} type={"text"} value={email} required={true} onChange={inputEmail}
     /> 
     <div className="module-spacer--medium"/>
     <div  className='center'>
       <LightBlueButton
       label={"Reset Password"}
       onClick={()=> dispatch(resetPassword(email))}
       />
       <div className="module-spacer--small" />
       <p onClick={()=> dispatch(push("/signin"))}>サインイン画面に戻る</p>
     </div> 

    </div>

  )
}
