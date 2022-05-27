import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Home from './home.js';
import Note from './note.js';
import Notebook from './notebook';
import Trash from './trash';

function UserNavigation(){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className="user-nav-container">
      <ProfileButton />
      <Home />
      <Note />
      <Notebook />
      <Trash />
    </nav>
  );
}

export default UserNavigation;
