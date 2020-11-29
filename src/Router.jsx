import React from 'react'; 
import {Route,Switch} from  "react-router"
import SignUp from './templates/SignUp';
import SignIn from './templates/SignIn';
import Auth from './Auth';
import { Home } from './Home';
import { ResetPassword } from './templates/ResetPassword';
import CardList from './templates/CardList';
import { EditPortofolio } from './templates/EditPortfolio';
import { Test } from './Test';
import { RaderPlot } from './templates/components/RaderPlot';



const Router = () => {
 return (
  <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={ResetPassword} />
      <Route exact path={"/test"} component={Test} />
      
      

    <Auth>
      <Route exact path={'(/)?'} component={Home} />
      <Route exact path={'/list'} component={CardList} />
      <Route exact path={'/edit'} component={EditPortofolio} />
      <Route exact path={"/rader"} component={RaderPlot} />
    </Auth>
    
  </Switch>
 )
}
export default Router;