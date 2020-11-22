import React from 'react'; 
import {Switch, Route} from  "react-router"
import SignUp from './templates/SignUp';
import App from './App';


const Router = () => {
 return (
  <Switch>
    <Route exact path={"/signup"}  component={SignUp}/>
    <Route exact path={"(/)?"}  component={App}/>
  </Switch>
 )
}
export default Router;