import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Home from './home.js';
import Note from './note.js';
import Notebook from './notebook';
import Trash from './trash';

function UserNavigation() {

  return (
    <div className="user-nav-container">
      <ProfileButton />
      <div className="user-nav-selection-container">
        <Home />
        <Note />
        <Notebook />
        <Trash />
      </div>
    </div>
  );
}

export default UserNavigation;
