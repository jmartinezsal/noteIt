import {NavLink} from 'react-router-dom';


function Trash(){

  return(
    <div className="user-nav-selection">
      <NavLink exact to="/trash">
      <i class="fa-solid fa-trash">&nbsp; Trash</i>
      </NavLink>
    </div>
  )
}

export default Trash;
