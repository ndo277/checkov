import React, {useState} from 'react';

function SessionForm(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {username: username, password: password};
    props.processForm(userData);
  };

  const updateUsername = (e) => {
    setUsername(e.currentTarget.value);
  };

  const updatePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const renderErrors = () => {
    return (
      <div className="errors">
        {props.errors.map((error) => (
          <p>{error}</p>
        ))}
      </div>
    )
  }

  return(
    <div >
      <form onSubmit={handleSubmit} className="session-form">
        <input type="text" 
               placeholder="Username"
               onChange={updateUsername}
               className="form-field"/>
        <input type="password" 
               placeholder="Password"
               onChange={updatePassword}
               className="form-field"/>

        <div className="session-errors">{renderErrors()}</div>

        <input type="submit" value={props.formType} className="auth-button"/>
      </form>
    </div>
  )
}

export default SessionForm;