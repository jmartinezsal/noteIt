import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { VscNewFile } from 'react-icons/vsc';
import ReactHtmlParser from 'html-react-parser';

import ScratchPad from "./ScratchPad";



function HomePage() {

  const sessionUser = useSelector(state => state.session.user);
  const notes = useSelector(state => state.note);
  const format = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
  const today = new Date();
  const notesArr = Object.values(notes);

  // let welcomeMessage = today => {

  // }


  return (
    <div className="home-page">
      <div className="home-background-image">
        <div className="home-welcome-container">
          <h4>Welcome, {sessionUser.username}! </h4>
          <p>{today.toLocaleDateString("en-US", format)}</p>
        </div>
        <div className="home-middle-content">
          <div className="home-notes-container">
            <div className="home-notes-container-header">
              <div className="container-header-left">
                <NavLink to="/notes">
                  NOTES <AiOutlineArrowRight />
                </NavLink>
              </div>
              <NavLink to="/notes/create">
                <VscNewFile />
              </NavLink>
            </div>
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
              <div className="home-note-card home-note-create">
                <p className="note-title"> Create a new note by clicking </p>
                <NavLink to="/notes/create">
                  <VscNewFile />
                </NavLink>
              </div>
            </div>
          </div>
          <ScratchPad />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
