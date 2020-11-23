import React from 'react'
import LightBlueButton from './UIkit/LightBlueButton';
import { useDispatch } from 'react-redux';
import { signOut } from './reducks/users/operations';



export const Home = () => {
  const dispatch = useDispatch(); 
  
  return (
    <div>
      <LightBlueButton
       label={"sign out"}
       onClick={()=> dispatch(signOut())}/>
    </div>
  )
}
