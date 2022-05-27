import { NavLink } from 'react-router-dom';


function Note() {


  return (
    <div className="user-nav-selection">
      <div className='selection-no-caret'>
          <NavLink  to="/notes">
          <i class="fa-solid fa-note-sticky "></i>
            <span>Note</span>
        </NavLink>
      </div>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  )
}

export default Note;
