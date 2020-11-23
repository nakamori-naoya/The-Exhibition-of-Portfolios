import React from 'react'; 
import {Route,Switch} from  "react-router"
import SignUp from './templates/SignUp';
import SignIn from './templates/SignIn';
import Auth from './Auth';
import { Home } from './Home';
import { ResetPassword } from './templates/ResetPassword';
import CardList from './templates/CardList';


const Router = () => {
 return (
  <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={ResetPassword} />

    <Auth>
      <Route exact path={'(/)?'} component={Home} />
      <Route exact path={'/index'} component={CardList} />
    </Auth>
    
  </Switch>
 )
}
export default Router;