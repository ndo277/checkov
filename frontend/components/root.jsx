import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import AppContainer from './app_container';

function Root({store}){
  return(
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
  )
}

export default Root;