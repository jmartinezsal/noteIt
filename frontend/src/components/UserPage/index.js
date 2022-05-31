import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { getAllNotebooks } from '../../store/notebook'
import { getAllNotes } from '../../store/note'
import UserNavigation from "../UserNavigation";
import NotePage from "./NotePage";
import HomePage from "./HomePage";
import NotebookPage from "./NotebookPage";


function UserPage() {
  const dispatch = useDispatch();

  const notebooks = useSelector(state => state.notebooks);
  const notes = useSelector(state => state.note);

  useEffect(() => {
    dispatch(getAllNotebooks());
    dispatch(getAllNotes());
  }, [dispatch])



  return (
    <div className="user-page">
      <UserNavigation />
      <Switch>
        <Route path='/home'>
          <HomePage note={notes} />
        </Route>
        <Route path='/notes'>
          <NotePage />
        </Route>
        <Route path='/notebooks'>
          <NotebookPage />
        </Route>
      </Switch>
    </div>
  )
}

export default UserPage;
