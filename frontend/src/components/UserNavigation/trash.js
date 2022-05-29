import { NavLink } from 'react-router-dom';


function Trash() {

  return (
    <div className="user-nav-selection">
      <div className="selection-no-caret">
        <NavLink to="/trash">
          <i class="fa-solid fa-trash "></i>
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Trash;
