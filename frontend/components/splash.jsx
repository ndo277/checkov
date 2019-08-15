import React, {useState} from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

function Splash(){
  const [isLoginForm, setForm] = useState(false);

  return(
    <div className="splash">
      <br/><br/>
      <div className="title">
        CHECKO <img src="/images/checkmark.png" alt="V" className="checkpic"/>
      </div>
      <br/>
      <div className="slogan">
        Track your tasks and check 'em off.
      </div>
      <br/><br/><br/> 
      
      <div className="splash-bottom">
        <div>
          <button onClick={() => setForm(false)} className="form-tab">
            SIGN UP
          </button >

          <button onClick={() => setForm(true)} className="form-tab">
            LOG IN
          </button>
          {!isLoginForm && <SignUpFormContainer />}
          {isLoginForm && <LogInFormContainer />}
        </div>
       

        <img src="/images/sample.png" alt="sample" className="sample"/>
      </div>
      
    </div>
  )
}

export default Splash;