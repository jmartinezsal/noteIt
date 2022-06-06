import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import Navigation from '../SplashPage/navigation';
import Demo from '../Demo';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/home" />
  )

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
      .then(() => history.push('/home'))
      .catch(async res => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })



  }

  return (
    <>
      <Navigation />
      <div className="auth-page">
        <div className="auth-form-container">
          <div className="auth-form-top" >
            <img className="auth-logo" src="/images/auth-logo.svg" alt="brand" />
            <p>Noting everyting you need.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <ul className="errors">
              {errors.map((error, idx) =>
                <li key={idx}>{error}</li>
              )}
            </ul>
            <div className="input-container">
              <input type="text"
                placeholder='Username or Email'
                value={credential}
                name="credential"
                onChange={e => setCredential(e.target.value)}
              />
              <input type="password"
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-btn-container">
              <button type="submit" className="auth-btn btn">Sign In</button>
              <Demo />
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default LoginFormPage;
