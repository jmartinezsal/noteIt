import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { getAllNotebooks } from '../../store/notebook'
import { getAllNotes } from '../../store/note';
import { getAllTrash } from '../../store/trash';
import { ModalProvider } from '../../context/Modal.js'
import UserNavigation from "../UserNavigation";
import NotePage from "./NotePage";
import HomePage from "./HomePage";
import Notebook from "./NotebookPage";
import Trash from './TrashPage';


function UserPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)
  const notebooks = useSelector(state => state.notebook);
  const notes = useSelector(state => state.note);

  useEffect(() => {
    dispatch(getAllNotebooks());
    dispatch(getAllNotes());
    dispatch(getAllTrash())
  }, [dispatch])

  if(!sessionUser) return <Redirect to="/"/>

  return (
    <div className="user-page">

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
        </Switch>

      </ModalProvider>
    </div>
  )
}

export default UserPage;
