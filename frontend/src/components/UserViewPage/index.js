import {useSelector} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import SplashPage from '../SplashPage';
import UserPage from '../UserPage';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import UserNavigation from '../UserNavigation';

function UserViewPage(){
  const sessionUser = useSelector(state => state.session.user)

  return(
    <>
    {sessionUser ?
      <UserPage currUser= {sessionUser} /> : <SplashPage />}
    </>
  )
}

export default UserViewPage;
