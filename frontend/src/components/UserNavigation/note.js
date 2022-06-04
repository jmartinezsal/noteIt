import { NavLink } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function Note() {


  return (
    <div className="user-nav-selection">
      <div className='selection-no-caret'>
        <NavLink to="/notes" activeClassName="active-nav">
          <CgNotes />
          <span>Note</span>
        </NavLink>
      </div>
      <div className="plus">
        <NavLink to="/notes/create">
          <i className="fa-solid fa-circle-plus plus"></i>
        </NavLink>
      </div>
    </div>
  )
}

export default Note;
