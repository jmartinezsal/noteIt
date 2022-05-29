import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function HomePage() {

  const sessionUser = useSelector(state => state.session.user);
  const notes = useSelector(state => state.note);
  const format = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
  const today = new Date();
  const notesArr = Object.values(notes);

  let welcomeMessage = today => {

  }


  return (
    <div className="home-page">
      <div className="home-background-image">
        <div className="home-welcome-container">
          <h4>Welcome, {sessionUser.username}! </h4>
          <p>{today.toLocaleDateString("en-US", format)}</p>
        </div>

        <div className="home-notes-container">
          <NavLink to="/notes">
            NOTES
          </NavLink>
          <div className="home-notes">
          {notesArr.map(note =>(
            <div className="home-note-card" key={note.id}>

              {note.title}
            </div>
          ))}
          </div>



        </div>


      </div>
    </div>
  )
}

export default HomePage;
