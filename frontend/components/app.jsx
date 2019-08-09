import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import MainPageContainer from './main_container';

function App(){
  return(
   <div>
     <AuthRoute exact path="/" component={Splash} />
     <ProtectedRoute path={`/users/${currentUser.id}/tasks`} component={MainPageContainer} />
   </div>
  )
}

export default App;