import React from 'react'; 
import {Route,Switch} from  "react-router"
import SignUp from './templates/SignUp';
import SignIn from './templates/SignIn';
import Auth from './Auth';
import { Home } from './Home';
import { ResetPassword } from './templates/ResetPassword';
import CardList from './templates/CardList';
import { EditPortofolio } from './templates/EditPortofolio';


const Router = () => {
 return (
  <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={ResetPassword} />

    <Auth>
      <Route exact path={'(/)?'} component={Home} />
      <Route exact path={'/list'} component={CardList} />
      <Route exact path={'/edit'} component={EditPortofolio} />

    </Auth>
    
  </Switch>
 )
}
export default Router;