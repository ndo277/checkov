import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

function Splash(){
  return(
    <div>
      <h1>CHECKOV</h1>
      <h1>Get tasks done and check 'em off.</h1>
      <SignUpFormContainer />
      <LogInFormContainer />
    </div>
  )
}

export default Splash;