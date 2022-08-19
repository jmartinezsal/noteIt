import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { IconContext } from "react-icons";

import { getAllNotebooks } from '../../store/notebook'
import { getAllNotes } from '../../store/note';
import { getAllTrash } from '../../store/trash';
import { ModalProvider } from '../../context/Modal.js'
import CreateNotebookModal from "./Modal/CreateNotebookModal";
import UserNavigation from "../UserNavigation";
import NotePage from "./NotePage";
import HomePage from "./HomePage";
import Notebook from "./NotebookPage";
import Trash from './TrashPage';
import SearchResults from "./SearchResults";


function UserPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)
  const notebooks = useSelector(state => state.notebook);
  const notes = useSelector(state => state.note);

  useEffect(() => {
    dispatch(getAllNotebooks());
    dispatch(getAllNotes());
    dispatch(getAllTrash());

  }, [dispatch])

  if (!sessionUser) return <Redirect to="/" />



  return (
    <div className="user-page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <ModalProvider>
          <UserNavigation />
          <Switch>
            <Route path='/home'>
              <HomePage note={notes} />
            </Route>
            <Route path='/notes' >
              <NotePage />
            </Route>
            <Route path='/notebooks'>
              <Notebook />
            </Route>
            <Route path='/trash'>
              <Trash />
            </Route>
            <Route path='/search'>
              <SearchResults />
            </Route>
          </Switch>

        </ModalProvider>
      </IconContext.Provider>
    </div>
  )
}

export default UserPage;
