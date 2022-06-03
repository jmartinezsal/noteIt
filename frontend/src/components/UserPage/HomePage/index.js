import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';



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
          <NavLink to="/notes/create">
            <i className="fa-solid fa-file-circle-plus"></i>
          </NavLink>
          <div className="home-notes">
            {notesArr.map(note => (
              <div className="home-note-card" key={note.id}>
                <NavLink key={note.id} to={`/notes/${note.id}`}>
                  <p className="note-title">{note.title}</p>
                  <p className="note-content">{ReactHtmlParser(note.content)} </p>
                  <p className="note-content">{note.updatedAt.slice(5, 10)}-{note.updatedAt.slice(0, 4)}</p>
                </NavLink>
              </div>
            ))}
          </div>



        </div>


      </div>
    </div>
  )
}

export default HomePage;
