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

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
               placeholder="Username"
               onChange={updateUsername}/>
        <input type="text" 
               placeholder="Password"
               onChange={updatePassword}/>
        <input type="submit" value={props.formType}/>
      </form>
    </div>
  )
}

export default SessionForm;