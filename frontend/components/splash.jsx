import React, {useState} from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

function Splash(){
  const [isLoginForm, setForm] = useState(false);

  return(
    <div>
      <h1>CHECKOV</h1>
      <h1>Get tasks done and check 'em off.</h1>

      <button onClick={() => setForm(false)} className="form-tab">
        SIGN UP
      </button >
      <button onClick={() => setForm(true)} className="form-tab">
        LOG IN
      </button>
      {!isLoginForm && <SignUpFormContainer />}
      {isLoginForm && <LogInFormContainer />}
    </div>
  )
}

export default Splash;