import {NavLink} from 'react-router-dom';


function Note(){


  return(
    <div className="user-nav-selection">
      <i class="fa-solid fa-caret-right fa-s"> &nbsp;</i>
      <NavLink exact to="/notes">
        <i class="fa-solid fa-note-sticky">&nbsp; Note </i>
      </NavLink>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  )
}

export default Note;
