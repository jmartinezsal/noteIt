import {NavLink} from 'react-router-dom';


function Notebook(){

  return(
    <div className="user-nav-selection">
      <i class="fa-solid fa-caret-right fa-s"> &nbsp;
      </i>
      <NavLink exact to="/notebooks">
      <i class="fa-solid fa-book">&nbsp; Notebook</i>
      </NavLink>
      <i class="fa-solid fa-circle-plus"></i>

    </div>
  )
}

export default Notebook;
