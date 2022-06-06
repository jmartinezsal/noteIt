import {Route, Switch} from 'react-router-dom';

import Navigation from './navigation.js';
import LoginFormPage from '../LoginFormPage/index.js';
import SignupFormPage from '../SignupFormPage/index.js';

function SplashPage (){


  return(
    <div className="splash-page">
      <Navigation />
      <div className="welcome-container">
        <img src="/images/splash-page.png" alt=""></img>
        <h1>Don't worry, let us do the organizing for you</h1>
        <p></p>
      </div>
      <div className="">
      </div>
    </div>

  )
}

export default SplashPage;
