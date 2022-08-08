import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircleFill } from 'react-icons/bs'

import ProfileButton from './ProfileButton';
import Home from './home.js';
import Note from './note.js';
import Notebook from './notebook';
import Trash from './trash';

function UserNavigation() {
  const [nav, setNav] = useState(true);

  return (
    <>
      {nav ?
        <div className="user-nav-container">

          <div className='user-nav-top'>
            <ProfileButton />
            <BsArrowLeftCircle className='nav-closer nav-react-icons' onClick={() => setNav(!nav)} />
          </div>
          <div className="user-nav-selection-container">
            <Home />
            <Note />
            <Notebook />
            <Trash />
          </div>
        </div>

        :

        <BsArrowRightCircleFill className='nav-react-icons nav-opener ' onClick={() => setNav(!nav)}/>}
    </>
  );
}

export default UserNavigation;
