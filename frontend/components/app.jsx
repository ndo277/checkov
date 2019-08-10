import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import MainPageContainer from './main_container';
import CheckedTasksContainer from './checked_container';
import UncheckedTasksContainer from './unchecked_container';

function App(){
  return(
   <div>
     <AuthRoute exact path="/" component={Splash} />
     <ProtectedRoute path="/all" component={MainPageContainer} />
     <ProtectedRoute path="/checked" component={CheckedTasksContainer} />
     <ProtectedRoute path="/unchecked" component={UncheckedTasksContainer} />
   </div>
  )
}

export default App;