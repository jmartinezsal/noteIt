import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
function Home() {

  return (
    <div className="user-nav-selection">
      <div className="selection-no-caret">
        <NavLink exact to="/home" activeClassName='active-nav'>
        <AiOutlineHome/>
            <span>Home</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;
