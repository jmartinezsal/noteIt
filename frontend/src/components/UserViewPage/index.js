import {useSelector} from 'react-redux';

import SplashPage from '../SplashPage';
import UserPage from '../UserPage';

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
