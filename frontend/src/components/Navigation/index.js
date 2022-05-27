import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className="nav-container">
      <div className="nav-container-left">
        <NavLink exact to="/">
        </NavLink>
      </div>
      <div className="nav-container-center">

      </div>
      <div className="nav-container-right">
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
