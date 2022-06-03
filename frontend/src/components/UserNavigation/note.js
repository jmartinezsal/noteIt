import { NavLink } from 'react-router-dom';


function Note() {


  return (
    <div className="user-nav-selection">
      <div className='selection-no-caret'>
        <NavLink to="/notes">
          <i className="fa-solid fa-note-sticky "></i>
          <span>Note</span>
        </NavLink>
      </div>
      <NavLink to="/notes/create">
        <i className="fa-solid fa-circle-plus"></i>
      </NavLink>
    </div>
  )
}

export default Note;
