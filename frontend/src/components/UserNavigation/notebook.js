import { NavLink } from 'react-router-dom';


function Notebook() {

  return (
    <div className="user-nav-selection">
      &nbsp;
      <i class="fa-solid fa-caret-right"> &nbsp;</i>
        <NavLink to="/notebooks">
          <i class="fa-solid fa-book "></i>
           <span>Notebook</span>
        </NavLink>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
)
}

export default Notebook;
