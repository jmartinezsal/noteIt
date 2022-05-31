import {useSelector} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import SplashPage from '../SplashPage';
import UserPage from '../UserPage';


function UserViewPage(){
  const sessionUser = useSelector(state => state.session.user)

  return(
    <>
    {sessionUser ?
      (
        <>
        <Route path={['/home','/notes','/notebooks','/notes/:noteId',
        '/notebooks/:notebookId', '/notebooks/:notebookId/notes/:noteId']}>
          <UserPage currUser= {sessionUser} />
        </Route>
        </>
      )
      : <SplashPage />}
    </>
  )
}

export default UserViewPage;
