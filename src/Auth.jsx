import React, {useEffect} from 'react'; 
import { getIsSignedIn } from './reducks/users/selector';
import {useSelector} from 'react-redux'  
import { useDispatch } from 'react-redux';
import {listenAuthState}from "./reducks/users/operations"

const Auth = ({children}) => {
  const dispatch = useDispatch(); 
  const selector =  useSelector(state => state); 
  const isSignedIn = getIsSignedIn(selector)

  useEffect(() => { 
    if(!isSignedIn){
      dispatch(listenAuthState())
    }
  }, []);
  
  if(!isSignedIn){
    return<></>
  }else{
    return  children
  }
}
export default Auth;