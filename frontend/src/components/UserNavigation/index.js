import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

import ProfileButton from './ProfileButton';
import Home from './home.js';
import Note from './note.js';
import Notebook from './notebook';
import Trash from './trash';
import Search from './search';

function UserNavigation() {
  const [nav, setNav] = useState(true);



  return (
    <div className={nav ? "user-nav-container active" : "user-nav-container"}  >
      {nav ?
            <>
          <div className='user-nav-top'>
            <ProfileButton />
            <BsArrowLeftCircle className='nav-closer nav-react-icons' onClick={() => setNav(!nav)} />
          </div>
            <Search />
          <div className="user-nav-selection-container">
            <Home />
            <Note />
            <Notebook />
            <Trash />
          </div>
          </>
:
<BsArrowRightCircle className='nav-react-icons nav-opener' onClick={() => setNav(!nav)} />
      }
      </div>

  );
}

export default UserNavigation;
