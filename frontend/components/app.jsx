import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import AllTasks from './all_tasks';

function App(){
  return(
   <div>
     <AuthRoute exact path="/" component={Splash} />
     <ProtectedRoute path="/all" component={AllTasks} />
   </div>
  )
}

export default App;