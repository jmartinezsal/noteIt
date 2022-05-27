import {NavLink} from 'react-router-dom';
function Home(){

  return(
    <div className="user-nav-selection">
      <NavLink exact to="/">
        <i class="fa-solid fa-house">&nbsp; Home</i>
      </NavLink>
    </div>
    )
}

export default Home;
