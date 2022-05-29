import { NavLink } from 'react-router-dom';
function Home() {

  return (
    <div className="user-nav-selection">
      <div className="selection-no-caret">
        <NavLink to="/home">
          <i class="fa-solid fa-house "></i>
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;
