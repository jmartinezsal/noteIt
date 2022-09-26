import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import MobileContext from '../../context/Mobile';

function Navigation(){

  const {mobile} = useContext(MobileContext);

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
          <img src={ !mobile ? '/images/logo.svg' : '/images/avatarImage.png'} alt='logo'></img>
        </NavLink>
      </div>
      <div className="nav-container-right">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
