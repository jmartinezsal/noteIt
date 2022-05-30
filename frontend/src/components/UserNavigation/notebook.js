import { NavLink } from 'react-router-dom';


function Notebook() {

  return (
    <div className="user-nav-selection">
      &nbsp;
      <i className="fa-solid fa-caret-right"> &nbsp;</i>
        <NavLink to="/notebooks">
          <i className="fa-solid fa-book "></i>
           <span>Notebook</span>
        </NavLink>
      <i className="fa-solid fa-circle-plus"></i>
    </div>
)
}

export default Notebook;
