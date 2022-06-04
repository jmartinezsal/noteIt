import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai'

import * as sessionActions from '../../store/session';

function ProfileButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const user = useSelector(state => state.session.user);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <div onClick={openMenu} className='profile-btn'>
        <img src="/images/avatarImage.png" alt="avatar"></img>
        <p> {user?.username}</p>
      </div>
      {showMenu && (
        <div className='nav-logout' onClick={logout} >
          <AiOutlineLogout size="2em" />
          <p >Logout</p>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
