import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import {getAllNotebooks} from '../../store/notebook'
import {getAllNotes} from '../../store/note'
import UserNavigation from "../UserNavigation";
import NotePage from "./NotePage";


function UserPage(){
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.user);
  const notebooks = useSelector(state => state.notebooks);
  const notes = useSelector(state =>state.notes);

  useEffect(() =>{
    dispatch(getAllNotebooks());
    dispatch(getAllNotes());
  }, [dispatch])



  return(
    <>
      <div className="user-page">
      <UserNavigation />
        <Switch>
          
          <Route path='/notes'>
            <NotePage />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default UserPage;
