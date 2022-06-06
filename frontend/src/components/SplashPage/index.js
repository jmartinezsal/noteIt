import { NavLink, Route, Switch } from 'react-router-dom';

import Navigation from './navigation.js';
import Footer from './footer.js';

function SplashPage() {


  return (
    <div className="splash-page">
      <Navigation />
      <div className="welcome-container">
        <h1>Don't worry, let us do the organizing for you.</h1>
        <p> The website that saves everything for you. Create, save and study the notes that you make anytime, anywhere.   </p>
        <NavLink to="/signup">
          <button className="btn splash-btn">Sign up for free</button>
        </NavLink>
        <NavLink to='/login' >
          Already have an acoount? Log in
        </NavLink>
      </div>
      <div className="mid-container">
        <img src="/images/splash-page.png" alt=""></img>

        <div className="mid-left-container">
          <div className="heading">
            <p>WORK ANYWHERE</p>
          </div>
          <div className="description">
            <p>Keep important info handy—your notes sync automatically to all your devices.</p>
          </div>

          <div className="heading">
            <p>REMEMBER EVERYTHING</p>
          </div>
          <div className="description">
            <p>Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
          </div>
          <div className="heading">
            <p>TURN TO-DO INTO DONE</p>
          </div>
          <div className="description">
            <p>Bring your notes, tasks, and schedules together to get things done more easily.</p>
          </div>
          <div className="heading">
            <p>FIND THINGS FAST</p>
          </div>
          <div className="description">
            <p>Get what you need, when you need it with powerful, flexible search capabilities.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default SplashPage;
