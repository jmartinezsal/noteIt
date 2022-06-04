import { NavLink } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function Note() {


  return (
    <div className="user-nav-selection">
      <div className='selection-no-caret'>
        <CgNotes />
        <NavLink to="/notes">
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
