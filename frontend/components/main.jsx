import React from 'react';

function Main(props) {

  const handleLogOut = () => {
    props.logout();
  };

  return(
    <div className="header">
      <h3>CHECKOV</h3>
      <p>Hi, {props.currentUser.username}.</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Main;