import React from 'react'; 
import {Route,Switch} from  "react-router"
import SignUp from './templates/SignUp';
import SignIn from './templates/SignIn';


const Router = () => {
 return (
  <Switch>
    <Route exact path={"/signup"}>
      <SignUp/>
    </Route>
    <Route exact path={"/signin"} >
      <SignIn/>
    </Route>
  </Switch>
 )
}
export default Router;