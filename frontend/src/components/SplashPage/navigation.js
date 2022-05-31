import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(){

  let sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink className="sign-up" to="/signup">Sign Up</NavLink>
      </>
    );


  return (
    <nav className="nav-container">
      <div className="nav-container-left">
        <NavLink exact to="/">
        </NavLink>
      </div>
      <div className="nav-container-center">

      </div>
      <div className="nav-container-right">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
