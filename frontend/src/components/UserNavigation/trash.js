import { NavLink } from 'react-router-dom';
import {IoTrashOutline} from 'react-icons/io5'


function Trash() {

  return (
    <div className="user-nav-selection">
      <div className="selection-no-caret">
        <NavLink to="/trash">
          <IoTrashOutline />
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Trash;
