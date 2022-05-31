import {Route, Switch} from 'react-router-dom';

import Navigation from './navigation.js';
import LoginFormPage from '../LoginFormPage/index.js';
import SignupFormPage from '../SignupFormPage/index.js';

function SplashPage (){


  return(
    <div className="splash-page">
      <Navigation />
      <div className="welcome-container">
        <h1>Welcome to noteIt</h1>
      </div>
      <div className="">
      </div>
    </div>

  )
}

export default SplashPage;
